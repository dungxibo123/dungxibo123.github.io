<script lang="ts">
  import { publications as allProjects } from '$lib/config/publication'
  import Head from '$lib/components/head.svelte'
  import PublicationComponent from '$lib/components/extra/publication.svelte'

  // Group publications by category
  let categories = {};
  
  allProjects.forEach(pub => {
    const category = pub.cate || 'Preprint';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(pub);
  });
  
  // Get sorted category names
  let categoryNames = Object.keys(categories).sort((a, b) => {
    // Custom ordering: Conference > Workshop > Preprint > Others
    const order = { 'Conference': 0, 'Workshop': 1, 'Preprint': 2 };
    return (order[a] ?? 99) - (order[b] ?? 99);
  });
</script>

<Head />

<div class="container mx-auto px-4 py-8">
  {#each categoryNames as category}
    <section class="mb-12">
      <div class="divider divider-start mb-6">
        <h2 class="text-2xl font-bold">{category}</h2>
      </div>
      
      {#each categories[category] as item}
        <PublicationComponent {item} />
      {/each}
    </section>
  {/each}
</div>

<div class="divider mb-8"></div>
<footer class="p-4 text-center opacity-70">
  <p>© {new Date().getFullYear()} Vo Tien Dung</p>
</footer>
