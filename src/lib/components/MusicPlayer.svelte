<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { settings } from '$lib/stores/settings';
  
  let audio: HTMLAudioElement | undefined;
  let prevMusicEnabled = false;
  
  // Function to play audio safely with error handling
  function playAudio() {
    if (!audio) return;
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Autoplay prevented:', error);
      });
    }
  }
  
  // Function to update the audio source
  function updateAudioSource() {
    if (!audio || !browser) return;
    
    // Save current playing state
    const wasPlaying = !audio.paused;
    
    // Update the source
    audio.src = $settings.currentTrack.src_link;
    audio.load();
    
    // Resume playing if it was playing before
    if (wasPlaying && $settings.musicEnabled) {
      playAudio();
    }
  }
  
  onMount(() => {
    // Only create audio element in browser environment
    if (browser) {
      audio = new Audio($settings.currentTrack.src_link);
      audio.loop = true;
      audio.volume = 0.5;
      
      // Set up initial state
      prevMusicEnabled = $settings.musicEnabled;
      
      // Play if music is enabled by default
      if ($settings.musicEnabled) {
        playAudio();
      }
      
      // Cleanup on component destroy
      return () => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      };
    }
  });
  
  // Watch for track changes only
  $: if (browser && audio && $settings.currentTrack) {
    updateAudioSource();
  }
  
  // Subscribe to music settings changes only - isolate from particles changes
  $: if (browser && audio && ($settings.musicEnabled !== prevMusicEnabled)) {
    prevMusicEnabled = $settings.musicEnabled;
    
    if ($settings.musicEnabled) {
      playAudio();
    } else {
      audio.pause();
    }
  }
</script>

<!-- No visual component, just handles audio playback --> 