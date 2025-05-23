<script lang="ts">
  import Head from '$lib/components/head.svelte'
  import { cvData } from '$lib/config/cv'
  import { site } from '$lib/config/site'
  import { onMount } from 'svelte'

  // Function to handle CV download
  function downloadCV() {
    // This will trigger download of the CV file
    window.open(cvData.cvFile, '_blank')
  }

  // For animation
  let loaded = false
  onMount(() => {
    loaded = true
  })
</script>

<Head />

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Header Section -->
  <div class="text-center mb-12">
    <!-- Avatar -->
    <div class="mb-6">
      <img 
        src={site.author.avatar} 
        alt={site.author.name}
        class="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
      />
    </div>
    
    <h1 class="text-4xl font-bold mb-2">{cvData.name}</h1>
    <p class="text-xl opacity-75">{cvData.title}</p>
    
    <!-- Contact Info -->
    <div class="flex flex-wrap justify-center gap-4 mt-4">
      {#each cvData.contactInfo as contact}
        <div class="flex items-center gap-2">
          <span class="{contact.icon} w-5 h-5"></span>
          {#if contact.link}
            <a href={contact.link} class="hover:text-primary transition-colors">{contact.text}</a>
          {:else}
            <span>{contact.text}</span>
          {/if}
        </div>
      {/each}
    </div>
    
    <!-- Download Button -->
    <button 
      on:click={downloadCV}
      class="btn btn-primary mt-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      Download CV
    </button>
  </div>

  <!-- Professional Experience Timeline -->
  <section class="mb-16">
    <div class="divider divider-start mb-6">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        <h2 class="text-2xl font-bold">Professional Experience</h2>
      </div>
    </div>
    
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {#each cvData.experience as job, i}
        <li>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="font-mono italic">{job.period}</time>
            <div class="text-lg font-bold">{job.company}</div>
          </div>
          <div class="timeline-end mb-10">
            <div class="text-lg font-bold">{job.title}</div>
            <p class="text-base-content/70">{job.location}</p>
            <ul class="list-disc ml-5 mt-2">
              {#each job.responsibilities as responsibility}
                <li>{responsibility}</li>
              {/each}
            </ul>
          </div>
          {#if i < cvData.experience.length - 1}
            <hr/>
          {/if}
        </li>
      {/each}
    </ul>
  </section>

  <!-- Skills Section -->
  <section class="mb-16">
    <div class="divider divider-start mb-6">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
        <h2 class="text-2xl font-bold">Skills</h2>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each cvData.skills as skillCategory}
        <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all">
          <div class="card-body">
            <h3 class="card-title">{skillCategory.category}</h3>
            <div class="flex flex-wrap gap-2 mt-2">
              {#each skillCategory.items as skill}
                <div class="badge badge-primary badge-lg flex items-center gap-2 px-3 py-2">
                  <!-- Technology Icons -->
                  {#if skill === 'Python'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'JavaScript'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" alt="JavaScript" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'TypeScript'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg" alt="TypeScript" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'C++'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg" alt="C++" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Java'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openjdk.svg" alt="Java" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'PyTorch'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg" alt="PyTorch" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'TensorFlow'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg" alt="TensorFlow" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Scikit-learn'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg" alt="Scikit-learn" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Keras'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/keras.svg" alt="Keras" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Hugging Face'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg" alt="Hugging Face" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Pandas'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg" alt="Pandas" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'NumPy'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg" alt="NumPy" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'SQL'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" alt="SQL" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Matplotlib'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/plotly.svg" alt="Matplotlib" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Docker'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'Kubernetes'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" alt="Kubernetes" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'AWS'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonwebservices.svg" alt="AWS" class="w-4 h-4 filter brightness-0 invert" />
                  {:else if skill === 'GCP'}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg" alt="GCP" class="w-4 h-4 filter brightness-0 invert" />
                  {:else}
                    <!-- Generic icon for skills without specific logos -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  {/if}
                  <span>{skill}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Education Section -->
  <section class="mb-16">
    <div class="divider divider-start mb-6">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        <h2 class="text-2xl font-bold">Education</h2>
      </div>
    </div>
    
    <div class="grid grid-cols-1 gap-6">
      {#each cvData.education as edu}
        <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all">
          <div class="card-body">
            <div class="flex justify-between flex-wrap gap-2">
              <h3 class="card-title">{edu.degree}</h3>
              <div class="font-mono italic">{edu.period}</div>
            </div>
            <p class="text-lg">{edu.institution}</p>
            <p class="opacity-75">{edu.location}</p>
            {#if edu.details}
              <ul class="list-disc ml-5 mt-2">
                {#each edu.details as detail}
                  <li>{detail}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- References Section -->
  <section class="mb-16">
    <div class="divider divider-start mb-6">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <h2 class="text-2xl font-bold">References</h2>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each cvData.references as reference}
        <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all">
          <div class="card-body">
            <h3 class="card-title">{reference.name}</h3>
            <p class="font-semibold">{reference.title}</p>
            <p class="opacity-75">{reference.institution}</p>
            {#if reference.contact}
              <div class="mt-2">
                {#each Object.entries(reference.contact) as [type, value]}
                  <div class="flex items-center gap-2 mb-1">
                    <span class="i-heroicons-{type === 'email' ? 'envelope' : 'phone'} opacity-75"></span>
                    <span>{value}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<div class="divider mb-8"></div>
<footer class="p-4 text-center opacity-70">
  <p>© {new Date().getFullYear()} {cvData.name}</p>
</footer>