import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { getRandomTrack, type MusicTrack } from '$lib/config/music';

type Settings = {
  musicEnabled: boolean;
  currentTrack: MusicTrack;
};

// Initialize with default values, loading from localStorage if available
const createSettingsStore = () => {
  const defaultSettings: Settings = {
    musicEnabled: false,
    currentTrack: getRandomTrack()
  };

  // Load settings from localStorage if in browser
  const initialSettings = browser 
    ? JSON.parse(localStorage.getItem('settings') || JSON.stringify(defaultSettings)) 
    : defaultSettings;
    
  // Always get a new random track when initializing, regardless of saved state
  if (browser) {
    initialSettings.currentTrack = getRandomTrack();
  }

  const { subscribe, set, update } = writable<Settings>(initialSettings);

  return {
    subscribe,
    toggleMusic: () => update(s => {
      const updated = { ...s, musicEnabled: !s.musicEnabled };
      if (browser) localStorage.setItem('settings', JSON.stringify(updated));
      return updated;
    }),
    setCurrentTrack: (track: MusicTrack) => update(s => {
      const updated = { ...s, currentTrack: track };
      if (browser) localStorage.setItem('settings', JSON.stringify(updated));
      return updated;
    }),
    getRandomTrack: () => update(s => {
      const updated = { ...s, currentTrack: getRandomTrack() };
      if (browser) localStorage.setItem('settings', JSON.stringify(updated));
      return updated;
    }),
    reset: () => {
      set(defaultSettings);
      if (browser) localStorage.setItem('settings', JSON.stringify(defaultSettings));
    }
  };
};

export const settings = createSettingsStore(); 