import * as THREE from 'three';

export type IslandId = 1 | 2;

export const ISLAND_RADIUS = 72;
export const ISLAND2_CENTER_X = 0;
export const ISLAND2_CENTER_Z = -190;
export const ISLAND2_RADIUS = 62;
export const WATER_LEVEL = 0;
export const MAX_WALK_DEPTH = -0.65;
export const SPAWN_X = 0;
export const SPAWN_Z = 46;

export type SurfaceType = 'water' | 'sand' | 'grass' | 'rock';

export interface Collider {
  x: number;
  z: number;
  radius: number;
}

export interface IslandEnvironment {
  group: THREE.Group;
  colliders: Collider[];
  shootableEnvironment: THREE.Object3D[];
  setActiveIsland(id: IslandId): void;
  update(time: number): void;
}

export function getIslandCenter(id: IslandId): { x: number; z: number } {
  return id === 1 ? { x: 0, z: 0 } : { x: ISLAND2_CENTER_X, z: ISLAND2_CENTER_Z };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Deterministic 2D hash returning value in [-1, 1]. */
function hash2D(ix: number, iz: number): number {
  const n = Math.sin(ix * 127.1 + iz * 311.7) * 43758.5453123;
  return (n - Math.floor(n)) * 2 - 1;
}

/** Smooth 2D value noise in [-1, 1]. */
function valueNoise2D(x: number, z: number): number {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;

  const ux = fx * fx * (3 - 2 * fx);
  const uz = fz * fz * (3 - 2 * fz);

  const a = hash2D(ix, iz);
  const b = hash2D(ix + 1, iz);
  const c = hash2D(ix, iz + 1);
  const d = hash2D(ix + 1, iz + 1);

  return lerp(lerp(a, b, ux), lerp(c, d, ux), uz);
}

/** 4-octave fractal Brownian motion returning roughly [-1, 1]. */
export function fbm2D(x: number, z: number, octaves = 4): number {
  let sum = 0;
  let amplitude = 0.5;
  let frequency = 1;
  let norm = 0;

  for (let i = 0; i < octaves; i++) {
    sum += valueNoise2D(x * frequency, z * frequency) * amplitude;
    norm += amplitude;
    amplitude *= 0.5;
    frequency *= 2.03;
  }

  return sum / norm;
}

/** Deterministic seeded PRNG for consistent tree/rock/target placement. */
export function createSeededRandom(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getIsland1Height(x: number, z: number): number {
  const r = Math.hypot(x, z);
  const coastNoise = fbm2D(x * 0.022 + 5.2, z * 0.022 - 3.7, 4) * 10;
  const effectiveRadius = ISLAND_RADIUS + coastNoise;
  const u = r / effectiveRadius;

  // Gentle sandy beach shelf transitioning to 0 at shoreline
  const beachShelf = 1.65 * (1 - smoothstep(0.68, 1.04, u));
  // Smooth drop-off into -6m seabed offshore
  const seabed = -6.4 * smoothstep(0.92, 1.38, u);

  // Rolling grassy hills across the island interior
  const hillNoise = fbm2D(x * 0.038 + 21.7, z * 0.038 + 14.3, 4);
  const hills = (4.7 + 2.9 * hillNoise) * (1 - smoothstep(0.24, 0.85, u));

  // Central rocky ridge (~11-14m peak)
  const ridgeMask = Math.max(0, 1 - u / 0.44);
  const ridgeDetail = fbm2D(x * 0.075 - 9.1, z * 0.075 + 3.4, 4);
  const ridge = Math.pow(ridgeMask, 1.55) * (7.1 + 2.4 * ridgeDetail);

  // Fine surface undulation on dry land
  const micro = fbm2D(x * 0.11 + 3.1, z * 0.11 - 8.4, 3) * 0.35 * (1 - smoothstep(0.75, 1.02, u));

  return beachShelf + seabed + hills + ridge + micro;
}

function getIsland2Height(x: number, z: number): number {
  const lx = x - ISLAND2_CENTER_X;
  const lz = z - ISLAND2_CENTER_Z;
  const r = Math.hypot(lx, lz);
  const coastNoise = fbm2D(lx * 0.026 - 8.3, lz * 0.026 + 6.4, 4) * 8.5;
  const effectiveRadius = ISLAND2_RADIUS + coastNoise;
  const u = r / effectiveRadius;

  const beachShelf = 1.55 * (1 - smoothstep(0.66, 1.02, u));
  const seabed = -6.4 * smoothstep(0.9, 1.36, u);

  const highlandNoise = fbm2D(lx * 0.042 - 14.1, lz * 0.042 + 9.2, 4);
  const highlands = (5.4 + 3.2 * highlandNoise) * (1 - smoothstep(0.2, 0.84, u));

  const peakMask = Math.max(0, 1 - u / 0.48);
  const peakDetail = fbm2D(lx * 0.08 + 4.7, lz * 0.08 - 5.5, 4);
  const peak = Math.pow(peakMask, 1.35) * (8.6 + 2.8 * peakDetail);

  const micro = fbm2D(lx * 0.12 - 2.3, lz * 0.12 + 7.1, 3) * 0.4 * (1 - smoothstep(0.74, 1.02, u));

  return beachShelf + seabed + highlands + peak + micro;
}

/** Computes procedural dual-island elevation at world coordinates (x, z). */
export function getTerrainHeight(x: number, z: number): number {
  return Math.max(getIsland1Height(x, z), getIsland2Height(x, z));
}

/** Approximate terrain slope normal Y component via finite differences. */
function getTerrainNormalY(x: number, z: number): number {
  const eps = 0.75;
  const hL = getTerrainHeight(x - eps, z);
  const hR = getTerrainHeight(x + eps, z);
  const hD = getTerrainHeight(x, z - eps);
  const hU = getTerrainHeight(x, z + eps);
  const dx = (hR - hL) / (2 * eps);
  const dz = (hU - hD) / (2 * eps);
  return 1 / Math.sqrt(dx * dx + 1 + dz * dz);
}

/** Classifies ground surface material at (x, z) for footsteps and placement. */
export function getSurfaceType(x: number, z: number): SurfaceType {
  const h = getTerrainHeight(x, z);
  if (h < WATER_LEVEL + 0.08) return 'water';
  if (h < 2.1) return 'sand';
  const normalY = getTerrainNormalY(x, z);
  if (h > 7.4 || normalY < 0.78) return 'rock';
  return 'grass';
}

function createGrainTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const img = ctx.createImageData(size, size);
    const rng = createSeededRandom(9001);
    for (let i = 0; i < img.data.length; i += 4) {
      const shade = Math.floor(230 + rng() * 25);
      img.data[i] = shade;
      img.data[i + 1] = shade;
      img.data[i + 2] = shade;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(36, 36);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function buildTerrainMesh(
  size: number,
  segments: number,
  centerX: number,
  centerZ: number,
  volcanicTheme: boolean,
  grainTexture: THREE.Texture
): THREE.Mesh {
  const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
  // Rotate before setting Y heights so world (x, z) matches getTerrainHeight(x, z)
  geometry.rotateX(-Math.PI / 2);

  const pos = geometry.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const wx = pos.getX(i) + centerX;
    const wz = pos.getZ(i) + centerZ;
    pos.setXYZ(i, wx, getTerrainHeight(wx, wz), wz);
  }

  geometry.computeVertexNormals();

  const normals = geometry.attributes.normal as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);

  const cSeabed = new THREE.Color(volcanicTheme ? 0x3b5861 : 0x4b747a);
  const cWetSand = new THREE.Color(volcanicTheme ? 0x7c7061 : 0xc4a46a);
  const cDrySand = new THREE.Color(volcanicTheme ? 0x9f907a : 0xecd69f);
  const cGrassLow = new THREE.Color(volcanicTheme ? 0x4d6b3c : 0x5f9d45);
  const cGrassHigh = new THREE.Color(volcanicTheme ? 0x38522d : 0x447c36);
  const cRock = new THREE.Color(volcanicTheme ? 0x5a4c46 : 0x7d766d);
  const tmpColor = new THREE.Color();
  const grassColor = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const wx = pos.getX(i);
    const wy = pos.getY(i);
    const wz = pos.getZ(i);
    const ny = normals.getY(i);

    const colorNoise = fbm2D(wx * 0.08 + 12.1, wz * 0.08 - 4.8, 2) * 0.5 + 0.5;
    grassColor.copy(cGrassLow).lerp(cGrassHigh, colorNoise);

    if (wy < -0.35) {
      const t = smoothstep(-3.2, -0.35, wy);
      tmpColor.copy(cSeabed).lerp(cWetSand, t);
    } else if (wy < 0.45) {
      const t = smoothstep(-0.35, 0.45, wy);
      tmpColor.copy(cWetSand).lerp(cDrySand, t);
    } else if (wy < 2.4) {
      const t = smoothstep(1.5, 2.4, wy);
      tmpColor.copy(cDrySand).lerp(grassColor, t);
    } else {
      tmpColor.copy(grassColor);
    }

    // Blend cliff/volcanic rock on steep slopes or high central ridge
    const slopeRock = smoothstep(volcanicTheme ? 0.86 : 0.82, 0.65, ny);
    const heightRock = smoothstep(volcanicTheme ? 5.8 : 7.2, volcanicTheme ? 9.2 : 10.4, wy);
    const rockFactor = clamp(Math.max(slopeRock, heightRock), 0, 1);
    tmpColor.lerp(cRock, rockFactor);

    colors[i * 3] = tmpColor.r;
    colors[i * 3 + 1] = tmpColor.g;
    colors[i * 3 + 2] = tmpColor.b;
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    map: grainTexture,
    roughness: 0.92,
    metalness: 0.02,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  mesh.name = volcanicTheme ? 'terrain-island-2' : 'terrain-island-1';
  return mesh;
}

function buildPalmTree(
  x: number,
  y: number,
  z: number,
  rng: () => number,
  trunkMaterial: THREE.Material,
  frondMaterial: THREE.Material,
  coconutMaterial: THREE.Material
): THREE.Group {
  const tree = new THREE.Group();
  tree.position.set(x, y - 0.15, z);

  const scale = 0.88 + rng() * 0.35;
  const segments = 6;
  const segHeight = 1.05 * scale;
  const leanAngle = 0.055 + rng() * 0.045;
  const leanDir = rng() * Math.PI * 2;

  let curX = 0;
  let curY = 0;
  let curZ = 0;

  for (let i = 0; i < segments; i++) {
    const t0 = i / segments;
    const t1 = (i + 1) / segments;
    const rBottom = lerp(0.32, 0.14, t0) * scale;
    const rTop = lerp(0.32, 0.14, t1) * scale;

    const segGeo = new THREE.CylinderGeometry(rTop, rBottom, segHeight * 1.08, 7);
    const segMesh = new THREE.Mesh(segGeo, trunkMaterial);

    const bend = leanAngle * (i + 0.8);
    const dx = Math.cos(leanDir) * Math.sin(bend) * segHeight * 0.5;
    const dz = Math.sin(leanDir) * Math.sin(bend) * segHeight * 0.5;
    const dy = Math.cos(bend) * segHeight * 0.5;

    segMesh.position.set(curX + dx, curY + dy, curZ + dz);
    segMesh.rotation.order = 'YXZ';
    segMesh.rotation.y = -leanDir;
    segMesh.rotation.z = -bend;
    segMesh.castShadow = true;
    segMesh.receiveShadow = true;
    tree.add(segMesh);

    curX += dx * 2;
    curY += dy * 2;
    curZ += dz * 2;
  }

  // Crown group at top of curved trunk
  const crown = new THREE.Group();
  crown.position.set(curX, curY, curZ);
  tree.add(crown);

  // Small cluster of coconuts
  const nutGeo = new THREE.SphereGeometry(0.16 * scale, 6, 5);
  for (let c = 0; c < 3; c++) {
    const a = (c / 3) * Math.PI * 2 + rng() * 0.5;
    const nut = new THREE.Mesh(nutGeo, coconutMaterial);
    nut.position.set(Math.cos(a) * 0.22 * scale, -0.14 * scale, Math.sin(a) * 0.22 * scale);
    nut.castShadow = true;
    crown.add(nut);
  }

  // 7 arching palm fronds made from 2 angled blade segments each
  const frondCount = 7;
  for (let f = 0; f < frondCount; f++) {
    const yaw = (f / frondCount) * Math.PI * 2 + (rng() - 0.5) * 0.25;
    const frondPivot = new THREE.Group();
    frondPivot.rotation.y = yaw;
    frondPivot.rotation.x = 0.22 + rng() * 0.16;

    const innerLen = 1.65 * scale;
    const outerLen = 1.55 * scale;

    const innerGeo = new THREE.BoxGeometry(0.46 * scale, 0.05 * scale, innerLen);
    const innerBlade = new THREE.Mesh(innerGeo, frondMaterial);
    innerBlade.position.set(0, 0.04 * scale, innerLen * 0.5);
    innerBlade.castShadow = true;
    innerBlade.receiveShadow = true;
    frondPivot.add(innerBlade);

    const outerGeo = new THREE.ConeGeometry(0.24 * scale, outerLen, 4);
    outerGeo.rotateX(Math.PI / 2);
    outerGeo.scale(1.15, 0.22, 1);
    const outerBlade = new THREE.Mesh(outerGeo, frondMaterial);
    outerBlade.position.set(0, -0.22 * scale, innerLen + outerLen * 0.42);
    outerBlade.rotation.x = 0.38;
    outerBlade.castShadow = true;
    outerBlade.receiveShadow = true;
    frondPivot.add(outerBlade);

    crown.add(frondPivot);
  }

  return tree;
}

function buildRock(
  x: number,
  y: number,
  z: number,
  radius: number,
  rng: () => number,
  material: THREE.Material
): THREE.Mesh {
  const geo = new THREE.DodecahedronGeometry(radius, 0);
  const pos = geo.attributes.position as THREE.BufferAttribute;

  // Quantized vertex perturbation so shared corners move identically
  const offsets = new Map<string, number>();
  for (let i = 0; i < pos.count; i++) {
    const vx = pos.getX(i);
    const vy = pos.getY(i);
    const vz = pos.getZ(i);
    const key = `${vx.toFixed(3)},${vy.toFixed(3)},${vz.toFixed(3)}`;
    let mult = offsets.get(key);
    if (mult === undefined) {
      mult = 0.78 + rng() * 0.42;
      offsets.set(key, mult);
    }
    pos.setXYZ(i, vx * mult, vy * mult * 0.76, vz * mult);
  }

  geo.computeVertexNormals();

  const rock = new THREE.Mesh(geo, material);
  rock.position.set(x, y + radius * 0.22, z);
  rock.rotation.set(rng() * 0.4, rng() * Math.PI * 2, rng() * 0.4);
  rock.castShadow = true;
  rock.receiveShadow = true;
  rock.name = 'rock';
  return rock;
}

/** Creates the complete tropical island scene, props, lighting, ocean, and colliders. */
export function createIsland(scene: THREE.Scene): IslandEnvironment {
  const group = new THREE.Group();
  const colliders: Collider[] = [];
  const shootableEnvironment: THREE.Object3D[] = [];
  const rng = createSeededRandom(20261125);

  // Sky & atmospheric distance fog (tuned so Island 2 silhouette is visible across the channel)
  scene.background = new THREE.Color(0x87ceeb);
  scene.fog = new THREE.FogExp2(0x9ad4eb, 0.0031);

  // Tropical sunlight & sky/sand hemisphere illumination
  const hemiLight = new THREE.HemisphereLight(0xc2ebff, 0xd8c195, 0.85);
  group.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xfff4d6, 2.15);
  sunLight.position.set(78, 98, 52);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -95;
  sunLight.shadow.camera.right = 95;
  sunLight.shadow.camera.top = 95;
  sunLight.shadow.camera.bottom = -95;
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 260;
  sunLight.shadow.bias = -0.0005;
  group.add(sunLight);
  group.add(sunLight.target);

  // Subtle glowing sun disc in the sky
  const sunDisc = new THREE.Mesh(
    new THREE.SphereGeometry(11, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xfff8dc, fog: false })
  );
  sunDisc.position.set(170, 215, 115);
  group.add(sunDisc);

  // Procedural dual-island terrain meshes
  const grainTex = createGrainTexture();
  const terrain1 = buildTerrainMesh(220, 140, 0, 0, false, grainTex);
  const terrain2 = buildTerrainMesh(180, 120, ISLAND2_CENTER_X, ISLAND2_CENTER_Z, true, grainTex);
  group.add(terrain1);
  group.add(terrain2);
  shootableEnvironment.push(terrain1, terrain2);

  // Tropical animated ocean spanning both islands
  const oceanGeo = new THREE.PlaneGeometry(950, 950, 56, 56);
  oceanGeo.rotateX(-Math.PI / 2);
  const oceanPos = oceanGeo.attributes.position as THREE.BufferAttribute;
  const oceanBaseX = new Float32Array(oceanPos.count);
  const oceanBaseZ = new Float32Array(oceanPos.count);
  for (let i = 0; i < oceanPos.count; i++) {
    oceanBaseX[i] = oceanPos.getX(i);
    oceanBaseZ[i] = oceanPos.getZ(i);
  }

  const oceanMat = new THREE.MeshStandardMaterial({
    color: 0x0ea5a4,
    roughness: 0.18,
    metalness: 0.12,
    transparent: true,
    opacity: 0.84,
  });
  const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
  oceanMesh.position.set(0, WATER_LEVEL, -95);
  oceanMesh.receiveShadow = true;
  oceanMesh.name = 'ocean';
  group.add(oceanMesh);

  // Shared materials for palm trees, volcanic rocks, and Island 2 outpost props
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x7c5338, roughness: 0.92 });
  const darkTrunkMat = new THREE.MeshStandardMaterial({ color: 0x4b382d, roughness: 0.94 });
  const frondMat = new THREE.MeshStandardMaterial({
    color: 0x3b8c32,
    roughness: 0.72,
    side: THREE.DoubleSide,
  });
  const darkFrondMat = new THREE.MeshStandardMaterial({
    color: 0x2d692c,
    roughness: 0.78,
    side: THREE.DoubleSide,
  });
  const coconutMat = new THREE.MeshStandardMaterial({ color: 0x4d321c, roughness: 0.88 });
  const rockMat = new THREE.MeshStandardMaterial({
    color: 0x7a736a,
    roughness: 0.95,
    flatShading: true,
  });
  const volcanicRockMat = new THREE.MeshStandardMaterial({
    color: 0x5c4c47,
    roughness: 0.96,
    flatShading: true,
  });
  const outpostCrateMat = new THREE.MeshStandardMaterial({
    color: 0x6b4c33,
    roughness: 0.88,
  });

  // Island 1: ~36 palm trees avoiding spawn & northern boat dock corridor
  const placedTrees: Array<{ x: number; z: number }> = [];
  let treeAttempts = 0;
  while (placedTrees.length < 36 && treeAttempts < 600) {
    treeAttempts++;
    const angle = rng() * Math.PI * 2;
    const dist = 12 + rng() * (ISLAND_RADIUS - 14);
    const tx = Math.cos(angle) * dist;
    const tz = Math.sin(angle) * dist;

    if (Math.hypot(tx - SPAWN_X, tz - SPAWN_Z) < 8.5) continue;
    if (Math.abs(tx) < 6 && tz < -40) continue; // Keep northern boat dock clear
    const ty = getTerrainHeight(tx, tz);
    if (ty < 0.85 || ty > 5.6) continue;
    if (getTerrainNormalY(tx, tz) < 0.84) continue;

    let tooClose = false;
    for (const existing of placedTrees) {
      if (Math.hypot(tx - existing.x, tz - existing.z) < 5.8) {
        tooClose = true;
        break;
      }
    }
    if (tooClose) continue;

    placedTrees.push({ x: tx, z: tz });
    const palm = buildPalmTree(tx, ty, tz, rng, trunkMat, frondMat, coconutMat);
    group.add(palm);
    shootableEnvironment.push(palm);
    colliders.push({ x: tx, z: tz, radius: 0.42 });
  }

  // Island 1: ~26 coastal and highland rocks
  let rocksPlaced = 0;
  let rockAttempts = 0;
  while (rocksPlaced < 26 && rockAttempts < 500) {
    rockAttempts++;
    const angle = rng() * Math.PI * 2;
    const dist = 4 + rng() * (ISLAND_RADIUS - 4);
    const rx = Math.cos(angle) * dist;
    const rz = Math.sin(angle) * dist;

    if (Math.hypot(rx - SPAWN_X, rz - SPAWN_Z) < 7.5) continue;
    if (Math.abs(rx) < 6 && rz < -40) continue;
    const ry = getTerrainHeight(rx, rz);
    const isShoreRock = ry >= -0.25 && ry <= 1.8;
    const isHighlandRock = ry >= 5.2 && ry <= 12.5;
    if (!isShoreRock && !isHighlandRock) continue;

    let overlaps = false;
    for (const col of colliders) {
      if (Math.hypot(rx - col.x, rz - col.z) < col.radius + 3.2) {
        overlaps = true;
        break;
      }
    }
    if (overlaps) continue;

    const radius = isShoreRock ? 0.95 + rng() * 1.15 : 0.85 + rng() * 0.95;
    const rock = buildRock(rx, ry, rz, radius, rng, rockMat);
    group.add(rock);
    shootableEnvironment.push(rock);
    colliders.push({ x: rx, z: rz, radius: radius * 0.82 });
    rocksPlaced++;
  }

  // Island 2: ~22 darker volcanic trees avoiding southern boat landing corridor
  const placedTrees2: Array<{ x: number; z: number }> = [];
  let tree2Attempts = 0;
  while (placedTrees2.length < 22 && tree2Attempts < 500) {
    tree2Attempts++;
    const angle = rng() * Math.PI * 2;
    const dist = 10 + rng() * (ISLAND2_RADIUS - 12);
    const tx = ISLAND2_CENTER_X + Math.cos(angle) * dist;
    const tz = ISLAND2_CENTER_Z + Math.sin(angle) * dist;

    if (Math.abs(tx - ISLAND2_CENTER_X) < 7 && tz > ISLAND2_CENTER_Z + 32) continue;
    const ty = getTerrainHeight(tx, tz);
    if (ty < 0.85 || ty > 5.8) continue;
    if (getTerrainNormalY(tx, tz) < 0.82) continue;

    let tooClose = false;
    for (const existing of placedTrees2) {
      if (Math.hypot(tx - existing.x, tz - existing.z) < 5.8) {
        tooClose = true;
        break;
      }
    }
    if (tooClose) continue;

    placedTrees2.push({ x: tx, z: tz });
    const palm = buildPalmTree(tx, ty, tz, rng, darkTrunkMat, darkFrondMat, coconutMat);
    group.add(palm);
    shootableEnvironment.push(palm);
    colliders.push({ x: tx, z: tz, radius: 0.42 });
  }

  // Island 2: ~24 volcanic rocks
  let rocks2Placed = 0;
  let rock2Attempts = 0;
  while (rocks2Placed < 24 && rock2Attempts < 500) {
    rock2Attempts++;
    const angle = rng() * Math.PI * 2;
    const dist = 4 + rng() * (ISLAND2_RADIUS - 4);
    const rx = ISLAND2_CENTER_X + Math.cos(angle) * dist;
    const rz = ISLAND2_CENTER_Z + Math.sin(angle) * dist;

    if (Math.abs(rx - ISLAND2_CENTER_X) < 7 && rz > ISLAND2_CENTER_Z + 32) continue;
    const ry = getTerrainHeight(rx, rz);
    const isShoreRock = ry >= -0.25 && ry <= 1.9;
    const isHighlandRock = ry >= 4.5 && ry <= 14.5;
    if (!isShoreRock && !isHighlandRock) continue;

    let overlaps = false;
    for (const col of colliders) {
      if (Math.hypot(rx - col.x, rz - col.z) < col.radius + 3.0) {
        overlaps = true;
        break;
      }
    }
    if (overlaps) continue;

    const radius = isShoreRock ? 1.0 + rng() * 1.2 : 0.9 + rng() * 1.1;
    const rock = buildRock(rx, ry, rz, radius, rng, volcanicRockMat);
    group.add(rock);
    shootableEnvironment.push(rock);
    colliders.push({ x: rx, z: rz, radius: radius * 0.84 });
    rocks2Placed++;
  }

  // Island 2: Military outpost supply crates for tactical cover
  const outpostCoords: Array<[number, number]> = [
    [-8, ISLAND2_CENTER_Z + 18],
    [10, ISLAND2_CENTER_Z + 12],
    [-14, ISLAND2_CENTER_Z - 8],
    [9, ISLAND2_CENTER_Z - 16],
  ];
  for (const [cx, cz] of outpostCoords) {
    const cy = getTerrainHeight(cx, cz);
    if (cy < 0.8) continue;
    const crate = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.2, 1.4), outpostCrateMat);
    crate.position.set(cx, cy + 0.55, cz);
    crate.rotation.y = rng() * Math.PI;
    crate.castShadow = true;
    crate.receiveShadow = true;
    group.add(crate);
    shootableEnvironment.push(crate);
    colliders.push({ x: cx, z: cz, radius: 0.95 });
  }

  scene.add(group);

  return {
    group,
    colliders,
    shootableEnvironment,
    setActiveIsland(id: IslandId) {
      const center = getIslandCenter(id);
      sunLight.position.set(center.x + 78, 98, center.z + 52);
      sunLight.target.position.set(center.x, 0, center.z);
      sunLight.target.updateMatrixWorld();
    },
    update(time: number) {
      for (let i = 0; i < oceanPos.count; i++) {
        const bx = oceanBaseX[i];
        const bz = oceanBaseZ[i];
        const wave =
          Math.sin(bx * 0.08 + time * 1.4) * 0.14 +
          Math.cos(bz * 0.07 - time * 1.15) * 0.12 +
          Math.sin((bx + bz) * 0.05 + time * 0.85) * 0.08;
        oceanPos.setY(i, wave);
      }
      oceanPos.needsUpdate = true;
      oceanGeo.computeVertexNormals();
    },
  };
}
