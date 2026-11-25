import * as THREE from 'three';
import { SoundEngine } from './audio';
import { Collider, getTerrainHeight, TOWER_X, TOWER_Z } from './island';

export interface TowerState {
  partsCollected: number;
  partsRequired: number;
  activeDrops: number;
  weaponUnlocked: boolean;
  isClimbing: boolean;
}

export interface TowerAction {
  type: 'climb_up' | 'climb_down' | 'unlock_weapon' | 'locked_weapon';
  prompt: string;
  touchLabel: string | null;
}

export interface WeaponPartPickupEvent {
  collected: boolean;
  partName: string;
}

export interface TowerSystem {
  group: THREE.Group;
  getPlatformFloorY(x: number, z: number, curFootY: number): number | null;
  getNearbyAction(playerPos: THREE.Vector3): TowerAction | null;
  startClimb(direction: 'up' | 'down', onComplete: (endPos: THREE.Vector3, yaw: number) => void): boolean;
  getClimbPose(): { position: THREE.Vector3; yaw: number; pitch: number } | null;
  spawnWeaponPartDrop(worldPos: THREE.Vector3): void;
  unlockWeapon(): void;
  getState(): TowerState;
  reset(): void;
  update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): WeaponPartPickupEvent;
}

interface WeaponPartDrop {
  group: THREE.Group;
  partMesh: THREE.Group;
  pos: THREE.Vector3;
  name: string;
  age: number;
}

const WEAPON_PART_NAMES = [
  'Cano Pesado',
  'Mira Térmica',
  'Ferrolho .50',
  'Carregador',
  'Gatilho',
] as const;

export function createTowerSystem(
  scene: THREE.Scene,
  colliders: Collider[],
  shootableEnvironment: THREE.Object3D[],
  audio: SoundEngine
): TowerSystem {
  const group = new THREE.Group();
  scene.add(group);

  const baseY = getTerrainHeight(TOWER_X, TOWER_Z);
  const deckHeight = 7.2;
  const deckY = baseY + deckHeight;
  const halfDeck = 2.3;

  const towerGroup = new THREE.Group();
  towerGroup.position.set(TOWER_X, baseY, TOWER_Z);
  group.add(towerGroup);

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6f4a2e, roughness: 0.9 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.55, metalness: 0.55 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x3f4c3a, roughness: 0.8 });
  const ladderMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4, metalness: 0.7 });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    emissive: 0xd97706,
    emissiveIntensity: 0.4,
    roughness: 0.35,
    metalness: 0.75,
  });
  const gunmetalMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.8 });
  const statusBeaconMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

  // 4 corner structural pillars (from ground to roof)
  const roofHeight = deckHeight + 3.0;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const px = sx * (halfDeck - 0.18);
      const pz = sz * (halfDeck - 0.18);
      const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, roofHeight, 0.32),
        woodMat
      );
      pillar.position.set(px, roofHeight * 0.5 - 0.2, pz);
      pillar.castShadow = true;
      pillar.receiveShadow = true;
      towerGroup.add(pillar);

      colliders.push({
        x: TOWER_X + px,
        z: TOWER_Z + pz,
        radius: 0.38,
      });
    }
  }

  // Elevated platform deck
  const deckMesh = new THREE.Mesh(
    new THREE.BoxGeometry(halfDeck * 2 + 0.1, 0.24, halfDeck * 2 + 0.1),
    woodMat
  );
  deckMesh.position.set(0, deckHeight - 0.12, 0);
  deckMesh.castShadow = true;
  deckMesh.receiveShadow = true;
  towerGroup.add(deckMesh);

  // Mid-height cross braces for watchtower silhouette
  for (const braceY of [2.4, 4.9]) {
    const braceN = new THREE.Mesh(new THREE.BoxGeometry(halfDeck * 2 - 0.2, 0.16, 0.16), steelMat);
    braceN.position.set(0, braceY, -halfDeck + 0.18);
    towerGroup.add(braceN);

    const braceW = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, halfDeck * 2 - 0.2), steelMat);
    braceW.position.set(-halfDeck + 0.18, braceY, 0);
    towerGroup.add(braceW);

    const braceE = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, halfDeck * 2 - 0.2), steelMat);
    braceE.position.set(halfDeck - 0.18, braceY, 0);
    towerGroup.add(braceE);
  }

  // Waist-high tactical parapet walls (3 closed sides + split south side with ladder hatch)
  const parapetH = 1.05;
  const parapetN = new THREE.Mesh(new THREE.BoxGeometry(halfDeck * 2, parapetH, 0.18), steelMat);
  parapetN.position.set(0, deckHeight + parapetH * 0.5, -halfDeck + 0.09);
  parapetN.castShadow = true;
  parapetN.receiveShadow = true;
  towerGroup.add(parapetN);

  const parapetW = new THREE.Mesh(new THREE.BoxGeometry(0.18, parapetH, halfDeck * 2), steelMat);
  parapetW.position.set(-halfDeck + 0.09, deckHeight + parapetH * 0.5, 0);
  parapetW.castShadow = true;
  parapetW.receiveShadow = true;
  towerGroup.add(parapetW);

  const parapetE = new THREE.Mesh(new THREE.BoxGeometry(0.18, parapetH, halfDeck * 2), steelMat);
  parapetE.position.set(halfDeck - 0.09, deckHeight + parapetH * 0.5, 0);
  parapetE.castShadow = true;
  parapetE.receiveShadow = true;
  towerGroup.add(parapetE);

  for (const sx of [-1, 1]) {
    const sParapet = new THREE.Mesh(new THREE.BoxGeometry(1.55, parapetH, 0.18), steelMat);
    sParapet.position.set(sx * 1.52, deckHeight + parapetH * 0.5, halfDeck - 0.09);
    sParapet.castShadow = true;
    towerGroup.add(sParapet);
  }

  // Canopy roof
  const roof = new THREE.Mesh(new THREE.BoxGeometry(halfDeck * 2 + 0.5, 0.22, halfDeck * 2 + 0.5), roofMat);
  roof.position.set(0, roofHeight, 0);
  roof.castShadow = true;
  roof.receiveShadow = true;
  towerGroup.add(roof);

  // Climbable ladder on south face (+Z)
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, deckHeight + 0.6, 6),
      ladderMat
    );
    rail.position.set(side * 0.34, (deckHeight + 0.4) * 0.5, halfDeck + 0.05);
    towerGroup.add(rail);
  }
  const rungCount = 15;
  for (let r = 0; r < rungCount; r++) {
    const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.68, 6), ladderMat);
    rung.rotation.z = Math.PI / 2;
    rung.position.set(0, 0.45 + r * ((deckHeight - 0.35) / rungCount), halfDeck + 0.06);
    towerGroup.add(rung);
  }

  // Heavy .50 rifle pedestal on top deck
  const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.9, 1.3), steelMat);
  pedestal.position.set(0, deckHeight + 0.45, -0.9);
  pedestal.castShadow = true;
  towerGroup.add(pedestal);

  const beaconOrb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), statusBeaconMat);
  beaconOrb.position.set(0, deckHeight + 1.55, -0.9);
  towerGroup.add(beaconOrb);

  // Display .50 rifle floating gently above pedestal
  const displayRifle = new THREE.Group();
  displayRifle.position.set(0, deckHeight + 1.15, -0.9);
  const dBody = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, 0.65), gunmetalMat);
  displayRifle.add(dBody);
  const dBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.85, 8), goldMat);
  dBarrel.rotation.x = Math.PI / 2;
  dBarrel.position.set(0, 0.03, -0.68);
  displayRifle.add(dBarrel);
  const dScope = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.36, 8), gunmetalMat);
  dScope.rotation.x = Math.PI / 2;
  dScope.position.set(0, 0.11, -0.05);
  displayRifle.add(dScope);
  towerGroup.add(displayRifle);

  shootableEnvironment.push(towerGroup);

  const partsRequired = 5;
  let partsCollected = 0;
  let weaponUnlocked = false;
  const drops: WeaponPartDrop[] = [];

  let isClimbing = false;
  let climbDir: 'up' | 'down' = 'up';
  let climbTimer = 0;
  const climbDuration = 1.1;
  let climbCallback: ((endPos: THREE.Vector3, yaw: number) => void) | null = null;
  let animTime = 0;

  const baseEyePos = new THREE.Vector3(TOWER_X, baseY + 1.72, TOWER_Z + halfDeck + 1.15);
  const deckEntryEyePos = new THREE.Vector3(TOWER_X, deckY + 1.72, TOWER_Z + 1.25);

  function buildWeaponPartMesh(): THREE.Group {
    const g = new THREE.Group();
    const violetMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.65,
      roughness: 0.25,
      metalness: 0.7,
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xca8a04,
      emissiveIntensity: 0.45,
      roughness: 0.3,
      metalness: 0.85,
    });

    const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 0), trimMat);
    core.castShadow = true;
    g.add(core);

    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.05, 6, 14), violetMat);
    halo.rotation.x = Math.PI / 2;
    g.add(halo);

    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.34, 8, 8, 1, true), beamMat);
    beam.position.y = 4;
    g.add(beam);

    return g;
  }

  return {
    group,

    getPlatformFloorY(x: number, z: number, curFootY: number): number | null {
      if (
        Math.abs(x - TOWER_X) <= halfDeck &&
        Math.abs(z - TOWER_Z) <= halfDeck &&
        curFootY >= deckY - 0.8
      ) {
        return deckY;
      }
      return null;
    },

    getNearbyAction(playerPos: THREE.Vector3): TowerAction | null {
      if (isClimbing) return null;

      const onDeck = playerPos.y >= deckY;
      if (!onDeck) {
        const distBase = Math.hypot(
          playerPos.x - TOWER_X,
          playerPos.z - (TOWER_Z + halfDeck + 0.75)
        );
        if (distBase <= 2.9 && Math.abs(playerPos.y - (baseY + 1.72)) <= 2.4) {
          return {
            type: 'climb_up',
            prompt: '[E] Subir na Torre',
            touchLabel: 'SUBIR TORRE',
          };
        }
        return null;
      }

      // Check pedestal first when standing on deck
      const distPedestal = Math.hypot(
        playerPos.x - TOWER_X,
        playerPos.z - (TOWER_Z - 0.9)
      );
      if (distPedestal <= 2.4 && !weaponUnlocked) {
        if (partsCollected >= partsRequired) {
          return {
            type: 'unlock_weapon',
            prompt: '[E] Pegar Rifle Pesado .50',
            touchLabel: 'PEGAR .50',
          };
        }
        const missing = partsRequired - partsCollected;
        return {
          type: 'locked_weapon',
          prompt: `Rifle Pesado .50 — faltam ${missing} peça${missing > 1 ? 's' : ''} (último inimigo na Ilha 2)`,
          touchLabel: null,
        };
      }

      // Check ladder hatch on south side of deck
      const distHatch = Math.hypot(
        playerPos.x - TOWER_X,
        playerPos.z - (TOWER_Z + halfDeck - 0.45)
      );
      if (distHatch <= 2.15) {
        return {
          type: 'climb_down',
          prompt: '[E] Descer da Torre',
          touchLabel: 'DESCER TORRE',
        };
      }

      return null;
    },

    startClimb(
      direction: 'up' | 'down',
      onComplete: (endPos: THREE.Vector3, yaw: number) => void
    ): boolean {
      if (isClimbing) return false;
      isClimbing = true;
      climbDir = direction;
      climbTimer = 0;
      climbCallback = onComplete;
      return true;
    },

    getClimbPose(): { position: THREE.Vector3; yaw: number; pitch: number } | null {
      if (!isClimbing) return null;
      const t = Math.min(1, climbTimer / climbDuration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const from = climbDir === 'up' ? baseEyePos : deckEntryEyePos;
      const to = climbDir === 'up' ? deckEntryEyePos : baseEyePos;
      const pos = new THREE.Vector3().lerpVectors(from, to, eased);
      // Slight step outside ladder rails during middle of climb
      pos.z += Math.sin(t * Math.PI) * 0.45;
      return {
        position: pos,
        yaw: climbDir === 'up' ? 0 : Math.PI,
        pitch: climbDir === 'up' ? 0.25 : -0.25,
      };
    },

    spawnWeaponPartDrop(worldPos: THREE.Vector3): void {
      const idx = Math.min(WEAPON_PART_NAMES.length - 1, partsCollected + drops.length);
      const name = WEAPON_PART_NAMES[idx];
      const dropGroup = new THREE.Group();
      const groundY = Math.max(0.2, getTerrainHeight(worldPos.x, worldPos.z));
      const pos = new THREE.Vector3(worldPos.x, groundY + 0.55, worldPos.z);
      dropGroup.position.copy(pos);

      const partMesh = buildWeaponPartMesh();
      dropGroup.add(partMesh);
      group.add(dropGroup);

      drops.push({
        group: dropGroup,
        partMesh,
        pos,
        name,
        age: 0,
      });
    },

    unlockWeapon(): void {
      weaponUnlocked = true;
      displayRifle.visible = false;
      beaconOrb.visible = false;
    },

    getState(): TowerState {
      return {
        partsCollected,
        partsRequired,
        activeDrops: drops.length,
        weaponUnlocked,
        isClimbing,
      };
    },

    reset(): void {
      while (drops.length > 0) {
        const d = drops.pop()!;
        group.remove(d.group);
      }
      partsCollected = 0;
      weaponUnlocked = false;
      isClimbing = false;
      climbTimer = 0;
      climbCallback = null;
      displayRifle.visible = true;
      beaconOrb.visible = true;
      statusBeaconMat.color.setHex(0xa855f7);
    },

    update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): WeaponPartPickupEvent {
      animTime += dt;
      let pickup: WeaponPartPickupEvent = { collected: false, partName: '' };

      if (!weaponUnlocked) {
        displayRifle.rotation.y += dt * 1.4;
        displayRifle.position.y = deckY + 1.15 + Math.sin(animTime * 2.5) * 0.07;
        statusBeaconMat.color.setHex(partsCollected >= partsRequired ? 0x22c55e : 0xa855f7);
      }

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.age += dt;
        d.partMesh.rotation.y += dt * 2.3;
        d.group.position.y = d.pos.y + Math.sin(d.age * 3.2) * 0.14;

        if (isPlaying && !isClimbing) {
          const distXZ = Math.hypot(playerPos.x - d.pos.x, playerPos.z - d.pos.z);
          if (distXZ <= 2.8) {
            partsCollected++;
            audio.playPickup();
            pickup = { collected: true, partName: d.name };
            group.remove(d.group);
            drops.splice(i, 1);
          }
        }
      }

      if (isClimbing && isPlaying) {
        climbTimer += dt;
        if (climbTimer >= climbDuration) {
          isClimbing = false;
          const endPos = (climbDir === 'up' ? deckEntryEyePos : baseEyePos).clone();
          const endYaw = climbDir === 'up' ? 0 : Math.PI;
          climbCallback?.(endPos, endYaw);
          climbCallback = null;
        }
      }

      return pickup;
    },
  };
}
