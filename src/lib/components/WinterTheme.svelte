<script lang="ts">
  import { snowConfig } from '$lib/stores/snow';

  // Winter gradient backgrounds
  const winterGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
  ];

  let currentGradient = 0;

  // Cycle through gradients automatically
  const cycleGradient = () => {
    currentGradient = (currentGradient + 1) % winterGradients.length;
  };
  
  // Auto-cycle gradients every 30 seconds
  if (typeof window !== 'undefined') {
    setInterval(() => {
      if ($snowConfig.enabled) {
        cycleGradient();
      }
    }, 30000);
  }
</script>

{#if $snowConfig.enabled}
  <div 
    class="winter-background"
    style="background: {winterGradients[currentGradient]}"
  >
    <!-- Animated winter overlay -->
    <div class="winter-overlay">
      <div class="frost-pattern"></div>
      <div class="shimmer-effect"></div>
    </div>
  </div>
{/if}

<style>
  .winter-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    transition: background 1s ease-in-out;
  }

  .winter-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .frost-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    animation: frostMove 20s ease-in-out infinite;
  }

  .shimmer-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes frostMove {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(10px, -10px) scale(1.1); }
    50% { transform: translate(-5px, 5px) scale(0.9); }
    75% { transform: translate(-10px, -5px) scale(1.05); }
  }

  @keyframes shimmer {
    0% { left: -100%; }
    50% { left: 0%; }
    100% { left: 100%; }
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .gradient-cycle-btn {
      top: 0.5rem;
      left: 0.5rem;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .frost-pattern,
    .shimmer-effect {
      animation: none;
    }
    
    .winter-background {
      transition: none;
    }
  }
</style>