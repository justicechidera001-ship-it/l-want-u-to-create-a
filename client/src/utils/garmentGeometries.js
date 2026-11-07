import * as THREE from 'three';

/**
 * Creates sculpted 3D garment meshes with customizable materials and decal surfaces
 */

// Helper: Apply subtle organic cloth wrinkling to vertices
function addClothFolds(geometry, amplitude = 0.03, frequency = 4.0) {
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const z = pos.getZ(i);

    // Subtle natural drape folds
    const fold1 = Math.sin(y * frequency + x * 2.0) * amplitude;
    const fold2 = Math.cos(y * (frequency * 1.5) + z * 3.0) * (amplitude * 0.6);
    pos.setZ(i, z + fold1 + fold2);
  }
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * HOODIE GENERATOR
 */
export function createHoodieMesh(materials) {
  const group = new THREE.Group();
  group.name = 'garment_hoodie';

  // 1. Torso: Sculpted cylinder with drop shoulders and slight drape
  const torsoGeo = new THREE.CylinderGeometry(0.85, 0.95, 2.1, 32, 24, true);
  // Add organic taper and chest volume
  const pos = torsoGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const factor = (y + 1.05) / 2.1; // 0 at bottom, 1 at top
    // Broad shoulders, relaxed waist
    const widthFactor = 1.0 + Math.sin(factor * Math.PI) * 0.12;
    pos.setX(i, x * widthFactor);
    // Subtle forward chest curvature
    pos.setZ(i, z * 0.75 + (factor > 0.5 ? (factor - 0.5) * 0.15 : 0));
  }
  addClothFolds(torsoGeo, 0.02, 5.0);
  const torsoMesh = new THREE.Mesh(torsoGeo, materials.primary);
  torsoMesh.castShadow = true;
  torsoMesh.receiveShadow = true;
  torsoMesh.name = 'primary_mesh';
  group.add(torsoMesh);

  // 2. Kangaroo Pocket (Curved 3D plate over front abdomen)
  const pocketGeo = new THREE.CylinderGeometry(0.72, 0.76, 0.6, 24, 6, false, -Math.PI * 0.35, Math.PI * 0.7);
  const pocketMesh = new THREE.Mesh(pocketGeo, materials.accent || materials.primary);
  pocketMesh.position.set(0, -0.3, 0.03);
  pocketMesh.scale.set(1.03, 1, 0.85);
  pocketMesh.castShadow = true;
  pocketMesh.name = 'pocket_mesh';
  group.add(pocketMesh);

  // Kangaroo pocket entry trims
  const trimGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.62, 12);
  const leftTrim = new THREE.Mesh(trimGeo, materials.accent || materials.primary);
  leftTrim.position.set(-0.55, -0.3, 0.55);
  leftTrim.rotation.z = 0.25;
  group.add(leftTrim);

  const rightTrim = new THREE.Mesh(trimGeo, materials.accent || materials.primary);
  rightTrim.position.set(0.55, -0.3, 0.55);
  rightTrim.rotation.z = -0.25;
  group.add(rightTrim);

  // 3. Ribbed Bottom Hem
  const hemGeo = new THREE.CylinderGeometry(0.92, 0.9, 0.22, 32);
  const hemMesh = new THREE.Mesh(hemGeo, materials.accent || materials.primary);
  hemMesh.position.set(0, -1.15, 0);
  hemMesh.scale.set(1, 1, 0.75);
  hemMesh.castShadow = true;
  hemMesh.name = 'accent_mesh_hem';
  group.add(hemMesh);

  // 4. Left Sleeve (Curved & relaxed drop shoulder)
  const sleeveGeo = new THREE.CylinderGeometry(0.38, 0.22, 1.7, 24, 16);
  addClothFolds(sleeveGeo, 0.025, 4.0);

  const leftSleeve = new THREE.Mesh(sleeveGeo, materials.primary);
  leftSleeve.position.set(-1.18, 0.15, 0);
  leftSleeve.rotation.z = 0.42;
  leftSleeve.rotation.y = 0.1;
  leftSleeve.castShadow = true;
  group.add(leftSleeve);

  // Left Cuff
  const cuffGeo = new THREE.CylinderGeometry(0.23, 0.21, 0.28, 20);
  const leftCuff = new THREE.Mesh(cuffGeo, materials.accent || materials.primary);
  leftCuff.position.set(-1.6, -0.55, 0);
  leftCuff.rotation.z = 0.42;
  leftCuff.name = 'accent_mesh_cuff_l';
  group.add(leftCuff);

  // 5. Right Sleeve & Cuff
  const rightSleeve = new THREE.Mesh(sleeveGeo.clone(), materials.primary);
  rightSleeve.position.set(1.18, 0.15, 0);
  rightSleeve.rotation.z = -0.42;
  rightSleeve.rotation.y = -0.1;
  rightSleeve.castShadow = true;
  group.add(rightSleeve);

  const rightCuff = new THREE.Mesh(cuffGeo, materials.accent || materials.primary);
  rightCuff.position.set(1.6, -0.55, 0);
  rightCuff.rotation.z = -0.42;
  rightCuff.name = 'accent_mesh_cuff_r';
  group.add(rightCuff);

  // 6. Sculptural Double-Layered Hood
  const hoodShape = new THREE.SphereGeometry(0.68, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.72);
  // Flatten face opening
  const hoodPos = hoodShape.attributes.position;
  for (let i = 0; i < hoodPos.count; i++) {
    const z = hoodPos.getZ(i);
    if (z > 0.25) {
      hoodPos.setZ(i, 0.25 - Math.sin((z - 0.25) * 2) * 0.1);
    }
  }
  hoodShape.computeVertexNormals();
  const hoodMesh = new THREE.Mesh(hoodShape, materials.accent || materials.primary);
  hoodMesh.position.set(0, 1.35, -0.15);
  hoodMesh.rotation.x = -0.15;
  hoodMesh.scale.set(1, 1.25, 1.15);
  hoodMesh.castShadow = true;
  hoodMesh.name = 'hood_mesh';
  group.add(hoodMesh);

  // Inner hood lining (darker / accent)
  const innerHoodGeo = new THREE.SphereGeometry(0.65, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.7);
  const innerHoodMesh = new THREE.Mesh(innerHoodGeo, materials.primary);
  innerHoodMesh.position.set(0, 1.35, -0.15);
  innerHoodMesh.rotation.x = -0.15;
  innerHoodMesh.scale.set(0.98, 1.22, 1.12);
  innerHoodMesh.material.side = THREE.BackSide;
  group.add(innerHoodMesh);

  // 7. Tubular Drawstrings with Metal Aglets
  const createDrawstring = (xOffset) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(xOffset * 0.3, 0.95, 0.42),
      new THREE.Vector3(xOffset * 0.35, 0.6, 0.46),
      new THREE.Vector3(xOffset * 0.28, 0.2, 0.48),
      new THREE.Vector3(xOffset * 0.32, -0.15, 0.5)
    ]);
    const cordGeo = new THREE.TubeGeometry(curve, 20, 0.022, 8, false);
    const cordMesh = new THREE.Mesh(cordGeo, materials.cords);
    cordMesh.name = 'cord_mesh';
    group.add(cordMesh);

    // Metal aglet tip
    const agletGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.14, 12);
    const agletMesh = new THREE.Mesh(agletGeo, materials.hardware);
    agletMesh.position.set(xOffset * 0.32, -0.18, 0.5);
    agletMesh.name = 'aglet_mesh';
    group.add(agletMesh);
  };
  createDrawstring(-1);
  createDrawstring(1);

  // 8. Decal Surfaces
  // Front Decal Plane (curved slightly to fit chest)
  const frontDecalGeo = new THREE.PlaneGeometry(0.85, 0.85, 12, 12);
  const frontDecalPos = frontDecalGeo.attributes.position;
  for (let i = 0; i < frontDecalPos.count; i++) {
    const x = frontDecalPos.getX(i);
    frontDecalPos.setZ(i, -x * x * 0.15 + 0.015);
  }
  frontDecalGeo.computeVertexNormals();
  const frontDecalMesh = new THREE.Mesh(frontDecalGeo, materials.decal);
  frontDecalMesh.position.set(0, 0.4, 0.54);
  frontDecalMesh.name = 'decal_front';
  group.add(frontDecalMesh);

  // Back Decal Plane
  const backDecalGeo = new THREE.PlaneGeometry(0.9, 0.9, 12, 12);
  const backDecalPos = backDecalGeo.attributes.position;
  for (let i = 0; i < backDecalPos.count; i++) {
    const x = backDecalPos.getX(i);
    backDecalPos.setZ(i, x * x * 0.15 + 0.015);
  }
  backDecalGeo.computeVertexNormals();
  const backDecalMesh = new THREE.Mesh(backDecalGeo, materials.decal);
  backDecalMesh.position.set(0, 0.35, -0.53);
  backDecalMesh.rotation.y = Math.PI;
  backDecalMesh.name = 'decal_back';
  group.add(backDecalMesh);

  // Left Chest Mini Decal
  const leftChestGeo = new THREE.PlaneGeometry(0.35, 0.35);
  const leftChestMesh = new THREE.Mesh(leftChestGeo, materials.decal);
  leftChestMesh.position.set(-0.35, 0.55, 0.52);
  leftChestMesh.rotation.y = 0.2;
  leftChestMesh.name = 'decal_chest_left';
  group.add(leftChestMesh);

  return group;
}

/**
 * T-SHIRT GENERATOR
 */
export function createTShirtMesh(materials) {
  const group = new THREE.Group();
  group.name = 'garment_tshirt';

  // Torso
  const torsoGeo = new THREE.CylinderGeometry(0.82, 0.88, 2.3, 32, 24, true);
  const pos = torsoGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const factor = (y + 1.15) / 2.3;
    const widthFactor = 1.0 + Math.sin(factor * Math.PI) * 0.1;
    pos.setX(i, x * widthFactor);
    pos.setZ(i, z * 0.68 + (factor > 0.5 ? (factor - 0.5) * 0.12 : 0));
  }
  addClothFolds(torsoGeo, 0.02, 5.5);
  const torsoMesh = new THREE.Mesh(torsoGeo, materials.primary);
  torsoMesh.castShadow = true;
  torsoMesh.receiveShadow = true;
  group.add(torsoMesh);

  // Thick Ribbed Crewneck Collar
  const collarGeo = new THREE.TorusGeometry(0.36, 0.065, 16, 32);
  const collarMesh = new THREE.Mesh(collarGeo, materials.accent || materials.primary);
  collarMesh.position.set(0, 1.15, 0.05);
  collarMesh.rotation.x = Math.PI * 0.45;
  collarMesh.castShadow = true;
  collarMesh.name = 'collar_mesh';
  group.add(collarMesh);

  // Left Short Sleeve
  const sleeveGeo = new THREE.CylinderGeometry(0.34, 0.3, 0.85, 24);
  const leftSleeve = new THREE.Mesh(sleeveGeo, materials.primary);
  leftSleeve.position.set(-1.05, 0.7, 0);
  leftSleeve.rotation.z = 0.65;
  leftSleeve.rotation.y = 0.1;
  leftSleeve.castShadow = true;
  group.add(leftSleeve);

  // Right Short Sleeve
  const rightSleeve = new THREE.Mesh(sleeveGeo.clone(), materials.primary);
  rightSleeve.position.set(1.05, 0.7, 0);
  rightSleeve.rotation.z = -0.65;
  rightSleeve.rotation.y = -0.1;
  rightSleeve.castShadow = true;
  group.add(rightSleeve);

  // Hem Edge Ring
  const hemGeo = new THREE.TorusGeometry(0.88, 0.028, 12, 32);
  const hemMesh = new THREE.Mesh(hemGeo, materials.accent || materials.primary);
  hemMesh.position.set(0, -1.15, 0);
  hemMesh.rotation.x = Math.PI / 2;
  hemMesh.scale.set(1, 0.7, 1);
  group.add(hemMesh);

  // Decal planes
  const frontDecalGeo = new THREE.PlaneGeometry(0.85, 0.85);
  const frontDecalMesh = new THREE.Mesh(frontDecalGeo, materials.decal);
  frontDecalMesh.position.set(0, 0.3, 0.48);
  frontDecalMesh.name = 'decal_front';
  group.add(frontDecalMesh);

  const backDecalGeo = new THREE.PlaneGeometry(0.9, 0.9);
  const backDecalMesh = new THREE.Mesh(backDecalGeo, materials.decal);
  backDecalMesh.position.set(0, 0.3, -0.48);
  backDecalMesh.rotation.y = Math.PI;
  backDecalMesh.name = 'decal_back';
  group.add(backDecalMesh);

  const leftChestGeo = new THREE.PlaneGeometry(0.32, 0.32);
  const leftChestMesh = new THREE.Mesh(leftChestGeo, materials.decal);
  leftChestMesh.position.set(-0.32, 0.48, 0.46);
  leftChestMesh.rotation.y = 0.18;
  leftChestMesh.name = 'decal_chest_left';
  group.add(leftChestMesh);

  return group;
}

/**
 * TECHWEAR JACKET GENERATOR
 */
export function createJacketMesh(materials) {
  const group = new THREE.Group();
  group.name = 'garment_jacket';

  // Torso
  const torsoGeo = new THREE.CylinderGeometry(0.88, 0.92, 2.2, 32, 24, true);
  const pos = torsoGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const factor = (y + 1.1) / 2.2;
    pos.setX(i, x * (1.0 + Math.sin(factor * Math.PI) * 0.14));
    pos.setZ(i, z * 0.75 + (factor > 0.4 ? (factor - 0.4) * 0.18 : 0));
  }
  addClothFolds(torsoGeo, 0.02, 6.0);
  const torsoMesh = new THREE.Mesh(torsoGeo, materials.primary);
  torsoMesh.castShadow = true;
  group.add(torsoMesh);

  // Storm Funnel Neck Collar
  const collarGeo = new THREE.CylinderGeometry(0.42, 0.48, 0.55, 32);
  const collarMesh = new THREE.Mesh(collarGeo, materials.accent || materials.primary);
  collarMesh.position.set(0, 1.35, 0.05);
  collarMesh.scale.set(1, 1, 0.85);
  collarMesh.castShadow = true;
  group.add(collarMesh);

  // Central Waterproof Zipper Track
  const zipTrackGeo = new THREE.BoxGeometry(0.06, 2.2, 0.03);
  const zipTrackMesh = new THREE.Mesh(zipTrackGeo, materials.accent);
  zipTrackMesh.position.set(0, 0, 0.54);
  group.add(zipTrackMesh);

  // Metal Zipper Puller
  const zipPullGeo = new THREE.BoxGeometry(0.045, 0.18, 0.05);
  const zipPullMesh = new THREE.Mesh(zipPullGeo, materials.hardware);
  zipPullMesh.position.set(0, 0.4, 0.57);
  group.add(zipPullMesh);

  // Dual Chest Utility Pockets
  const pocketGeo = new THREE.BoxGeometry(0.36, 0.42, 0.05);
  const leftPocket = new THREE.Mesh(pocketGeo, materials.accent || materials.primary);
  leftPocket.position.set(-0.42, 0.35, 0.5);
  leftPocket.rotation.y = 0.25;
  group.add(leftPocket);

  const rightPocket = new THREE.Mesh(pocketGeo, materials.accent || materials.primary);
  rightPocket.position.set(0.42, 0.35, 0.5);
  rightPocket.rotation.y = -0.25;
  group.add(rightPocket);

  // Sleeves with 3M Reflective Band
  const sleeveGeo = new THREE.CylinderGeometry(0.36, 0.24, 1.8, 24);
  const leftSleeve = new THREE.Mesh(sleeveGeo, materials.primary);
  leftSleeve.position.set(-1.22, 0.15, 0);
  leftSleeve.rotation.z = 0.4;
  group.add(leftSleeve);

  // Reflective stripe on sleeve
  const stripeGeo = new THREE.CylinderGeometry(0.28, 0.27, 0.15, 24);
  const leftStripe = new THREE.Mesh(stripeGeo, materials.cords || materials.accent);
  leftStripe.position.set(-1.38, -0.2, 0);
  leftStripe.rotation.z = 0.4;
  group.add(leftStripe);

  const rightSleeve = new THREE.Mesh(sleeveGeo.clone(), materials.primary);
  rightSleeve.position.set(1.22, 0.15, 0);
  rightSleeve.rotation.z = -0.4;
  group.add(rightSleeve);

  const rightStripe = new THREE.Mesh(stripeGeo, materials.cords || materials.accent);
  rightStripe.position.set(1.38, -0.2, 0);
  rightStripe.rotation.z = -0.4;
  group.add(rightStripe);

  // Cuffs
  const cuffGeo = new THREE.CylinderGeometry(0.25, 0.23, 0.22, 20);
  const leftCuff = new THREE.Mesh(cuffGeo, materials.accent);
  leftCuff.position.set(-1.62, -0.65, 0);
  leftCuff.rotation.z = 0.4;
  group.add(leftCuff);

  const rightCuff = new THREE.Mesh(cuffGeo, materials.accent);
  rightCuff.position.set(1.62, -0.65, 0);
  rightCuff.rotation.z = -0.4;
  group.add(rightCuff);

  // Decal planes
  const backDecalGeo = new THREE.PlaneGeometry(0.9, 0.9);
  const backDecalMesh = new THREE.Mesh(backDecalGeo, materials.decal);
  backDecalMesh.position.set(0, 0.35, -0.55);
  backDecalMesh.rotation.y = Math.PI;
  backDecalMesh.name = 'decal_back';
  group.add(backDecalMesh);

  const frontDecalGeo = new THREE.PlaneGeometry(0.7, 0.7);
  const frontDecalMesh = new THREE.Mesh(frontDecalGeo, materials.decal);
  frontDecalMesh.position.set(0.38, 0.35, 0.54);
  frontDecalMesh.rotation.y = -0.2;
  frontDecalMesh.name = 'decal_front';
  group.add(frontDecalMesh);

  return group;
}

/**
 * TAILORED BLAZER GENERATOR
 */
export function createBlazerMesh(materials) {
  const group = new THREE.Group();
  group.name = 'garment_blazer';

  // Torso with structured waist suppression
  const torsoGeo = new THREE.CylinderGeometry(0.85, 0.9, 2.3, 32, 24, true);
  const pos = torsoGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const factor = (y + 1.15) / 2.3;
    // Tailored waist suppression at y ~ 0.1
    const waist = 1.0 - Math.sin(factor * Math.PI * 0.8) * 0.1;
    pos.setX(i, x * waist * 1.1);
    pos.setZ(i, z * 0.75);
  }
  const torsoMesh = new THREE.Mesh(torsoGeo, materials.primary);
  torsoMesh.castShadow = true;
  group.add(torsoMesh);

  // Folded Notch Lapels
  const lapelGeo = new THREE.BoxGeometry(0.38, 1.1, 0.05);
  const leftLapel = new THREE.Mesh(lapelGeo, materials.accent || materials.primary);
  leftLapel.position.set(-0.35, 0.7, 0.46);
  leftLapel.rotation.set(-0.15, 0.35, -0.2);
  leftLapel.castShadow = true;
  group.add(leftLapel);

  const rightLapel = new THREE.Mesh(lapelGeo, materials.accent || materials.primary);
  rightLapel.position.set(0.35, 0.7, 0.46);
  rightLapel.rotation.set(-0.15, -0.35, 0.2);
  rightLapel.castShadow = true;
  group.add(rightLapel);

  // Tailored Horn Buttons
  const buttonGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.02, 16);
  const btn1 = new THREE.Mesh(buttonGeo, materials.hardware);
  btn1.position.set(0, -0.1, 0.52);
  btn1.rotation.x = Math.PI / 2;
  group.add(btn1);

  const btn2 = new THREE.Mesh(buttonGeo, materials.hardware);
  btn2.position.set(0, -0.4, 0.52);
  btn2.rotation.x = Math.PI / 2;
  group.add(btn2);

  // Waist Flap Pockets
  const flapGeo = new THREE.BoxGeometry(0.38, 0.1, 0.04);
  const leftFlap = new THREE.Mesh(flapGeo, materials.primary);
  leftFlap.position.set(-0.52, -0.45, 0.45);
  leftFlap.rotation.y = 0.3;
  group.add(leftFlap);

  const rightFlap = new THREE.Mesh(flapGeo, materials.primary);
  rightFlap.position.set(0.52, -0.45, 0.45);
  rightFlap.rotation.y = -0.3;
  group.add(rightFlap);

  // Sleeves with tailored drape
  const sleeveGeo = new THREE.CylinderGeometry(0.35, 0.22, 1.8, 24);
  const leftSleeve = new THREE.Mesh(sleeveGeo, materials.primary);
  leftSleeve.position.set(-1.18, 0.18, 0);
  leftSleeve.rotation.z = 0.35;
  group.add(leftSleeve);

  const rightSleeve = new THREE.Mesh(sleeveGeo.clone(), materials.primary);
  rightSleeve.position.set(1.18, 0.18, 0);
  rightSleeve.rotation.z = -0.35;
  group.add(rightSleeve);

  // Decal badge on left chest pocket area
  const chestDecalGeo = new THREE.PlaneGeometry(0.35, 0.35);
  const chestDecalMesh = new THREE.Mesh(chestDecalGeo, materials.decal);
  chestDecalMesh.position.set(-0.48, 0.45, 0.48);
  chestDecalMesh.rotation.y = 0.3;
  chestDecalMesh.name = 'decal_chest_left';
  group.add(chestDecalMesh);

  return group;
}

/**
 * TACTICAL CARGO PANTS GENERATOR
 */
export function createPantsMesh(materials) {
  const group = new THREE.Group();
  group.name = 'garment_pants';

  // Waistband
  const waistGeo = new THREE.CylinderGeometry(0.8, 0.82, 0.3, 32);
  const waistMesh = new THREE.Mesh(waistGeo, materials.accent || materials.primary);
  waistMesh.position.set(0, 0.95, 0);
  waistMesh.scale.set(1, 1, 0.75);
  group.add(waistMesh);

  // Left Leg
  const legGeo = new THREE.CylinderGeometry(0.38, 0.24, 2.2, 24, 16);
  addClothFolds(legGeo, 0.02, 5.0);
  const leftLeg = new THREE.Mesh(legGeo, materials.primary);
  leftLeg.position.set(-0.42, -0.25, 0);
  leftLeg.rotation.z = -0.05;
  leftLeg.castShadow = true;
  group.add(leftLeg);

  // Right Leg
  const rightLeg = new THREE.Mesh(legGeo.clone(), materials.primary);
  rightLeg.position.set(0.42, -0.25, 0);
  rightLeg.rotation.z = 0.05;
  rightLeg.castShadow = true;
  group.add(rightLeg);

  // 3D Cargo Bellows Pockets on outer thighs
  const cargoBoxGeo = new THREE.BoxGeometry(0.18, 0.5, 0.35);
  const leftCargo = new THREE.Mesh(cargoBoxGeo, materials.accent || materials.primary);
  leftCargo.position.set(-0.76, -0.2, 0);
  leftCargo.rotation.y = -0.15;
  group.add(leftCargo);

  const rightCargo = new THREE.Mesh(cargoBoxGeo, materials.accent || materials.primary);
  rightCargo.position.set(0.76, -0.2, 0);
  rightCargo.rotation.y = 0.15;
  group.add(rightCargo);

  // Cargo pocket flap tops
  const cargoFlapGeo = new THREE.BoxGeometry(0.2, 0.1, 0.37);
  const leftFlap = new THREE.Mesh(cargoFlapGeo, materials.accent);
  leftFlap.position.set(-0.77, 0.08, 0);
  group.add(leftFlap);

  const rightFlap = new THREE.Mesh(cargoFlapGeo, materials.accent);
  rightFlap.position.set(0.77, 0.08, 0);
  group.add(rightFlap);

  // Ankle Cuffs
  const ankleGeo = new THREE.CylinderGeometry(0.25, 0.22, 0.2, 20);
  const leftAnkle = new THREE.Mesh(ankleGeo, materials.accent);
  leftAnkle.position.set(-0.48, -1.35, 0);
  group.add(leftAnkle);

  const rightAnkle = new THREE.Mesh(ankleGeo, materials.accent);
  rightAnkle.position.set(0.48, -1.35, 0);
  group.add(rightAnkle);

  // Decal badge on left cargo pocket
  const pocketDecalGeo = new THREE.PlaneGeometry(0.3, 0.3);
  const pocketDecalMesh = new THREE.Mesh(pocketDecalGeo, materials.decal);
  pocketDecalMesh.position.set(-0.86, -0.2, 0);
  pocketDecalMesh.rotation.y = -Math.PI / 2;
  pocketDecalMesh.name = 'decal_chest_left';
  group.add(pocketDecalMesh);

  return group;
}

/**
 * 6-PANEL STREETWEAR CAP GENERATOR
 */
export function createCapMesh(materials) {
  const group = new THREE.Group();
  group.name = 'garment_cap';

  // 1. Crown (Hemisphere)
  const crownGeo = new THREE.SphereGeometry(0.8, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.52);
  const crownMesh = new THREE.Mesh(crownGeo, materials.primary);
  crownMesh.castShadow = true;
  group.add(crownMesh);

  // 2. Curved Visor / Brim
  const visorShape = new THREE.CylinderGeometry(0.86, 0.88, 0.06, 24, 4, false, -Math.PI * 0.4, Math.PI * 0.8);
  const visorMesh = new THREE.Mesh(visorShape, materials.accent || materials.primary);
  visorMesh.position.set(0, -0.05, 0.45);
  visorMesh.rotation.x = 0.2;
  visorMesh.scale.set(1.05, 1, 1.2);
  visorMesh.castShadow = true;
  group.add(visorMesh);

  // 3. Top Squatchee Button
  const buttonGeo = new THREE.SphereGeometry(0.08, 16, 16);
  const buttonMesh = new THREE.Mesh(buttonGeo, materials.accent || materials.primary);
  buttonMesh.position.set(0, 0.8, 0);
  group.add(buttonMesh);

  // 4. Rear Strap & Brass Buckle
  const strapGeo = new THREE.TorusGeometry(0.78, 0.035, 12, 24, Math.PI * 0.5);
  const strapMesh = new THREE.Mesh(strapGeo, materials.accent);
  strapMesh.position.set(0, 0.05, -0.15);
  strapMesh.rotation.x = Math.PI / 2;
  strapMesh.rotation.z = Math.PI * 0.75;
  group.add(strapMesh);

  const buckleGeo = new THREE.BoxGeometry(0.12, 0.08, 0.04);
  const buckleMesh = new THREE.Mesh(buckleGeo, materials.hardware);
  buckleMesh.position.set(0, 0.08, -0.85);
  group.add(buckleMesh);

  // 5. Front 3D Graphic Patch
  const patchGeo = new THREE.PlaneGeometry(0.65, 0.5, 8, 8);
  const pos = patchGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    pos.setZ(i, -x * x * 0.2 + 0.02);
  }
  patchGeo.computeVertexNormals();
  const patchMesh = new THREE.Mesh(patchGeo, materials.decal);
  patchMesh.position.set(0, 0.4, 0.72);
  patchMesh.rotation.x = -0.3;
  patchMesh.name = 'decal_front';
  group.add(patchMesh);

  return group;
}

/**
 * HIGH-FASHION MANNEQUIN AVATAR
 */
export function createMannequinAvatar() {
  const group = new THREE.Group();
  group.name = 'avatar_mannequin';

  const avatarMat = new THREE.MeshStandardMaterial({
    color: 0x181a20,
    roughness: 0.35,
    metalness: 0.65
  });

  // Sculpted head
  const headGeo = new THREE.SphereGeometry(0.38, 32, 24);
  headGeo.scale(0.85, 1.25, 1);
  const headMesh = new THREE.Mesh(headGeo, avatarMat);
  headMesh.position.set(0, 2.2, 0);
  headMesh.castShadow = true;
  group.add(headMesh);

  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.45, 24);
  const neckMesh = new THREE.Mesh(neckGeo, avatarMat);
  neckMesh.position.set(0, 1.6, 0);
  group.add(neckMesh);

  // Minimalist Pedestal Stand
  const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 16);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9, roughness: 0.2 });
  const poleMesh = new THREE.Mesh(poleGeo, poleMat);
  poleMesh.position.set(0, -2.1, 0);
  group.add(poleMesh);

  const baseGeo = new THREE.CylinderGeometry(0.7, 0.75, 0.08, 32);
  const baseMesh = new THREE.Mesh(baseGeo, poleMat);
  baseMesh.position.set(0, -2.95, 0);
  group.add(baseMesh);

  return group;
}
