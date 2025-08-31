<script lang="ts">
  import { theme } from '$lib/config/general';
  import { snowConfig, toggleSnow, setSnowIntensity, toggleInteractive } from '$lib/stores/snow';
  
  export let currentTheme: string;
  export let pin: boolean;
  
  let showSnowControls = false;
  
  const intensityOptions = [
    { value: 'heavy', label: '❄❄❄ Heavy', desc: 'Heavy snowfall' },
    { value: 'light', label: '❄ Light', desc: 'Gentle snowfall' },
    { value: 'medium', label: '❄❄ Medium', desc: 'Moderate snowfall' }
  ] as const;

  const handleThemeChange = (name: string) => {
    currentTheme = name;
    localStorage.setItem('theme', name);
    
    // Dispatch event for parent component
    const event = new CustomEvent('themeChange', { detail: { theme: name } });
    document.dispatchEvent(event);
  };
</script>

<!-- Theme Dropdown -->
<div class="dropdown dropdown-end" id="change-theme">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div class="btn btn-square btn-ghost" tabindex="0">
    <span class="i-heroicons-outline-color-swatch" />
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul
    class="flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]"
    class:hidden={!pin}
    tabindex="0"
  >
    {#each theme as { name, text }}
      <button
        class="btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all"
        class:border-2={currentTheme === name}
        class:border-primary={currentTheme === name}
        data-theme={name}
        on:click={() => handleThemeChange(name)}
      >
        <p class="flex-1 text-left text-base-content group-hover:text-primary-content transition-color">
          {text ?? name}
        </p>
        <div class="grid grid-cols-4 gap-0.5 m-auto">
          {#each ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'] as bg}
            <div class={`${bg} w-1 h-4 rounded-btn`} />
          {/each}
        </div>
      </button>
    {/each}
  </ul>
</div>

<!-- Snow Controls Dropdown -->
<div class="dropdown dropdown-end" id="snow-controls">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div 
    class="btn btn-square btn-ghost" 
    tabindex="0"
    title="Snow Settings"
  >
    ❄️
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    class="dropdown-content bg-base-100 rounded-box w-64 shadow-2xl border border-base-300"
    class:hidden={!pin}
    tabindex="0"
  >
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-sm font-semibold">❄️ Snow Settings</h3>
      </div>
      
      <div class="space-y-3">
        <!-- Enable/Disable Snow -->
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text text-xs">Enable Snow</span>
            <input 
              type="checkbox" 
              class="toggle toggle-sm toggle-primary"
              checked={$snowConfig.enabled}
              on:change={toggleSnow}
            />
          </label>
        </div>
        
        {#if $snowConfig.enabled}
          <!-- Snow Intensity -->
          <div class="form-control">
            <label class="label">
              <span class="label-text text-xs font-medium">Intensity</span>
            </label>
            <div class="space-y-2">
              {#each intensityOptions as option}
                <label class="label cursor-pointer justify-start gap-2 py-1">
                  <input 
                    type="radio" 
                    name="intensity" 
                    class="radio radio-xs radio-primary"
                    value={option.value}
                    checked={$snowConfig.intensity === option.value}
                    on:change={() => setSnowIntensity(option.value)}
                  />
                  <div class="text-xs">
                    <div class="font-medium">{option.label}</div>
                    <div class="text-base-content/60">{option.desc}</div>
                  </div>
                </label>
              {/each}
            </div>
          </div>
          
          <!-- Interactive Mode -->
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text text-xs">Mouse Interaction</span>
              <input 
                type="checkbox" 
                class="toggle toggle-xs toggle-secondary"
                checked={$snowConfig.interactive}
                on:change={toggleInteractive}
              />
            </label>
            <div class="text-xs text-base-content/60 mt-1">
              Snow follows your mouse movement
            </div>
          </div>
        {/if}
      </div>
      
      <div class="mt-4 pt-3 border-t border-base-300">
        <div class="text-xs text-base-content/50 text-center">
          ✨ Enjoy the winter atmosphere!
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .form-control {
    margin-bottom: 0;
  }
  
  .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
  
  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }
  
  .dropdown:focus .dropdown-content,
  .dropdown:focus-within .dropdown-content,
  .dropdown.dropdown-open .dropdown-content {
    display: block;
  }
  
  /* Enhanced dropdown styling */
  .dropdown-content {
    z-index: 1000;
    margin-top: 0.5rem;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.95);
  }
  
  /* Dark theme adjustments */
  @media (prefers-color-scheme: dark) {
    .dropdown-content {
      background: rgba(30, 30, 30, 0.95);
    }
  }
  
  /* Mobile adjustments */
  @media (max-width: 768px) {
    .dropdown-content {
      width: 250px;
      font-size: 0.875rem;
    }
  }
</style>