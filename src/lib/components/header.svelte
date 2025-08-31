<script lang='ts'>
  import { browser, dev } from '$app/environment'
  import Nav from '$lib/components/header_nav.svelte'
  import Search from '$lib/components/header_search.svelte'
  import HeaderControls from '$lib/components/HeaderControls.svelte'
  import { header as headerConfig, theme } from '$lib/config/general'
  import { site } from '$lib/config/site'
  import { title as storedTitle } from '$lib/stores/title'
  import { settings } from '$lib/stores/settings'
  import { hslToHex } from '$lib/utils/color'
  import { fly } from 'svelte/transition'

  export let path: string
  let title: string
  let currentTheme: string
  let currentThemeColor: string
  let search: boolean = false
  let pin: boolean = true
  let percent: number
  let [scrollY, lastY] = [0, 0]

  storedTitle.subscribe(storedTitle => (title = storedTitle as string))

  $: if (browser && currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    currentThemeColor = hslToHex(
      ...(getComputedStyle(document.documentElement)
        .getPropertyValue('--b1')
        .slice(dev ? 1 : 0)
        .replaceAll('%', '')
        .split(' ')
        .map(Number) as [number, number, number]),
    )
  }

  $: if (scrollY) {
    pin = !!(lastY - scrollY > 0 || scrollY === 0)
    lastY = scrollY
    if (browser) {
      percent
        = Math.round((scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 10000) / 100
    }
  }

  if (browser) {
    currentTheme
      = localStorage.getItem('theme')
      ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? theme?.[1].name : theme[0].name ?? theme[0].name)
    
    // Listen for theme change events from HeaderControls
    document.addEventListener('themeChange', (event) => {
      currentTheme = event.detail.theme;
    });
  }
</script>

<svelte:head>
  <meta content={currentThemeColor} name='theme-color' />
</svelte:head>

<svelte:window bind:scrollY />

<header
  class="fixed z-50 w-full transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[4.125rem]{scrollY
    > 32 && 'backdrop-blur !border-base-content/10 bg-base-100/30 md:bg-base-200/30'}"
  class:-translate-y-32={!pin && scrollY > 0}
  id='header'>
  {#if !search}
    <div class='navbar' in:fly={{ delay: 300, duration: 300, x: -50 }} out:fly={{ duration: 300, x: -50 }}>
      <div class='navbar-start'>
        {#if headerConfig.nav}
          <Nav nav={headerConfig.nav} {path} {pin} {scrollY} {title} />
        {/if}
        <a class='btn btn-ghost normal-case text-lg' href='/'><h1 class="animate-typing overflow-hidden whitespace-nowrap">{site.title}</h1></a>
      </div>
      <div class='navbar-end'>
        <button 
          aria-label={$settings.musicEnabled ? 'turn off music' : 'turn on music'} 
          class='btn btn-square btn-ghost' 
          on:click={() => settings.toggleMusic()} 
          tabindex='0'>
          <span class={$settings.musicEnabled ? 'i-heroicons-outline-volume-up' : 'i-heroicons-outline-volume-off'} />
        </button>
        
        {#if headerConfig.search}
          <button aria-label='search' class='btn btn-square btn-ghost' on:click={() => (search = !search)} tabindex='0'>
            <span class='i-heroicons-outline-search' />
          </button>
        {/if}
        
        <!-- Integrated Theme & Snow Controls -->
        <HeaderControls {currentTheme} {pin} />
      </div>
    </div>
  {:else}
    <div class='navbar' in:fly={{ delay: 300, duration: 300, x: 50 }} out:fly={{ duration: 300, x: 50 }}>
      <Search />
      <button class='btn btn-square btn-ghost' on:click={() => (search = !search)} tabindex='0'>
        <span class='i-heroicons-outline-x' />
      </button>
    </div>
  {/if}
</header>

<button
  aria-label='scroll to top'
  class="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out{percent
  > 95
    ? 'btn-accent shadow-lg'
    : 'btn-ghost bg-base-100/30 md:bg-base-200/30'}"
  class:opacity-100={scrollY}
  class:translate-y-24={!pin || scrollY === 0}
  id='totop'
  on:click={() => window.scrollTo(0, 0)}>
  <!-- https://daisyui.com/blog/how-to-update-daisyui-4/#3-all--focus-colors-are-removed -->
  <div
    class='radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-[color-mix(in_oklab,oklch(var(--a)),black_7%)] col-start-1 row-start-1'
    style={`--size:4rem; --thickness: 0.25rem; --value:${percent};`} />
  <div
    class='border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out'
    class:border-transparent={percent > 95}>
    <span class='i-heroicons-solid-chevron-up !w-6 !h-6' />
  </div>
</button>
