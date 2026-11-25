import * as THREE from 'three';
import { SoundEngine } from './audio';

export type HelicopterPhase = 'idle' | 'approaching' | 'dropping' | 'departing';

export interface HelicopterSystem {
  group: THREE.Group;
  dispatchDrop(
    dropPos: THREE.Vector3,
    count: number,
    onEnemyDrop: (spawnPos: THREE.Vector3) => void
  ): void;
  update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): void;
  isActive(): boolean;
  reset(): void;
}

export function createHelicopterSystem(scene: THREE.Scene, audio: SoundEngine): HelicopterSystem {
  const group = new THREE.Group();
  group.visible = false;
  scene.add(group);

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x364137, roughness: 0.62, metalness: 0.35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1d2228, roughness: 0.5, metalness: 0.6 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    roughness: 0.15,
    metalness: 0.4,
    transparent: true,
    opacity: 0.62,
  });
  const rotorMat = new THREE.MeshStandardMaterial({ color: 0x11151b, roughness: 0.4, metalness: 0.7 });
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2b2b });
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0xb89f74, roughness: 0.9 });

  // Fuselage oriented forward along +Z
  const fuselage = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.0, 5.4), bodyMat);
  fuselage.position.set(0, 0.2, 0);
  fuselage.castShadow = true;
  group.add(fuselage);

  const nose = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.5, 1.8), bodyMat);
  nose.position.set(0, -0.05, 3.3);
  nose.rotation.x = 0.2;
  nose.castShadow = true;
  group.add(nose);

  const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.1, 1.7), glassMat);
  canopy.position.set(0, 0.55, 2.75);
  canopy.rotation.x = 0.32;
  group.add(canopy);

  const turbinePod = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.75, 2.8), darkMat);
  turbinePod.position.set(0, 1.45, -0.2);
  turbinePod.castShadow = true;
  group.add(turbinePod);

  // Tail boom + vertical & horizontal stabilizers
  const tailBoom = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.65, 5.2), bodyMat);
  tailBoom.position.set(0, 0.55, -5.0);
  tailBoom.castShadow = true;
  group.add(tailBoom);

  const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.7, 1.05), darkMat);
  tailFin.position.set(0, 1.35, -7.2);
  tailFin.rotation.x = -0.22;
  tailFin.castShadow = true;
  group.add(tailFin);

  const horizStab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.14, 0.65), darkMat);
  horizStab.position.set(0, 0.6, -6.7);
  group.add(horizStab);

  // Landing skids
  for (const side of [-1, 1]) {
    const skid = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 4.8, 8), darkMat);
    skid.rotation.x = Math.PI / 2;
    skid.position.set(side * 1.15, -1.35, 0.4);
    group.add(skid);

    for (const strutZ of [-0.9, 1.5]) {
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.9, 6), darkMat);
      strut.position.set(side * 1.0, -0.95, strutZ);
      strut.rotation.z = side * 0.28;
      group.add(strut);
    }
  }

  // Main 4-blade rotor
  const mainRotor = new THREE.Group();
  mainRotor.position.set(0, 1.98, 0.1);
  const rotorHub = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.4, 10), darkMat);
  mainRotor.add(rotorHub);
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.05, 5.4), rotorMat);
    blade.rotation.y = (i * Math.PI) / 2;
    blade.position.set(Math.sin(blade.rotation.y) * 2.7, 0.12, Math.cos(blade.rotation.y) * 2.7);
    blade.castShadow = true;
    mainRotor.add(blade);
  }
  group.add(mainRotor);

  // Tail rotor
  const tailRotor = new THREE.Group();
  tailRotor.position.set(0.24, 1.45, -7.45);
  for (let i = 0; i < 2; i++) {
    const tBlade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.5, 0.16), rotorMat);
    tBlade.rotation.x = (i * Math.PI) / 2;
    tailRotor.add(tBlade);
  }
  group.add(tailRotor);

  // Blinking tail beacon
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), beaconMat);
  beacon.position.set(0, 2.25, -7.2);
  group.add(beacon);

  // Ropes lowered during dropping phase
  const ropesGroup = new THREE.Group();
  for (const side of [-1, 1]) {
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 13.5, 6), ropeMat);
    rope.position.set(side * 0.95, -7.5, 0.3);
    ropesGroup.add(rope);
  }
  ropesGroup.visible = false;
  group.add(ropesGroup);

  let phase: HelicopterPhase = 'idle';
  let phaseTimer = 0;
  const approachDuration = 2.4;
  const departDuration = 2.8;

  const startPos = new THREE.Vector3();
  const hoverPos = new THREE.Vector3();
  const departPos = new THREE.Vector3();

  let dropRemaining = 0;
  let dropIntervalTimer = 0;
  let dropCallback: ((spawnPos: THREE.Vector3) => void) | null = null;
  let rotorSoundTimer = 0;
  let blinkTime = 0;

  return {
    group,

    dispatchDrop(
      dropPos: THREE.Vector3,
      count: number,
      onEnemyDrop: (spawnPos: THREE.Vector3) => void
    ): void {
      if (count <= 0) return;
      const inAngle = Math.random() * Math.PI * 2;
      const outAngle = inAngle + Math.PI + (Math.random() - 0.5) * 0.6;

      hoverPos.set(dropPos.x, dropPos.y + 14.5, dropPos.z);
      startPos.set(
        dropPos.x + Math.cos(inAngle) * 115,
        dropPos.y + 28,
        dropPos.z + Math.sin(inAngle) * 115
      );
      departPos.set(
        dropPos.x + Math.cos(outAngle) * 135,
        dropPos.y + 30,
        dropPos.z + Math.sin(outAngle) * 135
      );

      group.position.copy(startPos);
      group.visible = true;
      ropesGroup.visible = false;

      phase = 'approaching';
      phaseTimer = 0;
      dropRemaining = count;
      dropIntervalTimer = 0.15;
      dropCallback = onEnemyDrop;
      rotorSoundTimer = 0;
    },

    update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): void {
      if (phase === 'idle') return;

      // Keep spinning rotors visually even when paused? No, pause cleanly when !isPlaying
      if (!isPlaying) return;

      blinkTime += dt;
      mainRotor.rotation.y += dt * 26;
      tailRotor.rotation.x += dt * 36;
      beacon.visible = Math.sin(blinkTime * 10) > 0;

      rotorSoundTimer -= dt;
      if (rotorSoundTimer <= 0) {
        rotorSoundTimer = 0.14;
        audio.playHelicopterRotor(group.position.distanceTo(playerPos));
      }

      if (phase === 'approaching') {
        phaseTimer += dt;
        const t = Math.min(1, phaseTimer / approachDuration);
        const eased = 1 - Math.pow(1 - t, 3);
        group.position.lerpVectors(startPos, hoverPos, eased);

        const yaw = Math.atan2(hoverPos.x - startPos.x, hoverPos.z - startPos.z);
        group.rotation.order = 'YXZ';
        group.rotation.y = yaw;
        group.rotation.x = 0.2 * (1 - eased); // Forward nose-down flight tilt easing into hover
        group.rotation.z = 0;

        if (t >= 1) {
          phase = 'dropping';
          phaseTimer = 0;
          ropesGroup.visible = true;
        }
      } else if (phase === 'dropping') {
        phaseTimer += dt;
        group.position.x = hoverPos.x + Math.sin(phaseTimer * 1.8) * 0.25;
        group.position.y = hoverPos.y + Math.sin(phaseTimer * 2.6) * 0.22;
        group.position.z = hoverPos.z + Math.cos(phaseTimer * 1.5) * 0.25;
        group.rotation.x = Math.sin(phaseTimer * 2.1) * 0.03;
        group.rotation.z = Math.cos(phaseTimer * 1.9) * 0.04;

        if (dropRemaining > 0) {
          dropIntervalTimer -= dt;
          if (dropIntervalTimer <= 0) {
            dropIntervalTimer = 0.32;
            dropRemaining--;
            const side = dropRemaining % 2 === 0 ? -0.95 : 0.95;
            const spawnPos = new THREE.Vector3(
              group.position.x + side + (Math.random() - 0.5) * 0.9,
              group.position.y - 1.2,
              group.position.z + (Math.random() - 0.5) * 0.9
            );
            dropCallback?.(spawnPos);
          }
        } else if (phaseTimer > 0.65) {
          ropesGroup.visible = false;
          phase = 'departing';
          phaseTimer = 0;
        }
      } else if (phase === 'departing') {
        phaseTimer += dt;
        const t = Math.min(1, phaseTimer / departDuration);
        const eased = t * t;
        group.position.lerpVectors(hoverPos, departPos, eased);

        const yaw = Math.atan2(departPos.x - hoverPos.x, departPos.z - hoverPos.z);
        group.rotation.order = 'YXZ';
        group.rotation.y = yaw;
        group.rotation.x = 0.24 * Math.min(1, t * 2.2);
        group.rotation.z = 0.14 * Math.sin(t * Math.PI);

        if (t >= 1) {
          phase = 'idle';
          group.visible = false;
          dropCallback = null;
        }
      }
    },

    isActive(): boolean {
      return phase !== 'idle';
    },

    reset(): void {
      phase = 'idle';
      phaseTimer = 0;
      dropRemaining = 0;
      dropCallback = null;
      ropesGroup.visible = false;
      group.visible = false;
    },
  };
}
