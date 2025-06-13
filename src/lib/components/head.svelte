<script lang='ts'>
  import { dev } from '$app/environment'
  import { browser } from '$app/environment'
  import OpenGraph from '$lib/components/head_opengraph.svelte'
  import { head } from '$lib/config/general'
  import { site } from '$lib/config/site'
  import Giscus from '@giscus/svelte'
  import { onMount } from 'svelte'
  
  export let post: undefined | Urara.Post
  export let page: undefined | Urara.Page
  
  let giscusTheme = 'light';
  
  onMount(() => {
    if (browser) {
      // Initial theme check
      const theme = document.documentElement.getAttribute('data-theme')
      giscusTheme = theme ? 
        ['dracula', 'night', 'synthwave'].includes(theme) ? 'dark_protanopia' : 'light' 
        : 'dark';
      function sendMessage<T>(message: T) {
        const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
        if (!iframe) return;
        iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
      }
      // Setup observer to detect theme changes
      const themeGiscusMapping = {
        'dark': 'dark_protanopia',
        'light': 'light',
        'dracula': 'dark_protanopia',
        'night': 'catppuccin_mocha',
        'synthwave': 'dark_protanopia',
        'retro': 'gruvbox_light'
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'data-theme') {
            const newTheme = document.documentElement.getAttribute('data-theme')
            if (newTheme) {
              sendMessage(
                {
                  setConfig: {
                    theme: themeGiscusMapping[newTheme]
                  }
                }
              )
            }
          }
        })
      })
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      })
    }
  })
</script>

<svelte:head>
  <meta content={site.author?.name} name='author' />
  <link rel="stylesheet" href="/assets/css/katex.min.css">
  {#if post}
    {#if browser}
      <Giscus 
          repo="dungxibo123/dungxibo123.github.io"
          repoId="R_kgDONaumuQ"
          category="General"
          categoryId="DIC_kwDONaumuc4Crd6w"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={giscusTheme}
          lang="en"
          loading="lazy"
      />
    {/if}
    <link href={site.protocol + site.domain + post.path} rel='canonical' />
    {#if post.type === 'article'}
      <title>{post.title} | {site.title}</title>
    {:else if post.type === 'note'}
      <title>{post.summary ?? post.path.slice(1)} | {site.title}</title>
    {/if}
    {#if post.tags}<meta content={post.tags.join(', ')} name='keywords' />{/if}
    {#if post.summary}<meta content={post.summary} name='description' />{/if}
  {:else}
    <meta content={site.description} name='description' />
    <meta content={site.keywords?.join(', ')} name='keywords' />
    {#if page}
      <title>{page.title ?? page.path.slice(1)} | {site.title}</title>
      <link href={site.protocol + site.domain + page.path} rel='canonical' />
    {:else}
      <title>{site.subtitle ? `${site.title} - ${site.subtitle}` : site.title}</title>
      <link href={site.protocol + site.domain} rel='canonical' />
    {/if}
  {/if}
  {#if head.custom}
    {#each head.custom({ dev, page, post }) as tag}
      {@html tag}
    {/each}
  {/if}
</svelte:head>

<OpenGraph {page} {post} />
