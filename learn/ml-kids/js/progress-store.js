/**
 * ML Adventure Lab - Safe Local-Only Progress Store
 * No accounts, no servers, 100% kid-safe and anonymous.
 */

const STORAGE_KEY = 'mlk_adventure_progress_v1';

const defaultState = {
  level: 'explorer', // 'explorer' (Classes 5-6) | 'builder' (7-8) | 'investigator' (9-10)
  completedMissions: [],
  stars: 0,
  lastMission: 'w01-m03',
  soundEnabled: true
};

let memoryFallback = { ...defaultState };

export const ProgressStore = {
  isAvailable() {
    try {
      const testKey = '__mlk_test__';
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  },

  get() {
    if (!this.isAvailable()) {
      return { ...memoryFallback };
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      return { ...defaultState, ...JSON.parse(raw) };
    } catch (e) {
      console.warn('[ML Kids] Could not read local storage, using default state.', e);
      return { ...defaultState };
    }
  },

  save(data) {
    const updated = { ...this.get(), ...data };
    if (!this.isAvailable()) {
      memoryFallback = updated;
      this.dispatchChange(updated);
      return updated;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('[ML Kids] Could not save progress to localStorage.', e);
    }
    this.dispatchChange(updated);
    return updated;
  },

  completeMission(missionId) {
    const current = this.get();
    if (!current.completedMissions.includes(missionId)) {
      current.completedMissions.push(missionId);
      current.stars += 1;
    }
    current.lastMission = missionId;
    return this.save(current);
  },

  isCompleted(missionId) {
    return this.get().completedMissions.includes(missionId);
  },

  setLevel(level) {
    return this.save({ level });
  },

  getLevel() {
    return this.get().level;
  },

  reset() {
    if (this.isAvailable()) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    }
    memoryFallback = { ...defaultState };
    this.dispatchChange(defaultState);
    return defaultState;
  },

  dispatchChange(state) {
    window.dispatchEvent(new CustomEvent('mlk-progress-updated', { detail: state }));
  }
};

