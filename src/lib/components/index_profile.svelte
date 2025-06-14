<script lang='ts'>
  import { site } from '$lib/config/site'
  import MusicTrackDisplay from '$lib/components/MusicTrackDisplay.svelte'
  // Get current theme from document data attribute for dynamic coloring
  import { onMount } from 'svelte'
  
  let isDarkTheme = false
  
  onMount(() => {
    // Initial check
    checkTheme()
    
    // Setup observer to detect theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['data-theme'] 
    })
    
    return () => observer.disconnect()
  })
  
  function checkTheme() {
    const theme = document.documentElement.getAttribute('data-theme')
    isDarkTheme = ['dracula', 'night', 'synthwave'].includes(theme)
  }
</script>

<div
  class='h-card flex flex-col gap-4 sticky top-24 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs'>
  <a class='hidden u-url u-uid' href={site.protocol + site.domain}>{site.author.name}</a>
  <figure class='relative mx-auto group'>
    {#if site.author.avatar}
      <img
        alt={site.author.name}
        class='u-photo rounded-full shadow-xl hover:shadow-2xl transition-shadow z-10 w-24 h-24 md:w-32 md:h-32'
        src={site.author.avatar} />
    {/if}
    {#if site.author.status}
      <div
        class='absolute z-20 rounded-full w-8 h-8 md:w-10 md:h-10 bottom-0 right-0 bg-base-100 shadow-xl text-lg md:text-xl text-center py-0.5 md:py-1.5'>
        {site.author.status}
      </div>
    {/if}
  </figure>
  <div class='text-center flex flex-col gap-2'>
    <h2 class='text-2xl font-bold mt-0 mb-2 p-name'>{site.author.name}</h2>
    <p class='opacity-75 p-note'>{@html site.author.bio}</p>
    {#if site.author.metadata}
      <div class='flex gap-1 flex-wrap justify-center'>
        {#each site.author.metadata as { icon, link, rel, text }}
          {#if link}
            <a
              class='btn btn-sm btn-ghost normal-case gap-2 u-url'
              class:btn-square={!text}
              href={link}
              rel={rel ?? 'me noopener noreferrer external'}
              target='_blank'>
              {#if icon}
                <span class='{icon} !w-5 !h-5 flex items-center justify-center'>
                  <!-- Dynamic SVG icon using Simple Icons -->
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/{icon}.svg" alt="{icon}" class="w-5 h-5" class:filter={isDarkTheme} class:brightness-0={isDarkTheme} class:invert={isDarkTheme} />
                </span>
              {/if}
              {#if text}
                {text}
              {/if}
            </a>
          {:else}
            <button class='btn btn-sm btn-ghost normal-case gap-2' class:btn-square={!text}>
              {#if icon}
                <span class='{icon} !w-5 !h-5 flex items-center justify-center'>
                  <!-- Dynamic SVG icon using Simple Icons -->
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/{icon}.svg" alt="{icon}" class="w-5 h-5" class:filter={isDarkTheme} class:brightness-0={isDarkTheme} class:invert={isDarkTheme} />
                </span>
              {/if}
              {#if text}
                {text}
              {/if}
            </button>
          {/if}
        {/each}
      </div>
    {/if}
    
    <!-- Music track display section -->
    <div class="mt-2 border-t border-base-content/10 pt-2">
      <MusicTrackDisplay />
    </div>
  </div>
</div>
