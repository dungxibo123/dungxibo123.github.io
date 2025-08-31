<script lang="ts">
  import { snowConfig, toggleSnow, setSnowIntensity, toggleInteractive } from '$lib/stores/snow';
  
  let showControls = false;
  
  const intensityOptions = [
    { value: 'heavy', label: '❄❄❄ Heavy', desc: 'Heavy snowfall' },
    { value: 'light', label: '❄ Light', desc: 'Gentle snowfall' },
    { value: 'medium', label: '❄❄ Medium', desc: 'Moderate snowfall' }
  ] as const;
</script>

<!-- Snow Control Toggle Button -->
<div class="snow-controls-wrapper">
  <button
    class="btn btn-sm btn-circle btn-ghost snow-toggle"
    on:click={() => showControls = !showControls}
    title="Snow Settings"
  >
    ❄️
  </button>
  
  {#if showControls}
    <div class="snow-controls-panel">
      <div class="panel-header">
        <h3 class="text-sm font-semibold">❄️ Snow Settings</h3>
        <button 
          class="btn btn-xs btn-ghost"
          on:click={() => showControls = false}
        >
          ✕
        </button>
      </div>
      
      <div class="panel-content">
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
              <span class="label-text text-xs">Intensity</span>
            </label>
            <div class="grid grid-cols-1 gap-1">
              {#each intensityOptions as option}
                <label class="label cursor-pointer justify-start gap-2">
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
      
      <div class="panel-footer">
        <div class="text-xs text-base-content/50 text-center">
          ✨ Enjoy the winter atmosphere!
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .snow-controls-wrapper {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
  }
  
  .snow-toggle {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }
  
  .snow-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  .snow-controls-panel {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.5rem;
    width: 250px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.3s ease-out;
    overflow: hidden;
  }
  
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .panel-content {
    padding: 1rem;
    space-y: 1rem;
  }
  
  .panel-footer {
    padding: 0.5rem 1rem 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Dark theme adjustments */
  @media (prefers-color-scheme: dark) {
    .snow-controls-panel {
      background: rgba(30, 30, 30, 0.95);
      border-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
    
    .panel-header {
      border-bottom-color: rgba(255, 255, 255, 0.1);
    }
    
    .panel-footer {
      border-top-color: rgba(255, 255, 255, 0.05);
    }
  }
  
  /* Mobile adjustments */
  @media (max-width: 768px) {
    .snow-controls-wrapper {
      top: 0.5rem;
      right: 0.5rem;
    }
    
    .snow-controls-panel {
      width: 200px;
      font-size: 0.875rem;
    }
  }
  
  /* Form styling improvements */
  .form-control {
    margin-bottom: 1rem;
  }
  
  .form-control:last-child {
    margin-bottom: 0;
  }
  
  .grid {
    gap: 0.5rem;
  }
  
  .radio:checked {
    background: oklch(var(--p));
  }
  
  .toggle:checked {
    background: oklch(var(--p));
  }
</style>