import * as THREE from 'three';
import { SoundEngine } from './audio';
import { createEnemySystem } from './enemies';
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
const damageVignetteEl = requireEl<HTMLDivElement>('damage-vignette');
const overlayEl = requireEl<HTMLDivElement>('overlay');
const playBtn = requireEl<HTMLButtonElement>('play-btn');
const gameoverOverlayEl = requireEl<HTMLDivElement>('gameover-overlay');
const gameoverWaveEl = requireEl<HTMLSpanElement>('gameover-wave');
const gameoverKillsEl = requireEl<HTMLSpanElement>('gameover-kills');
const restartBtn = requireEl<HTMLButtonElement>('restart-btn');
const waveCounterEl = requireEl<HTMLSpanElement>('wave-counter');
const enemyCounterEl = requireEl<HTMLSpanElement>('enemy-counter');
const killCounterEl = requireEl<HTMLSpanElement>('kill-counter');
const targetCounterEl = requireEl<HTMLSpanElement>('target-counter');
const healthValueEl = requireEl<HTMLSpanElement>('health-value');
const healthBarFillEl = requireEl<HTMLDivElement>('health-bar-fill');
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
const enemies = createEnemySystem(scene, island.colliders, island.shootableEnvironment, audio);
const player = new PlayerController(camera, island.colliders, audio);
const weapon = new WeaponSystem(
  camera,
  scene,
  audio,
  targets,
  enemies,
  island.shootableEnvironment
);

let isPlaying = false;
let hasStarted = false;
let pointerLockFallback = false;
let attemptingPointerLock = false;
let lastPointerX: number | null = null;
let lastPointerY: number | null = null;
let spreadFlashTimer = 0;
let resetScheduled = false;
let resetCountdown = 0;
let toastTimer = 0;
let gameOverShown = false;

function showToast(message: string, duration = 2.4): void {
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');
  toastTimer = duration;
}

function triggerHitmarker(destroyed: boolean, headshot: boolean): void {
  hitmarkerEl.classList.remove('hit', 'kill', 'headshot');
  void hitmarkerEl.offsetWidth;
  hitmarkerEl.classList.add('hit');
  if (headshot) {
    hitmarkerEl.classList.add('headshot');
  } else if (destroyed) {
    hitmarkerEl.classList.add('kill');
  }
}

function setOverlayVisible(visible: boolean): void {
  if (visible && !gameOverShown) {
    playBtn.textContent = hasStarted ? 'CONTINUAR' : 'JOGAR';
    overlayEl.classList.add('visible');
  } else {
    overlayEl.classList.remove('visible');
  }
}

function showGameOver(): void {
  if (gameOverShown) return;
  gameOverShown = true;
  isPlaying = false;
  pointerLockFallback = false;
  player.clearInputs();
  weapon.setFiringHeld(false);
  weapon.setAiming(false);
  setOverlayVisible(false);

  if (document.pointerLockElement === renderer.domElement) {
    document.exitPointerLock?.();
  }

  const progress = enemies.getProgress();
  gameoverWaveEl.textContent = String(progress.wave);
  gameoverKillsEl.textContent = String(progress.kills);
  gameoverOverlayEl.classList.add('visible');
}

function activateFallbackPlay(): void {
  attemptingPointerLock = false;
  if (gameOverShown || document.pointerLockElement === renderer.domElement) return;
  pointerLockFallback = true;
  isPlaying = true;
  hasStarted = true;
  lastPointerX = null;
  lastPointerY = null;
  setOverlayVisible(false);
}

function enterGame(): void {
  if (gameOverShown) return;
  audio.unlock();
  const canvas = renderer.domElement;
  attemptingPointerLock = true;
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

function restartGame(): void {
  gameOverShown = false;
  gameoverOverlayEl.classList.remove('visible');
  resetScheduled = false;
  resetCountdown = 0;
  toastTimer = 0;
  toastEl.classList.add('hidden');
  player.reset();
  weapon.reset();
  enemies.reset();
  targets.resetAll();
  enterGame();
}

playBtn.addEventListener('click', () => {
  enterGame();
});

restartBtn.addEventListener('click', () => {
  restartGame();
});

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === renderer.domElement;
  attemptingPointerLock = false;
  if (locked) {
    if (gameOverShown) {
      document.exitPointerLock?.();
      return;
    }
    pointerLockFallback = false;
    isPlaying = true;
    hasStarted = true;
    setOverlayVisible(false);
  } else if (!pointerLockFallback) {
    isPlaying = false;
    player.clearInputs();
    weapon.setFiringHeld(false);
    weapon.setAiming(false);
    if (!gameOverShown) {
      setOverlayVisible(true);
    }
  }
});

document.addEventListener('pointerlockerror', () => {
  if (attemptingPointerLock && !gameOverShown) {
    activateFallbackPlay();
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
  const targetProgress = targets.getProgress();
  targetCounterEl.textContent = `${targetProgress.hitCount} / ${targetProgress.total}`;

  if (targetProgress.total > 0 && targetProgress.hitCount === targetProgress.total && !resetScheduled) {
    resetScheduled = true;
    resetCountdown = 2.6;
    showToast('Todos os alvos derrubados! Reiniciando...', 2.5);
  }

  const enemyProgress = enemies.getProgress();
  waveCounterEl.textContent = String(enemyProgress.wave);
  enemyCounterEl.textContent = String(enemyProgress.alive);
  killCounterEl.textContent = String(enemyProgress.kills);

  const health = player.getHealth();
  const hpPercent = Math.max(0, Math.min(100, (health.current / health.max) * 100));
  healthValueEl.textContent = String(health.current);
  healthBarFillEl.style.width = `${hpPercent}%`;
  healthBarFillEl.classList.toggle('hp-warn', health.current <= 50 && health.current > 25);
  healthBarFillEl.classList.toggle('hp-danger', health.current <= 25);

  const lowHealthBase = health.current <= 30 && !health.isDead ? (30 - health.current) / 60 : 0;
  const vignetteOpacity = Math.min(0.92, Math.max(health.damageFlash * 0.78, lowHealthBase));
  damageVignetteEl.style.opacity = String(vignetteOpacity);
  damageVignetteEl.classList.toggle('low-health', health.current <= 30 && !health.isDead);

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
      triggerHitmarker(shot.targetDestroyed, shot.headshot);
    }
  }

  const enemyStep = enemies.update(
    dt,
    isPlaying,
    camera,
    player.getPosition(),
    (damage) => {
      const died = player.takeDamage(damage);
      if (died) {
        showGameOver();
      }
    }
  );

  if (enemyStep.waveCleared && !player.getHealth().isDead) {
    player.heal(25);
    weapon.refillReserve();
    showToast(`Onda ${enemyStep.clearedWave} limpa! +25 VIDA — Próxima onda...`, 2.6);
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
