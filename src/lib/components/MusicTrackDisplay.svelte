<script lang="ts">
  import { settings } from '$lib/stores/settings';
  import { fade } from 'svelte/transition';
  import { browser } from '$app/environment';
  
  export let showInFooter = false;
  let prevMusicEnabled = false;
  let shouldShow = false;
  
  // Update visibility state based on music settings only
  $: if (browser) {
    // Only update if the music setting has changed
    if ($settings.musicEnabled !== prevMusicEnabled) {
      prevMusicEnabled = $settings.musicEnabled;
      shouldShow = $settings.musicEnabled;
    }
  }
</script>

{#if browser && shouldShow}
  <div 
    class="music-info {showInFooter ? 'mt-4 text-center' : 'my-2'}"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 300 }}
  >
    <div class="flex items-center justify-center gap-2">
      <span class="i-heroicons-outline-music-note animate-pulse"></span>
      <span class="text-sm opacity-80">
        Now Playing: {$settings.currentTrack.title}
      </span>
      <!-- Skip button to get a new random track -->
      <button 
        class="btn btn-xs btn-ghost p-1" 
        on:click={() => settings.getRandomTrack()}
        title="Skip to another track"
      >
        <span class="i-heroicons-outline-refresh"></span>
      </button>
    </div>
  </div>
{/if} 