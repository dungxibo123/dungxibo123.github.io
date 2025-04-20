<script lang="ts">
  import type { Publication } from '$lib/types/publication'
  import Footer from '$lib/components/footer.svelte'
  export let item: unknown
  let pub = item as unknown as Publication
  let tags = pub.tags
  let authors = pub.authors
  let category = pub.cate || "Preprint" // Default to "Preprint" if not specified
</script>

{#if typeof pub.title !== "undefined"}
<a
  id={pub.id}
  class="card mx-auto max-w-4xl bg-base-100 shadow-xl transition-all duration-300 mb-7 h-card u-url hover:shadow-2xl hover:scale-[1.02] group relative">
  {#if pub.pubUrl}href={pub.pubUrl}{/if}
  
  <!-- Publication Category & Conference Badges - Moved to top of card outside the card body -->
  <div class="absolute -top-3 right-3 flex flex-wrap gap-1 justify-end max-w-[70%]">
    <span class="badge badge-lg badge-primary text-white font-semibold shadow-md">
      {category}
    </span>
    
    {#if pub.conf}
      <span class="badge badge-lg badge-secondary text-white font-semibold shadow-md">
        {pub.conf}
      </span>
    {/if}
  </div>
  
  <div class="card-body p-4">
    <div class="flex flex-col md:flex-row items-start gap-4">
      <!-- Publication Image -->
      <div class="mb-auto aspect-video w-full max-w-full shrink-0 md:max-w-xs overflow-hidden rounded-md group-hover:shadow-md transition-all">
        <img class="rounded-md w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src={pub.img} alt={pub.description || pub.title} />
      </div>
      
      <!-- Publication Details -->
      <div class="flex-1 flex flex-col gap-3">
        <!-- Title with animation effect -->
        <h2 class="p-name text-left text-2xl mb-1 group-hover:text-primary transition-colors">
          {pub.title}
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </h2>
        
        <!-- Authors Section -->
        <div class="mb-2">
          {#if authors}
            <h3 class="text-sm text-base-content/70 mb-1">Authors</h3>
            <div class="flex flex-wrap gap-1">
              {#each authors as auth}
                {#if auth.name === "Dung Vo"}  
                  <a href={auth.url} class="no-underline">
                    <span class="btn btn-sm btn-ghost font-bold normal-case border-primary border-2 my-1 mr-1 hover:bg-primary/10 transition-colors">
                      {auth.name}
                    </span>
                  </a> 
                {:else}
                  <a class="font-normal no-underline" href={auth.url}>
                    <span class="btn btn-sm btn-ghost font-normal normal-case border-base-content/20 border-2 my-1 mr-1 hover:bg-base-content/5 transition-colors">
                      {auth.name}
                    </span>
                  </a> 
                {/if}
              {/each}
            </div>
          {/if}
        </div>
        
        <!-- Conference/Venue info if available -->
        {#if pub.conference}
          <div class="mb-2">
            <span class="text-sm font-semibold">Venue: </span>
            <span class="italic">{pub.conference}</span>
          </div>
        {/if}

        <!-- Description if available -->
        {#if pub.description}
          <p class="text-base-content/80">{pub.description}</p>
        {/if}
        
        <!-- Tags Section with improved styling -->
        {#if tags && tags.length > 0}
          <div class="mt-auto">
            <h3 class="text-sm text-base-content/70 mb-1">Keywords</h3>
            <div class="flex flex-wrap gap-1">
              {#each tags as tag}
                <span class="badge badge-outline badge-sm border-dotted hover:bg-base-content/5 transition-colors">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</a>
{/if}
