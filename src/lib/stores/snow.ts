import { browser } from '$app/environment'
import { writable } from 'svelte/store'

export interface SnowConfig {
  enabled: boolean
  intensity: 'heavy' | 'light' | 'medium'
  interactive: boolean
  respectMotionPreference: boolean
}

// Default snow configuration
const defaultConfig: SnowConfig = {
  enabled: true,
  intensity: 'medium',
  interactive: true,
  respectMotionPreference: true,
}

// Load saved preferences from localStorage
const getInitialConfig = (): SnowConfig => {
  if (!browser)
    return defaultConfig

  try {
    const saved = localStorage.getItem('snow-config')
    if (saved) {
      const parsed = JSON.parse(saved)
      return { ...defaultConfig, ...parsed }
    }
  }
  catch (error) {
    console.warn('Failed to load snow config from localStorage:', error)
  }

  return defaultConfig
}

// Create the snow store
export const snowConfig = writable<SnowConfig>(getInitialConfig())

// Save configuration to localStorage when it changes
if (browser) {
  snowConfig.subscribe((config) => {
    try {
      localStorage.setItem('snow-config', JSON.stringify(config))
    }
    catch (error) {
      console.warn('Failed to save snow config to localStorage:', error)
    }
  })
}

// Helper functions
export const toggleSnow = () => {
  snowConfig.update(config => ({ ...config, enabled: !config.enabled }))
}

export const setSnowIntensity = (intensity: 'heavy' | 'light' | 'medium') => {
  snowConfig.update(config => ({ ...config, intensity }))
}

export const toggleInteractive = () => {
  snowConfig.update(config => ({ ...config, interactive: !config.interactive }))
}

export const resetSnowConfig = () => {
  snowConfig.set(defaultConfig)
}
