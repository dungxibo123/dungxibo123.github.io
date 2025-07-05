<script context='module' lang='ts'>
  export const prerender = true
</script>

<script lang='ts'>
  import { onDestroy, onMount } from 'svelte'

  export let toc: Urara.Post.Toc[]

  let intersecting: string[] = []
  let intersectingArticle: boolean = true
  let bordered: string[] = []

  onMount(() => {
    if (window.screen.availWidth >= 1280) {
      const headingsObserver = new IntersectionObserver(
        headings =>
          headings.forEach(heading =>
            heading.isIntersecting
              ? intersecting.push(heading.target.id)
              : (intersecting = intersecting.filter(h => h !== heading.target.id)),
          ),
        { rootMargin: '-64px 0px 0px 0px' },
      )
      const articleObserver = new IntersectionObserver(article => (intersectingArticle = article[0].isIntersecting))
      Array.from(document.querySelectorAll('main h2, main h3, main h4, main h5, main h6')).forEach(element =>
        headingsObserver.observe(element),
      )
      articleObserver.observe(document.getElementsByTagName('main')[0])
    }
  })

  onDestroy(() => {
    // @ts-ignore: Cannot find name 'headingsObserver'
    if (typeof headingsObserver !== 'undefined')
      headingsObserver.disconnect()
    // @ts-ignore: Cannot find name 'articleObserver'
    if (typeof articleObserver !== 'undefined')
      articleObserver.disconnect()
  })

  $: if (intersecting.length > 0)
    bordered = intersecting
  $: if (intersectingArticle === false)
    bordered = []
  $: if (bordered) {
    toc.forEach(heading => {
      const tocLink = document.getElementById(`toc-link-${heading.slug}`)
      if (bordered.includes(heading.slug!)) {
        tocLink?.classList.add('!border-accent')
        // Smooth scroll the active TOC item into view
        tocLink?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        })
      } else {
        tocLink?.classList.remove('!border-accent')
      }
    })
  }
</script>

<aside class='sticky top-16 py-8'>
  <div class='toc-container'>
    <div class='toc-header'>
      <h3 class='toc-title'>Table of Contents</h3>
      <div class='toc-divider'></div>
    </div>
    <nav
      aria-label='TableOfContent'
      class='toc-nav'
      dir='rtl'
      id='post-toc'>
      <ul dir='ltr' id='toc-list-root' class='toc-list'>
        {#each toc as { depth, slug, title }}
          <li class='toc-item' id={`toc-item-${slug}`} data-depth={depth}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
              class="toc-link depth-{depth}"
              id={`toc-link-${slug}`}
              on:click={() =>
                // @ts-ignore Object is possibly 'null'. ts(2531)
                document.getElementById(slug).scrollIntoView({ behavior: 'smooth' })}>
              <span class='toc-bullet'></span>
              <span class='toc-text'>{title}</span>
            </span>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</aside>


<style lang="postcss">
  @import '../styles/toc.css';
</style>