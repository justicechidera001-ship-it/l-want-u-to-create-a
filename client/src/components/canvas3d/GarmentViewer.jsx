import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import {
  RotateCcw,
  Camera,
  Layers,
  Sparkles,
  Maximize2,
  Minimize2,
  Info,
  SunMedium,
  Compass,
  Play,
  Pause,
  User
} from 'lucide-react';
import {
  createHoodieMesh,
  createTShirtMesh,
  createJacketMesh,
  createBlazerMesh,
  createPantsMesh,
  createCapMesh,
  createMannequinAvatar
} from '../../utils/garmentGeometries';
import {
  createFabricTexture,
  createFabricBumpMap,
  createDecalTexture
} from '../../utils/textureGenerator';

export default function GarmentViewer({
  product,
  customConfig,
  onHotspotClick,
  activeHotspot,
  onExportSnapshot
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const garmentGroupRef = useRef(null);
  const avatarGroupRef = useRef(null);
  const lightsGroupRef = useRef(null);
  const materialsRef = useRef({});
  const animationFrameRef = useRef(null);

  // Orbit control interaction state
  const isDraggingRef = useRef(false);
  const isPanningRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const cameraTargetRef = useRef(new THREE.Vector3(0, 0, 0));
  const sphericalRef = useRef({ radius: 5.5, theta: 0, phi: Math.PI / 2 });

  // UI state
  const [isTurntable, setIsTurntable] = useState(true);
  const [lightingPreset, setLightingPreset] = useState('studio'); // studio, cyber, golden, runway
  const [showAvatar, setShowAvatar] = useState(true);
  const [displayMode, setDisplayMode] = useState('shaded'); // shaded, wireframe, clay
  const [floatingAnimation, setFloatingAnimation] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hotspotScreenPositions, setHotspotScreenPositions] = useState([]);
  const [snapshotLoading, setSnapshotLoading] = useState(false);

  // Initialize Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x07090e);
    scene.fog = new THREE.FogExp2(0x07090e, 0.08);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    sphericalRef.current = { radius: 5.8, theta: 0.1, phi: Math.PI / 2.05 };
    updateCameraPosition();

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. Studio Floor Grid with reflective aesthetic
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e17,
      roughness: 0.7,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.6;
    floor.receiveShadow = true;
    scene.add(floor);

    // Subtle grid on floor
    const gridHelper = new THREE.GridHelper(24, 24, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -2.59;
    scene.add(gridHelper);

    // Circular shadow catcher pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.4, 1.5, 0.08, 48);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x111624,
      roughness: 0.4,
      metalness: 0.5
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -2.55;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Pedestal glow ring
    const ringGeo = new THREE.RingGeometry(1.42, 1.48, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f5a0, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -2.5;
    scene.add(ring);

    // 5. Lighting Setup
    const lightsGroup = new THREE.Group();
    lightsGroupRef.current = lightsGroup;
    scene.add(lightsGroup);
    setupLighting('studio');

    // 6. Garment and Avatar containers
    const garmentGroup = new THREE.Group();
    garmentGroupRef.current = garmentGroup;
    scene.add(garmentGroup);

    const avatarGroup = createMannequinAvatar();
    avatarGroupRef.current = avatarGroup;
    scene.add(avatarGroup);

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Turntable spin
      if (isTurntable && !isDraggingRef.current) {
        sphericalRef.current.theta += delta * 0.45;
        updateCameraPosition();
      }

      // Wind / floating breathing animation
      if (floatingAnimation && garmentGroupRef.current) {
        const floatY = Math.sin(time * 1.5) * 0.04;
        garmentGroupRef.current.position.y = floatY;
        if (avatarGroupRef.current) {
          avatarGroupRef.current.position.y = floatY;
        }
      }

      renderer.render(scene, camera);
      updateHotspotPositions();
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Camera based on spherical coordinates
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { radius, theta, phi } = sphericalRef.current;
    const camera = cameraRef.current;
    const target = cameraTargetRef.current;

    camera.position.x = target.x + radius * Math.sin(phi) * Math.sin(theta);
    camera.position.y = target.y + radius * Math.cos(phi);
    camera.position.z = target.z + radius * Math.sin(phi) * Math.cos(theta);
    camera.lookAt(target);
  };

  // Lighting presets
  const setupLighting = (preset) => {
    const group = lightsGroupRef.current;
    if (!group) return;
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    if (preset === 'studio') {
      const ambient = new THREE.AmbientLight(0xffffff, 0.9);
      group.add(ambient);

      // Key soft light
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
      keyLight.position.set(4, 6, 5);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 2048;
      keyLight.shadow.mapSize.height = 2048;
      keyLight.shadow.bias = -0.0005;
      group.add(keyLight);

      // Warm fill
      const fillLight = new THREE.DirectionalLight(0xfff3e0, 1.2);
      fillLight.position.set(-4, 3, -3);
      group.add(fillLight);

      // Cool rim light
      const rimLight = new THREE.DirectionalLight(0xcfd8dc, 1.8);
      rimLight.position.set(0, 5, -6);
      group.add(rimLight);
    } else if (preset === 'cyber') {
      const ambient = new THREE.AmbientLight(0x0d1322, 1.4);
      group.add(ambient);

      // Cyan neon key
      const cyanNeon = new THREE.DirectionalLight(0x00f5a0, 3.2);
      cyanNeon.position.set(4, 5, 4);
      group.add(cyanNeon);

      // Magenta neon rim
      const magentaNeon = new THREE.DirectionalLight(0xec4899, 2.8);
      magentaNeon.position.set(-5, 4, -4);
      group.add(magentaNeon);

      // Blue floor up-light
      const blueSpot = new THREE.PointLight(0x00d9f5, 4, 15);
      blueSpot.position.set(0, -1, 3);
      group.add(blueSpot);
    } else if (preset === 'golden') {
      const ambient = new THREE.AmbientLight(0x382210, 1.2);
      group.add(ambient);

      const goldenKey = new THREE.DirectionalLight(0xf59e0b, 3.5);
      goldenKey.position.set(5, 4, 4);
      goldenKey.castShadow = true;
      group.add(goldenKey);

      const softViolet = new THREE.DirectionalLight(0x7c3aed, 1.5);
      softViolet.position.set(-4, 3, -3);
      group.add(softViolet);
    } else if (preset === 'runway') {
      const ambient = new THREE.AmbientLight(0x111111, 0.6);
      group.add(ambient);

      const overheadSpot = new THREE.SpotLight(0xffffff, 5);
      overheadSpot.position.set(0, 8, 2);
      overheadSpot.angle = Math.PI / 5;
      overheadSpot.penumbra = 0.5;
      overheadSpot.castShadow = true;
      group.add(overheadSpot);

      const rimLight = new THREE.DirectionalLight(0x94a3b8, 1.6);
      rimLight.position.set(0, 2, -6);
      group.add(rimLight);
    }
  };

  // Rebuild Garment when product type or configuration changes
  useEffect(() => {
    if (!sceneRef.current || !garmentGroupRef.current || !product) return;

    const group = garmentGroupRef.current;
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    const primaryColor = customConfig?.primaryColor || '#14171d';
    const accentColor = customConfig?.accentColor || '#00f5a0';
    const cordsColor = customConfig?.cordsColor || '#ffffff';
    const fabricId = customConfig?.fabricId || 'terry';

    // Find fabric specs
    const fabric = product.fabrics?.find(f => f.id === fabricId) || {
      roughness: 0.85,
      metalness: 0.05,
      bumpScale: 0.08
    };

    // Textures
    const fabricTexture = createFabricTexture(fabricId, primaryColor);
    const bumpMap = createFabricBumpMap(fabricId);

    // Primary Material
    const primaryMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(primaryColor),
      map: fabricTexture,
      bumpMap: bumpMap,
      bumpScale: fabric.bumpScale || 0.06,
      roughness: fabric.roughness ?? 0.8,
      metalness: fabric.metalness ?? 0.05,
      wireframe: displayMode === 'wireframe',
      side: THREE.DoubleSide
    });

    if (displayMode === 'clay') {
      primaryMat.color.set(0xd1d5db);
      primaryMat.roughness = 0.9;
      primaryMat.metalness = 0.0;
    }

    // Accent Material
    const accentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentColor),
      map: createFabricTexture(fabricId, accentColor),
      bumpMap: bumpMap,
      bumpScale: (fabric.bumpScale || 0.06) * 0.8,
      roughness: fabric.roughness ?? 0.75,
      metalness: fabric.metalness ?? 0.08,
      wireframe: displayMode === 'wireframe',
      side: THREE.DoubleSide
    });

    // Hardware Material (metal aglets, zips, buttons)
    const hardwareMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.95,
      roughness: 0.15
    });

    // Cords Material
    const cordsMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(cordsColor),
      roughness: 0.8,
      metalness: 0.05
    });

    // Decal Material
    const decalConfig = customConfig?.decal || {};
    const decalTexture = createDecalTexture(
      decalConfig.customImage || decalConfig.svgContent || null,
      decalConfig.scale || 0.7,
      decalConfig.rotation || 0,
      decalConfig.opacity ?? 1
    );

    const decalMat = new THREE.MeshBasicMaterial({
      map: decalTexture,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      side: THREE.DoubleSide
    });

    materialsRef.current = {
      primary: primaryMat,
      accent: accentMat,
      hardware: hardwareMat,
      cords: cordsMat,
      decal: decalMat
    };

    // Instantiate Garment Mesh based on type
    let garmentMesh;
    const type = product.type || 'hoodie';
    if (type === 'hoodie') garmentMesh = createHoodieMesh(materialsRef.current);
    else if (type === 'tshirt') garmentMesh = createTShirtMesh(materialsRef.current);
    else if (type === 'jacket') garmentMesh = createJacketMesh(materialsRef.current);
    else if (type === 'blazer') garmentMesh = createBlazerMesh(materialsRef.current);
    else if (type === 'pants') garmentMesh = createPantsMesh(materialsRef.current);
    else if (type === 'cap') garmentMesh = createCapMesh(materialsRef.current);
    else garmentMesh = createHoodieMesh(materialsRef.current);

    group.add(garmentMesh);

    // Apply decal visibility based on position
    const decalPosition = decalConfig.position || 'front';
    garmentMesh.traverse((child) => {
      if (child.name?.startsWith('decal_')) {
        child.visible =
          (decalPosition === 'front' && child.name === 'decal_front') ||
          (decalPosition === 'back' && child.name === 'decal_back') ||
          (decalPosition === 'chest-left' && child.name === 'decal_chest_left');
      }
    });
  }, [product, customConfig, displayMode]);

  // Update Avatar visibility
  useEffect(() => {
    if (avatarGroupRef.current) {
      avatarGroupRef.current.visible = showAvatar;
    }
  }, [showAvatar]);

  // Update Lighting Preset
  const handleLightingChange = (preset) => {
    setLightingPreset(preset);
    setupLighting(preset);
  };

  // Camera Presets
  const setCameraPreset = (view) => {
    setIsTurntable(false);
    if (view === 'front') {
      sphericalRef.current = { radius: 5.5, theta: 0, phi: Math.PI / 2 };
    } else if (view === 'back') {
      sphericalRef.current = { radius: 5.5, theta: Math.PI, phi: Math.PI / 2 };
    } else if (view === 'left') {
      sphericalRef.current = { radius: 5.5, theta: Math.PI / 2, phi: Math.PI / 2 };
    } else if (view === 'right') {
      sphericalRef.current = { radius: 5.5, theta: -Math.PI / 2, phi: Math.PI / 2 };
    } else if (view === 'closeup') {
      sphericalRef.current = { radius: 3.2, theta: 0, phi: Math.PI / 2.2 };
    }
    updateCameraPosition();
  };

  // Mouse / Touch interaction handlers
  const handleMouseDown = (e) => {
    if (e.button === 0) isDraggingRef.current = true;
    else if (e.button === 2) isPanningRef.current = true;
    prevMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current && !isPanningRef.current) return;
    const deltaX = e.clientX - prevMouseRef.current.x;
    const deltaY = e.clientY - prevMouseRef.current.y;
    prevMouseRef.current = { x: e.clientX, y: e.clientY };

    if (isDraggingRef.current) {
      sphericalRef.current.theta -= deltaX * 0.007;
      sphericalRef.current.phi = Math.max(0.15, Math.min(Math.PI - 0.15, sphericalRef.current.phi - deltaY * 0.007));
      updateCameraPosition();
    } else if (isPanningRef.current) {
      cameraTargetRef.current.y += deltaY * 0.005;
      updateCameraPosition();
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    isPanningRef.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    sphericalRef.current.radius = Math.max(2.0, Math.min(9.5, sphericalRef.current.radius + e.deltaY * 0.005));
    updateCameraPosition();
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - prevMouseRef.current.x;
    const deltaY = e.touches[0].clientY - prevMouseRef.current.y;
    prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    sphericalRef.current.theta -= deltaX * 0.008;
    sphericalRef.current.phi = Math.max(0.15, Math.min(Math.PI - 0.15, sphericalRef.current.phi - deltaY * 0.008));
    updateCameraPosition();
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Calculate 2D screen positions for 3D hotspots
  const updateHotspotPositions = useCallback(() => {
    if (!cameraRef.current || !mountRef.current || !product?.hotspots) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = cameraRef.current;

    const positions = product.hotspots.map((spot) => {
      const v = new THREE.Vector3(spot.x, spot.y, spot.z);
      // If floating animation is active, apply y offset
      if (floatingAnimation && garmentGroupRef.current) {
        v.y += garmentGroupRef.current.position.y;
      }
      v.project(camera);

      // Check if point is behind camera or within view frustum
      const isVisible = v.z < 1;
      const x = ((v.x + 1) * width) / 2;
      const y = ((-v.y + 1) * height) / 2;

      return {
        ...spot,
        xScreen: x,
        yScreen: y,
        isVisible
      };
    });

    setHotspotScreenPositions(positions);
  }, [product, floatingAnimation]);

  // Snapshot / Export High-Res PNG Mockup
  const handleSnapshotCapture = () => {
    if (!rendererRef.current) return;
    setSnapshotLoading(true);

    setTimeout(() => {
      try {
        const renderer = rendererRef.current;
        const dataUrl = renderer.domElement.toDataURL('image/png');

        // Create overlay canvas with studio branding watermark
        const canvas = document.createElement('canvas');
        canvas.width = renderer.domElement.width;
        canvas.height = renderer.domElement.height;
        const ctx = canvas.getContext('2d');

        const baseImg = new Image();
        baseImg.src = dataUrl;
        baseImg.onload = () => {
          ctx.drawImage(baseImg, 0, 0);

          // Studio Watermark
          ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fillText(`ATELIER 3D // ${product.name.toUpperCase()}`, 36, canvas.height - 56);

          ctx.font = '16px monospace';
          ctx.fillStyle = '#00f5a0';
          ctx.fillText(`CONFIG ID: TC-${Math.floor(10000 + Math.random() * 90000)} | FABRIC: ${customConfig?.fabricId?.toUpperCase() || 'TERRY'}`, 36, canvas.height - 30);

          const finalDataUrl = canvas.toDataURL('image/png');

          // Trigger download
          const link = document.createElement('a');
          link.download = `${product.name.toLowerCase().replace(/\s+/g, '-')}-custom-3d-mockup.png`;
          link.href = finalDataUrl;
          link.click();

          if (onExportSnapshot) onExportSnapshot(finalDataUrl);
          setSnapshotLoading(false);
        };
      } catch (err) {
        console.error('Snapshot failed:', err);
        setSnapshotLoading(false);
      }
    }, 150);
  };

  return (
    <div
      className={`relative w-full h-full select-none overflow-hidden rounded-2xl bg-gradient-to-b from-dark-900 to-dark-950 border border-slate-800/80 shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
    >
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onContextMenu={(e) => e.preventDefault()}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Top Floating Controls Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        {/* Left: View Angles */}
        <div className="flex items-center space-x-1 glass-panel px-2.5 py-1.5 rounded-xl pointer-events-auto shadow-lg border border-slate-700/60">
          <span className="text-[11px] font-mono uppercase text-slate-400 mr-2 flex items-center">
            <Compass className="w-3.5 h-3.5 mr-1 text-brand-cyan" /> View:
          </span>
          {['front', 'back', 'left', 'closeup'].map((view) => (
            <button
              key={view}
              onClick={() => setCameraPreset(view)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition capitalize"
            >
              {view}
            </button>
          ))}
        </div>

        {/* Right: Studio Lighting & Utilities */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          {/* Lighting Environment Selector */}
          <div className="flex items-center space-x-1 glass-panel px-2 py-1.5 rounded-xl border border-slate-700/60 text-xs">
            <SunMedium className="w-3.5 h-3.5 text-brand-gold mr-1" />
            <select
              value={lightingPreset}
              onChange={(e) => handleLightingChange(e.target.value)}
              className="bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer pr-1"
            >
              <option value="studio" className="bg-dark-900 text-slate-100">Softbox Studio</option>
              <option value="cyber" className="bg-dark-900 text-slate-100">Cyber Neon</option>
              <option value="golden" className="bg-dark-900 text-slate-100">Golden Hour</option>
              <option value="runway" className="bg-dark-900 text-slate-100">Dark Runway</option>
            </select>
          </div>

          {/* Mannequin Avatar Toggle */}
          <button
            onClick={() => setShowAvatar(!showAvatar)}
            title="Toggle Mannequin Avatar"
            className={`p-2 rounded-xl glass-panel border transition ${
              showAvatar
                ? 'border-brand-neon/60 text-brand-neon bg-brand-neon/10'
                : 'border-slate-700/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
          </button>

          {/* Display Mode (Shaded / Wireframe / Clay) */}
          <button
            onClick={() => {
              const modes = ['shaded', 'clay', 'wireframe'];
              const next = modes[(modes.indexOf(displayMode) + 1) % modes.length];
              setDisplayMode(next);
            }}
            title={`Mode: ${displayMode}`}
            className="p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-white transition flex items-center text-xs space-x-1"
          >
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span className="capitalize text-[11px] hidden sm:inline">{displayMode}</span>
          </button>

          {/* Turntable Auto-spin */}
          <button
            onClick={() => setIsTurntable(!isTurntable)}
            title={isTurntable ? 'Pause Spin' : 'Play Spin'}
            className={`p-2 rounded-xl glass-panel border transition ${
              isTurntable
                ? 'border-brand-cyan/60 text-brand-cyan bg-brand-cyan/10'
                : 'border-slate-700/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            {isTurntable ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Snapshot High-Res Export */}
          <button
            onClick={handleSnapshotCapture}
            disabled={snapshotLoading}
            title="Export High-Res 3D Snapshot"
            className="p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-brand-neon hover:border-brand-neon/40 transition"
          >
            <Camera className={`w-4 h-4 ${snapshotLoading ? 'animate-spin text-brand-neon' : ''}`} />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            className="p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-400 hover:text-white transition"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Floating 3D Hotspot Markers */}
      {hotspotScreenPositions.map((spot) => {
        if (!spot.isVisible) return null;
        const isActive = activeHotspot?.id === spot.id;
        return (
          <div
            key={spot.id}
            style={{
              position: 'absolute',
              left: `${spot.xScreen}px`,
              top: `${spot.yScreen}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: 30
            }}
            className="group pointer-events-auto"
          >
            {/* Pulsing indicator button */}
            <button
              onClick={() => onHotspotClick && onHotspotClick(spot)}
              className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-brand-neon text-dark-950 scale-125 ring-4 ring-brand-neon/40'
                  : 'bg-dark-900/90 text-brand-cyan border border-brand-cyan/50 hover:scale-110 hover:border-brand-neon'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              <span className="absolute inset-0 rounded-full hotspot-pulse pointer-events-none" />
            </button>

            {/* Hover Tooltip Popover */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-64 p-3 rounded-xl glass-panel border border-slate-700/80 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-1 group-hover:translate-x-0 z-40 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-brand-neon text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tailored Spec</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-tight mb-1">{spot.label}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{spot.desc}</p>
            </div>
          </div>
        );
      })}

      {/* Bottom Floating Information & Gestures Guide */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-xs text-slate-400">
        <div className="glass-panel px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
          <span className="text-slate-300 font-semibold">{product?.name}</span>
          <span className="text-slate-500">|</span>
          <span className="text-brand-cyan">{customConfig?.fabricId?.toUpperCase() || 'TERRY'}</span>
        </div>

        <div className="hidden md:flex items-center space-x-3 glass-panel px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400">
          <span>Drag: 360° Rotate</span>
          <span>•</span>
          <span>Right-Click: Pan</span>
          <span>•</span>
          <span>Scroll: Zoom</span>
        </div>
      </div>
    </div>
  );
}
