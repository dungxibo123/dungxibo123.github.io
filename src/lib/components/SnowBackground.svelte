<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Snow configuration
  export let intensity: 'light' | 'medium' | 'heavy' = 'medium';
  export let enabled = true;
  export let interactive = true;

  let snowContainer: HTMLElement;
  let snowflakes: Array<{
    id: number;
    size: number;
    speed: number;
    x: number;
    y: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
  }> = [];

  // Snow intensity configurations
  const intensityConfig = {
    light: { count: 50, maxSize: 4, speedRange: [1, 3] },
    medium: { count: 100, maxSize: 6, speedRange: [1, 4] },
    heavy: { count: 150, maxSize: 8, speedRange: [2, 5] }
  };

  let animationId: number;
  let mouseX = 0;
  let mouseY = 0;

  onMount(() => {
    if (!browser || !enabled) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !localStorage.getItem('snow-force-enable')) {
      return;
    }

    initializeSnowflakes();
    startAnimation();
    
    if (interactive) {
      setupMouseInteraction();
    }

    // Cleanup on component destroy
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  });

  const initializeSnowflakes = () => {
    const config = intensityConfig[intensity];
    snowflakes = [];

    for (let i = 0; i < config.count; i++) {
      snowflakes.push({
        id: i,
        size: Math.random() * config.maxSize + 1,
        speed: Math.random() * (config.speedRange[1] - config.speedRange[0]) + config.speedRange[0],
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        opacity: Math.random() * 0.8 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }
  };

  const updateSnowflakes = () => {
    if (!browser) return;

    snowflakes = snowflakes.map(flake => {
      let newY = flake.y + flake.speed;
      let newX = flake.x;
      let newRotation = flake.rotation + flake.rotationSpeed;

      // Interactive wind effect based on mouse position
      if (interactive) {
        const windForce = (mouseX - window.innerWidth / 2) * 0.001;
        newX += windForce * flake.size;
      }

      // Add subtle horizontal drift
      newX += Math.sin(Date.now() * 0.001 + flake.id) * 0.5;

      // Reset snowflake when it goes off screen
      if (newY > window.innerHeight + 10) {
        newY = -10;
        newX = Math.random() * window.innerWidth;
      }

      if (newX < -10) {
        newX = window.innerWidth + 10;
      } else if (newX > window.innerWidth + 10) {
        newX = -10;
      }

      return {
        ...flake,
        x: newX,
        y: newY,
        rotation: newRotation
      };
    });
  };

  const startAnimation = () => {
    const animate = () => {
      updateSnowflakes();
      animationId = requestAnimationFrame(animate);
    };
    animate();
  };

  const setupMouseInteraction = () => {
    if (!browser) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  };

  // Reactive updates
  $: if (browser && enabled) {
    initializeSnowflakes();
  }
</script>

{#if enabled}
  <div class="snow-container" bind:this={snowContainer}>
    {#each snowflakes as flake (flake.id)}
      <div
        class="snowflake"
        style="
          left: {flake.x}px;
          top: {flake.y}px;
          width: {flake.size}px;
          height: {flake.size}px;
          opacity: {flake.opacity};
          transform: rotate({flake.rotation}deg);
        "
      >
        ❄
      </div>
    {/each}
  </div>
{/if}

<style>
  .snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }

  .snowflake {
    position: absolute;
    color: rgba(255, 255, 255, 0.8);
    user-select: none;
    pointer-events: none;
    font-size: 1em;
    animation: gentle-sway 3s ease-in-out infinite alternate;
  }

  @keyframes gentle-sway {
    0% {
      transform: translateX(0px) rotate(0deg);
    }
    100% {
      transform: translateX(10px) rotate(5deg);
    }
  }

  /* Different snowflake styles for variety */
  .snowflake:nth-child(2n) {
    animation-duration: 4s;
  }

  .snowflake:nth-child(3n) {
    animation-duration: 2.5s;
  }

  .snowflake:nth-child(4n) {
    color: rgba(173, 216, 230, 0.7);
  }

  .snowflake:nth-child(5n) {
    color: rgba(240, 248, 255, 0.9);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .snow-container {
      z-index: 0;
    }
    
    .snowflake {
      font-size: 0.8em;
    }
  }

  /* Performance optimization for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .snowflake {
      animation: none;
    }
  }

  /* Dark theme adjustments */
  @media (prefers-color-scheme: dark) {
    .snowflake {
      color: rgba(255, 255, 255, 0.9);
    }
    
    .snowflake:nth-child(4n) {
      color: rgba(173, 216, 230, 0.8);
    }
  }
</style>