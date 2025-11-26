<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-scanlines"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-logo">
          <img src="/img/logo-tv.png" alt="La Casa de la Hormiga" class="tv-logo" />
        </div>

        <h1 class="hero-title" data-text="La Casa de la Hormiga">
          {{ $t('hero.title') }}
        </h1>

        <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>

        <p class="hero-description">{{ $t('hero.description') }}</p>

        <div class="hero-actions">
          <NuxtLink :to="localePath('/videos')" class="btn btn-primary">
            {{ $t('hero.cta') }}
          </NuxtLink>
          <a href="https://www.youtube.com/@lacasadelahormiga" target="_blank" rel="noopener" class="btn btn-secondary">
            YouTube
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">20+</span>
            <span class="stat-label">Videos</span>
          </div>
          <div class="stat">
            <span class="stat-number">2022</span>
            <span class="stat-label">Desde</span>
          </div>
          <div class="stat">
            <span class="stat-number">BCN</span>
            <span class="stat-label">Barcelona</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 6rem 0 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(59, 255, 158, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(189, 120, 255, 0.2) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(249, 100, 199, 0.1) 0%, transparent 70%);
}

.hero-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  pointer-events: none;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-logo {
  margin-bottom: 2rem;
}

.tv-logo {
  height: 150px;
  width: auto;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-blanco);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-secundario);
  font-family: monospace;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primario);
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0 3rem;
  }

  .tv-logo {
    height: 100px;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
