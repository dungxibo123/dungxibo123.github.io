<script lang='ts'>
  import { browser, dev } from '$app/environment'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import Transition from '$lib/components/transition.svelte'
  import MusicPlayer from '$lib/components/MusicPlayer.svelte'
  import SnowBackground from '$lib/components/SnowBackground.svelte'
  import WinterTheme from '$lib/components/WinterTheme.svelte'
  import { posts, tags } from '$lib/stores/posts'
  import { settings } from '$lib/stores/settings'
  import { snowConfig } from '$lib/stores/snow'
  import { genTags } from '$lib/utils/posts'
  import { onMount } from 'svelte'
  import { registerSW } from 'virtual:pwa-register'
  import 'uno.css'

  import type { LayoutData } from './$types'

  import '../app.pcss'

  export let data: LayoutData

  let { path, res } = data
  
  // Preloading variables
  let isLoading = true
  let hasVisited = false

  $: if (data)
    path = data.path

  posts.set(res)
  tags.set(genTags(res))
  onMount(() => {
    // Check if first time visit
    if (browser) {
      hasVisited = localStorage.getItem('hasVisited') === 'true'
      
      if (!hasVisited) {
        // First time visit - show loader for 2 seconds
        setTimeout(() => {
          isLoading = false
          localStorage.setItem('hasVisited', 'true')
        }, 2000)
      } else {
        // Already visited - skip loader
        isLoading = false
      }
    }
    
    !dev
      && browser
      && registerSW({
        immediate: true,
        onRegistered: r => r && setInterval(async () => await r.update(), 198964),
        onRegisterError: error => console.error(error),
      })
  })
</script>

<Head />

{#if isLoading && !hasVisited}
  <div class="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
    <div class="animate-spin rounded-full h-32 w-32 border-b-4 border-primary"></div>
  </div>
{:else}
  <!-- Snow Background Effect -->
  {#if browser}
    <!-- Winter Theme Background -->
    <WinterTheme />
    
    <SnowBackground 
      intensity={$snowConfig.intensity}
      enabled={$snowConfig.enabled}
      interactive={$snowConfig.interactive}
    />
    
    <!-- Background music component -->
    <MusicPlayer />
  {/if}
  
  <Header {path} />

  <Transition {path}>
    <slot />
  </Transition>
{/if}
