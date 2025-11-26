<template>
  <div class="about-page">
    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade">
      <div class="container position-relative">
        <h1>{{ $t('about.title') }}</h1>
        <p>{{ $t('about.intro') }}</p>
        <nav class="breadcrumbs">
          <ol>
            <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
            <li class="current">{{ $t('nav.about') }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/pangaro.jpg" class="img-fluid" alt="La Casa de la Hormiga" />
          </div>

          <div class="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('about.title') }}</h3>
            <p>{{ $t('about.intro') }}</p>
            <p>{{ $t('about.team') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section id="history" class="features section">
      <div class="container section-title" data-aos="fade-up">
        <span>2022 - 2025</span>
        <h2>{{ $t('about.historyTitle') }}</h2>
      </div>

      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <img src="/img/manza_1.jpg" class="img-fluid" alt="Historia" />
          </div>
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>Los inicios</h3>
            <p>{{ $t('about.history') }}</p>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="/img/pyramides_1.jpg" class="img-fluid" alt="Crecimiento" />
          </div>
          <div class="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
            <h3>El crecimiento</h3>
            <p>{{ $t('about.historyGrowth') }}</p>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out">
            <img src="/img/nadie_lo_quiere_1.jpg" class="img-fluid" alt="Hoy" />
          </div>
          <div class="col-md-7" data-aos="fade-up">
            <h3>Hoy</h3>
            <p>{{ $t('about.today') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="values" class="about section">
      <div class="container section-title" data-aos="fade-up">
        <span>Principios</span>
        <h2>{{ $t('about.valuesTitle') }}</h2>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="value-card">
              <i class="bi bi-heart"></i>
              <h3>{{ $t('about.value1Title') }}</h3>
              <p>{{ $t('about.value1Text') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="value-card">
              <i class="bi bi-briefcase"></i>
              <h3>{{ $t('about.value2Title') }}</h3>
              <p>{{ $t('about.value2Text') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="value-card">
              <i class="bi bi-globe"></i>
              <h3>{{ $t('about.value3Title') }}</h3>
              <p>{{ $t('about.value3Text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="call-to-action section">
      <div class="container">
        <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-xl-10">
            <div class="text-center">
              <h3>{{ $t('contact.description') }}</h3>
              <p>{{ $t('contact.teamText') }}</p>
              <NuxtLink :to="localePath('/contacto')" class="cta-btn">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Nosotros - La Casa de la Hormiga'
})

onMounted(() => {
  if (typeof window !== 'undefined' && (window as any).AOS) {
    (window as any).AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }
})
</script>

<style scoped>
.value-card {
  background: var(--surface-color);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s;
  height: 100%;
}

.value-card:hover {
  border-color: var(--color-violeta);
  transform: translateY(-5px);
}

.value-card i {
  font-size: 48px;
  color: var(--color-violeta);
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}

.value-card p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}
</style>
