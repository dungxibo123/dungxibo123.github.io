<script lang='ts'>
  import { site } from '$lib/config/site'
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
                  <!-- Fix: Use simpler approach with direct SVG icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    {#if icon === 'github'}
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    {:else if icon === 'x'}
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    {:else if icon === 'facebook'}
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    {:else}
                      <text x="12" y="12" font-size="10" text-anchor="middle" dominant-baseline="middle">{icon}</text>
                    {/if}
                  </svg>
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
                  <!-- Fix: Use simpler approach with direct SVG icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    {#if icon === 'github'}
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    {:else if icon === 'x'}
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    {:else if icon === 'facebook'}
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    {:else}
                      <text x="12" y="12" font-size="10" text-anchor="middle" dominant-baseline="middle">{icon}</text>
                    {/if}
                  </svg>
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
  </div>
</div>
