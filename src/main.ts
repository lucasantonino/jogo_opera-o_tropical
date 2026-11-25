import * as THREE from 'three';
import { SoundEngine } from './audio';
import { createIsland } from './island';
import { PlayerController } from './player';
import { createTargets } from './targets';
import { WeaponSystem } from './weapon';

function requireEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing required DOM element #${id}`);
  return el as T;
}

const canvasContainer = requireEl<HTMLDivElement>('canvas-container');
const overlayEl = requireEl<HTMLDivElement>('overlay');
const playBtn = requireEl<HTMLButtonElement>('play-btn');
const targetCounterEl = requireEl<HTMLSpanElement>('target-counter');
const statusIndicatorEl = requireEl<HTMLDivElement>('status-indicator');
const toastEl = requireEl<HTMLDivElement>('toast');
const crosshairEl = requireEl<HTMLDivElement>('crosshair');
const hitmarkerEl = requireEl<HTMLDivElement>('hitmarker');
const reloadPromptEl = requireEl<HTMLDivElement>('reload-prompt');
const ammoMagEl = requireEl<HTMLSpanElement>('ammo-mag');
const ammoReserveEl = requireEl<HTMLSpanElement>('ammo-reserve');

// Three.js scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.05,
  600
);
// Crucial: add camera to scene so camera-mounted weapon viewmodel renders
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
canvasContainer.appendChild(renderer.domElement);

// Game systems
const audio = new SoundEngine();
const island = createIsland(scene);
const targets = createTargets(scene, island.colliders);
const player = new PlayerController(camera, island.colliders, audio);
const weapon = new WeaponSystem(
  camera,
  scene,
  audio,
  targets,
  island.shootableEnvironment
);

let isPlaying = false;
let hasStarted = false;
let pointerLockFallback = false;
let lastPointerX: number | null = null;
let lastPointerY: number | null = null;
let spreadFlashTimer = 0;
let resetScheduled = false;
let resetCountdown = 0;
let toastTimer = 0;

function showToast(message: string, duration = 2.4): void {
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');
  toastTimer = duration;
}

function triggerHitmarker(destroyed: boolean): void {
  hitmarkerEl.classList.remove('hit', 'kill');
  void hitmarkerEl.offsetWidth;
  hitmarkerEl.classList.add('hit');
  if (destroyed) {
    hitmarkerEl.classList.add('kill');
  }
}

function setOverlayVisible(visible: boolean): void {
  if (visible) {
    playBtn.textContent = hasStarted ? 'CONTINUAR' : 'JOGAR';
    overlayEl.classList.add('visible');
  } else {
    overlayEl.classList.remove('visible');
  }
}

function activateFallbackPlay(): void {
  if (document.pointerLockElement === renderer.domElement) return;
  pointerLockFallback = true;
  isPlaying = true;
  hasStarted = true;
  lastPointerX = null;
  lastPointerY = null;
  setOverlayVisible(false);
}

function enterGame(): void {
  audio.unlock();
  const canvas = renderer.domElement;
  activateFallbackPlay();
  try {
    const result = canvas.requestPointerLock() as unknown as Promise<void> | undefined;
    if (result && typeof result.catch === 'function') {
      result.catch(() => {
        // Already running in fallback play mode
      });
    }
  } catch {
    // Already running in fallback play mode
  }
}

playBtn.addEventListener('click', () => {
  enterGame();
});

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === renderer.domElement;
  if (locked) {
    pointerLockFallback = false;
    isPlaying = true;
    hasStarted = true;
    setOverlayVisible(false);
  } else if (!pointerLockFallback) {
    isPlaying = false;
    player.clearInputs();
    weapon.setFiringHeld(false);
    weapon.setAiming(false);
    setOverlayVisible(true);
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isPlaying) return;
  let moveX = e.movementX;
  let moveY = e.movementY;
  if (document.pointerLockElement !== renderer.domElement) {
    if (lastPointerX !== null && lastPointerY !== null && moveX === 0 && moveY === 0) {
      moveX = e.clientX - lastPointerX;
      moveY = e.clientY - lastPointerY;
    }
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
  }
  const { dx, dy } = player.handleMouseLook(moveX, moveY, weapon.getState().isAiming);
  weapon.addMouseSway(dx, dy);
});

window.addEventListener('mousedown', (e) => {
  if (!isPlaying) return;
  if (e.button === 0) {
    weapon.setFiringHeld(true);
  } else if (e.button === 2) {
    weapon.setAiming(true);
  }
});

window.addEventListener('mouseup', (e) => {
  if (e.button === 0) {
    weapon.setFiringHeld(false);
  } else if (e.button === 2) {
    weapon.setAiming(false);
  }
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

window.addEventListener('keydown', (e) => {
  if (!isPlaying) return;
  if (e.code === 'Escape' && pointerLockFallback) {
    isPlaying = false;
    pointerLockFallback = false;
    player.clearInputs();
    weapon.setFiringHeld(false);
    weapon.setAiming(false);
    setOverlayVisible(true);
    return;
  }
  player.handleKeyDown(e.code);
  if (e.code === 'KeyR') {
    weapon.startReload();
  } else if (e.code === 'KeyT') {
    targets.resetAll();
    weapon.refillReserve();
    resetScheduled = false;
    showToast('Alvos reposicionados!', 1.8);
  }
});

window.addEventListener('keyup', (e) => {
  player.handleKeyUp(e.code);
});

window.addEventListener('blur', () => {
  player.clearInputs();
  weapon.setFiringHeld(false);
  weapon.setAiming(false);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Main loop
const clock = new THREE.Clock();

function updateHud(
  inWater: boolean,
  speedRatio: number,
  isReloading: boolean,
  isAiming: boolean
): void {
  const progress = targets.getProgress();
  targetCounterEl.textContent = `${progress.hitCount} / ${progress.total}`;

  if (progress.total > 0 && progress.hitCount === progress.total && !resetScheduled) {
    resetScheduled = true;
    resetCountdown = 2.6;
    showToast('Todos os alvos derrubados! Reiniciando...', 2.5);
  }

  const wState = weapon.getState();
  ammoMagEl.textContent = String(wState.mag);
  ammoReserveEl.textContent = String(wState.reserve);
  ammoMagEl.classList.toggle('low-ammo', wState.mag <= 7);

  const needReload = !isReloading && wState.mag <= 7 && wState.reserve > 0;
  reloadPromptEl.classList.toggle('hidden', !needReload);

  crosshairEl.classList.toggle('aiming', isAiming);
  crosshairEl.classList.toggle('reloading', isReloading);
  crosshairEl.classList.toggle('spread', spreadFlashTimer > 0 || speedRatio > 0.75);

  if (isReloading) {
    statusIndicatorEl.textContent = 'RECARREGANDO...';
    statusIndicatorEl.classList.add('reloading');
    statusIndicatorEl.classList.remove('hidden');
  } else if (inWater) {
    statusIndicatorEl.textContent = 'ÁGUA RASA';
    statusIndicatorEl.classList.remove('reloading');
    statusIndicatorEl.classList.remove('hidden');
  } else {
    statusIndicatorEl.classList.add('hidden');
  }
}

function animate(): void {
  requestAnimationFrame(animate);

  const dt = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.elapsedTime;

  spreadFlashTimer = Math.max(0, spreadFlashTimer - dt);
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) {
      toastEl.classList.add('hidden');
    }
  }

  if (resetScheduled) {
    resetCountdown -= dt;
    if (resetCountdown <= 0) {
      resetScheduled = false;
      targets.resetAll();
      weapon.refillReserve();
    }
  }

  const weaponState = weapon.getState();
  const playerStatus = player.update(dt, isPlaying, weaponState.isAiming);
  const shot = weapon.update(dt, isPlaying, playerStatus.speedRatio, playerStatus.isSprinting);

  if (shot.fired) {
    player.applyRecoilKick(shot.pitchKick, shot.yawKick);
    spreadFlashTimer = 0.09;
    if (shot.hitTarget) {
      triggerHitmarker(shot.targetDestroyed);
    }
  }

  island.update(elapsed);
  targets.update(dt);

  const updatedWeapon = weapon.getState();
  updateHud(
    playerStatus.inWater,
    playerStatus.speedRatio,
    updatedWeapon.isReloading,
    updatedWeapon.isAiming
  );

  renderer.render(scene, camera);
}

animate();
