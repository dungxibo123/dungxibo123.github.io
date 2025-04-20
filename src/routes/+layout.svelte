<script lang='ts'>
  import { browser, dev } from '$app/environment'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import Transition from '$lib/components/transition.svelte'
  import Preloader from '$lib/components/preloader.svelte'
  import { posts, tags } from '$lib/stores/posts'
  import { genTags } from '$lib/utils/posts'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { registerSW } from 'virtual:pwa-register'
  import 'uno.css'

  import type { LayoutData } from './$types'

  import '../app.pcss'

  export let data: LayoutData

  let { path, res } = data
  
  // Preloading state
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
        // First time visit - show loader for 3 seconds
        setTimeout(() => {
          isLoading = false
          localStorage.setItem('hasVisited', 'true')
        }, 3000)
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

<Preloader {isLoading} />

{#if !isLoading || hasVisited}
  <div in:fade={{ duration: 800, delay: 300 }}>
    <Header {path} />

    <Transition {path}>
      <slot />
    </Transition>
  </div>
{/if}
