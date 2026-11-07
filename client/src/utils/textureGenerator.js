import * as THREE from 'three';

/**
 * Procedural texture and bump map generator for luxury fabrics and decals
 */

// Generate procedural fabric bump/normal canvas
export function createFabricTexture(fabricType = 'terry', baseColorHex = '#14171d') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Fill base color
  ctx.fillStyle = baseColorHex;
  ctx.fillRect(0, 0, 512, 512);

  const imgData = ctx.getImageData(0, 0, 512, 512);
  const data = imgData.data;

  // Generate fabric specific micro-patterns
  if (fabricType === 'terry' || fabricType === 'cotton') {
    // Looped French Terry / Knit cotton texture
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const idx = (y * 512 + x) * 4;
        const knitX = Math.sin(x * 0.4) * 12;
        const knitY = Math.cos(y * 0.4) * 12;
        const noise = (Math.random() - 0.5) * 18;
        const variation = knitX + knitY + noise;

        data[idx] = Math.min(255, Math.max(0, data[idx] + variation));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + variation));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + variation));
      }
    }
  } else if (fabricType === 'ripstop') {
    // Technical Ripstop crosshatch grid
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const idx = (y * 512 + x) * 4;
        const isGridLine = (x % 32 === 0 || y % 32 === 0);
        const subGrid = (x % 8 === 0 || y % 8 === 0);
        let factor = (Math.random() - 0.5) * 8;
        if (isGridLine) factor += 28;
        else if (subGrid) factor += 10;

        data[idx] = Math.min(255, Math.max(0, data[idx] + factor));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + factor));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + factor));
      }
    }
  } else if (fabricType === 'denim' || fabricType === 'twill') {
    // 3x1 Twill diagonal weave
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const idx = (y * 512 + x) * 4;
        const diag = Math.sin((x + y * 1.5) * 0.7) * 20;
        const noise = (Math.random() - 0.5) * 14;
        const factor = diag + noise;

        data[idx] = Math.min(255, Math.max(0, data[idx] + factor));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + factor));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + factor));
      }
    }
  } else if (fabricType === 'leather') {
    // Pebbled leather grain
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const idx = (y * 512 + x) * 4;
        const cellX = (x % 16) - 8;
        const cellY = (y % 16) - 8;
        const dist = Math.sqrt(cellX * cellX + cellY * cellY);
        const grain = (dist < 6 ? 15 : -15) + (Math.random() - 0.5) * 10;

        data[idx] = Math.min(255, Math.max(0, data[idx] + grain));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + grain));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + grain));
      }
    }
  } else if (fabricType === 'velvet') {
    // Velour soft sheen nap
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const idx = (y * 512 + x) * 4;
        const swirl = Math.sin(x * 0.1 + y * 0.1) * 15;
        const noise = (Math.random() - 0.5) * 12;
        const factor = swirl + noise;

        data[idx] = Math.min(255, Math.max(0, data[idx] + factor));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + factor));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + factor));
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

// Generate normal/bump map for fabric
export function createFabricBumpMap(fabricType = 'terry') {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 256, 256);

  const imgData = ctx.getImageData(0, 0, 256, 256);
  const data = imgData.data;

  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const idx = (y * 256 + x) * 4;
      let val = 128;
      if (fabricType === 'ripstop') {
        if (x % 16 === 0 || y % 16 === 0) val = 180;
        else val = 120 + Math.floor((Math.random() - 0.5) * 20);
      } else if (fabricType === 'denim' || fabricType === 'twill') {
        val = 128 + Math.floor(Math.sin((x + y) * 0.8) * 35 + (Math.random() - 0.5) * 15);
      } else {
        // Terry / Cotton
        val = 128 + Math.floor(Math.sin(x * 0.5) * 20 + Math.cos(y * 0.5) * 20 + (Math.random() - 0.5) * 15);
      }
      val = Math.max(0, Math.min(255, val));
      data[idx] = val;
      data[idx + 1] = val;
      data[idx + 2] = val;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  return texture;
}

// Composite decal graphic onto a transparent canvas texture
export function createDecalTexture(graphicSvgOrUrl, scale = 0.7, rotation = 0, opacity = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  if (!graphicSvgOrUrl) return texture;

  const img = new Image();

  // If it's inline SVG string
  if (typeof graphicSvgOrUrl === 'string' && graphicSvgOrUrl.trim().startsWith('<svg')) {
    const encoded = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(graphicSvgOrUrl);
    img.src = encoded;
  } else {
    img.crossOrigin = 'anonymous';
    img.src = graphicSvgOrUrl;
  }

  img.onload = () => {
    ctx.clearRect(0, 0, 1024, 1024);
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(512, 512);
    ctx.rotate((rotation * Math.PI) / 180);

    const size = 512 * scale;
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
    ctx.restore();

    texture.needsUpdate = true;
  };

  return texture;
}
