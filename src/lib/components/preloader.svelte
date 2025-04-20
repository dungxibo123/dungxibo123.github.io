<script>
  import { onMount } from 'svelte';
  
  export let isLoading = true;
  
  onMount(() => {
    if (window.particlesJS) {
      // Load the configuration from the static file
      window.particlesJS.load('particles-js', '/particles.json', function() {
        console.log('particles.js loaded - preloader ready');
      });
    } else {
      console.error('particles.js not loaded');
    }
    
    // Add dynamic theme-based configuration
    const observer = new MutationObserver(() => {
      updateParticlesColors();
    });
    
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['data-theme'] 
    });
    
    updateParticlesColors();
    
    return () => {
      observer.disconnect();
    };
  });
  
  function updateParticlesColors() {
    if (!window.pJSDom || !window.pJSDom.length) return;
    
    const theme = document.documentElement.getAttribute('data-theme');
    const isDarkTheme = ['dracula', 'night', 'synthwave'].includes(theme);
    
    try {
      const pJS = window.pJSDom[0].pJS;
      if (pJS && pJS.particles) {
        // Update colors based on theme
        const particleColor = isDarkTheme ? '#ffffff' : '#3D4451';
        
        for (let i = 0; i < pJS.particles.array.length; i++) {
          pJS.particles.array[i].color.value = particleColor;
          pJS.particles.array[i].color.rgb = hexToRgb(particleColor);
        }
        
        pJS.particles.line_linked.color = particleColor;
        pJS.particles.line_linked.color_rgb_line = hexToRgb(particleColor);
      }
    } catch (e) {
      console.error('Error updating particles colors', e);
    }
  }
  
  function hexToRgb(hex) {
    // Remove the '#' if present
    hex = hex.replace('#', '');
    
    // Parse the hex values to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
  }
</script>

{#if isLoading}
<div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100">
  <!-- Particles container -->
  <div id="particles-js" class="absolute inset-0 z-0"></div>
  
  <!-- Loading content -->
  <div class="z-10 text-center">
    <div class="mb-4 text-4xl font-bold text-primary">Vo Tien Dung</div>
    <div class="mb-8 text-xl text-base-content/70">PhD Student & Researcher</div>
    <div class="animate-pulse">
      <div class="loading-spinner">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>
    </div>
  </div>
</div>
{/if}

<style>
  /* Loading spinner animation */
  .loading-spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  
  .loading-bar {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: currentColor;
    animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  
  .loading-bar:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  
  .loading-bar:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  
  .loading-bar:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  
  @keyframes loading {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
  
  /* Make sure the particles container is full screen */
  #particles-js {
    width: 100%;
    height: 100%;
  }
</style> 