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
            <img src="/img/videos/pangaro.jpg" class="img-fluid" alt="La Casa de la Hormiga" />
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
            <img src="/img/videos/manza_1.jpg" class="img-fluid" alt="Historia" />
          </div>
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('history.beginnings') }}</h3>
            <p>{{ $t('about.history') }}</p>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="/img/videos/pyramides_1.jpg" class="img-fluid" alt="Crecimiento" />
          </div>
          <div class="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
            <h3>{{ $t('history.growth') }}</h3>
            <p>{{ $t('about.historyGrowth') }}</p>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out">
            <img src="/img/videos/nadie_lo_quiere_1.jpg" class="img-fluid" alt="Hoy" />
          </div>
          <div class="col-md-7" data-aos="fade-up">
            <h3>{{ $t('about.todayTitle') }}</h3>
            <p>{{ $t('about.today') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="values" class="about section">
      <div class="container section-title" data-aos="fade-up">
        <span>{{ $t('history.principles') }}</span>
        <h2>{{ $t('about.valuesTitle') }}</h2>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="value-card">
              <FaIcon icon="heart" />
              <h3>{{ $t('about.value1Title') }}</h3>
              <p>{{ $t('about.value1Text') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="value-card">
              <FaIcon icon="briefcase" />
              <h3>{{ $t('about.value2Title') }}</h3>
              <p>{{ $t('about.value2Text') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="value-card">
              <FaIcon icon="globe" />
              <h3>{{ $t('about.value3Title') }}</h3>
              <p>{{ $t('about.value3Text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section - Only shown when there are team members -->
    <section v-if="teamMembers.length > 0" id="team" class="team section">
      <div class="container section-title" data-aos="fade-up">
        <span>{{ $t('about.teamSectionTitle') }}</span>
        <h2>{{ $t('about.teamSectionTitle') }}</h2>
        <p>{{ $t('about.teamSectionSubtitle') }}</p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div v-for="(member, index) in teamMembers" :key="member.id" class="col-lg-4 col-md-6" data-aos="fade-up" :data-aos-delay="100 * ((index % 3) + 1)">
            <div class="team-card">
              <div class="team-img">
                <img :src="member.photo" :alt="member.name" />
              </div>
              <div class="team-info">
                <h3>{{ member.name }}</h3>
                <span class="role">{{ member.role }}</span>
                <p>{{ member.bio }}</p>
                <div v-if="member.instagram" class="team-social">
                  <a :href="`https://instagram.com/${member.instagram}`" target="_blank" rel="noopener">
                    <FaIcon :icon="['fab', 'instagram']" />
                  </a>
                </div>
              </div>
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
const { t } = useI18n()

useHead({
  title: 'El Proyecto - La Casa de la Hormiga'
})

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  instagram?: string
}

// Team data - add real team members here
// See SECCION_EQUIPO.md for instructions
const teamMembers: TeamMember[] = [
  // Example:
  // {
  //   id: '1',
  //   name: 'Juan Pérez',
  //   role: 'Sonido',
  //   bio: 'Ingeniero de sonido desde 2015.',
  //   photo: '/img/team/juan.jpg',
  //   instagram: 'juanperez_sound'
  // },
]

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

.value-card i,
.value-card svg {
  font-size: 48px;
  width: 48px;
  height: 48px;
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

/* Team Cards */
.team-card {
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  height: 100%;
}

.team-card:hover {
  border-color: var(--color-violeta);
  transform: translateY(-5px);
}

.team-img {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}

.team-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.team-card:hover .team-img img {
  transform: scale(1.05);
}

.team-info {
  padding: 20px;
  text-align: center;
}

.team-info h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
}

.team-info .role {
  display: block;
  font-size: 14px;
  color: var(--color-violeta);
  font-weight: 500;
  margin-bottom: 12px;
}

.team-info p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.team-social a {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
}

.team-social a:hover {
  background: var(--color-violeta);
  color: #000;
}

.team-social svg {
  width: 16px;
  height: 16px;
}
</style>
