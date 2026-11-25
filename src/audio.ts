import { SurfaceType } from './island';

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private ambienceStarted = false;

  /** Lazily initializes and resumes the Web Audio context after user interaction. */
  unlock(): void {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.7;
      this.masterGain.connect(this.ctx.destination);
      this.noiseBuffer = this.createNoiseBuffer(this.ctx, 2.0);
    }

    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }

    if (!this.ambienceStarted) {
      this.startAmbience();
    }
  }

  private createNoiseBuffer(ctx: AudioContext, durationSeconds: number): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * durationSeconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  /** Punchy rifle shot: filtered noise crack + fast low-end thump. */
  playShot(): void {
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;

    // 1. High-energy noise burst shaped through bandpass/lowpass
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3400, now);
    filter.frequency.exponentialRampToValueAtTime(380, now + 0.14);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.55, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now, Math.random() * 0.5, 0.17);

    // 2. Low-frequency body punch
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(175, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.09);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.5, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.11);
  }

  /** Crisp dry-fire trigger click when magazine is empty. */
  playEmptyClick(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.025);

    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 800;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(hp);
    hp.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.035);
  }

  /** Staged mechanical clicks for mag release, mag insert, and bolt rack. */
  playReload(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    this.scheduleMechClick(now + 0.02, 720, 420, 0.14);
    this.scheduleMechClick(now + 0.65, 480, 760, 0.18);
    this.scheduleMechClick(now + 1.15, 920, 1280, 0.2);
  }

  private scheduleMechClick(startTime: number, fStart: number, fEnd: number, volume: number): void {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(fStart, startTime);
    osc.frequency.exponentialRampToValueAtTime(fEnd, startTime + 0.055);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.065);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(startTime);
    osc.stop(startTime + 0.07);
  }

  /** Surface-aware footsteps for sand, grass, rock, or shallow water. */
  playFootstep(surface: SurfaceType): void {
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    if (surface === 'water') {
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1150, now);
      filter.Q.value = 1.2;
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      noise.start(now, Math.random() * 0.7, 0.17);
    } else if (surface === 'sand') {
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(680, now);
      filter.Q.value = 0.8;
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      noise.start(now, Math.random() * 0.7, 0.1);
    } else if (surface === 'rock') {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, now);
      gain.gain.setValueAtTime(0.13, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);
      noise.start(now, Math.random() * 0.7, 0.07);
    } else {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.095, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      noise.start(now, Math.random() * 0.7, 0.085);
    }

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
  }

  /** Wooden thwack or crunchy destruction feedback when shooting targets. */
  playHit(destroyed: boolean): void {
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(destroyed ? 260 : 540, now);
    osc.frequency.exponentialRampToValueAtTime(destroyed ? 90 : 210, now + 0.08);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(destroyed ? 0.28 : 0.2, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.095);

    if (destroyed) {
      const crunch = this.ctx.createBufferSource();
      crunch.buffer = this.noiseBuffer;

      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(1100, now);
      bp.Q.value = 1.1;

      const cGain = this.ctx.createGain();
      cGain.gain.setValueAtTime(0.24, now);
      cGain.gain.exponentialRampToValueAtTime(0.001, now + 0.19);

      crunch.connect(bp);
      bp.connect(cGain);
      cGain.connect(this.masterGain);
      crunch.start(now, Math.random() * 0.5, 0.2);
    }
  }

  /** Distance-attenuated lower-pitched rifle crack for enemy gunfire. */
  playEnemyShot(distance: number): void {
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;
    const attenuation = Math.max(0.05, 1 / (1 + Math.max(0, distance) * 0.08));
    const now = this.ctx.currentTime;

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.frequency.exponentialRampToValueAtTime(260, now + 0.14);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.36 * attenuation, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now, Math.random() * 0.5, 0.16);

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.085);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.32 * attenuation, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.095);
  }

  /** Impact thump + muffled burst when the player takes damage. */
  playPlayerHurt(): void {
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(135, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.14);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.45, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.16);

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(550, now);

    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.28, now);
    nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(lp);
    lp.connect(nGain);
    nGain.connect(this.masterGain);
    noise.start(now, Math.random() * 0.5, 0.13);
  }

  /** Crisp metallic dink for headshots. */
  playHeadshot(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1550, now);
    osc1.frequency.exponentialRampToValueAtTime(980, now + 0.09);

    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(2350, now);
    osc2.frequency.exponentialRampToValueAtTime(1750, now + 0.075);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.12);
    osc2.stop(now + 0.12);
  }

  /** Gentle looping ocean surf ambience modulated by a slow LFO. */
  startAmbience(): void {
    if (!this.ctx || !this.masterGain || !this.noiseBuffer || this.ambienceStarted) return;
    this.ambienceStarted = true;

    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 340;

    const surfGain = this.ctx.createGain();
    surfGain.gain.value = 0.045;

    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.14;

    const lfoDepth = this.ctx.createGain();
    lfoDepth.gain.value = 0.025;

    lfo.connect(lfoDepth);
    lfoDepth.connect(surfGain.gain);

    src.connect(filter);
    filter.connect(surfGain);
    surfGain.connect(this.masterGain);

    src.start();
    lfo.start();
  }
}
