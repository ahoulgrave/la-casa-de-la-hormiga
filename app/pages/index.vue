<template>
  <div class="index-page">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <div class="container">
        <div class="row gy-4 d-flex justify-content-between">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <h2>{{ $t('hero.title') }} <span>Live Sessions</span></h2>
            <p>{{ $t('hero.description') }}</p>

            <div class="d-flex gap-3 mb-4" data-aos="fade-up" data-aos-delay="200">
              <NuxtLink :to="localePath('/videos')" class="btn-getstarted">
                {{ $t('hero.cta') }}
              </NuxtLink>
              <a href="https://www.youtube.com/@lacasadelahormiga" target="_blank" rel="noopener" class="btn-getstarted btn-secondary">
                <i class="bi bi-youtube me-2"></i>YouTube
              </a>
            </div>

            <div class="row gy-4" data-aos="fade-up" data-aos-delay="300">
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span>20+</span>
                  <p>Videos</p>
                </div>
              </div>
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span>2022</span>
                  <p>Desde</p>
                </div>
              </div>
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span><i class="bi bi-geo-alt-fill"></i></span>
                  <p>Barcelona</p>
                </div>
              </div>
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span><i class="bi bi-heart-fill"></i></span>
                  <p>Live Music</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="/img/logo-tv.png" class="img-fluid mb-3 mb-lg-0" alt="La Casa de la Hormiga" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/nadie_lo_quiere_1.jpg" class="img-fluid" alt="Gil de Gils Live Session" />
            <span class="pulsating-play-btn" @click="openVideoModal(gilDeGilsVideo)"></span>
          </div>

          <div class="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('home.whatWeDo') }}</h3>
            <p>{{ $t('home.whatWeDoText') }}</p>
            <ul>
              <li>
                <i class="bi bi-camera-video"></i>
                <div>
                  <h5>{{ $t('about.value1Title') }}</h5>
                  <p>{{ $t('about.value1Text') }}</p>
                </div>
              </li>
              <li>
                <i class="bi bi-music-note-beamed"></i>
                <div>
                  <h5>{{ $t('about.value2Title') }}</h5>
                  <p>{{ $t('about.value2Text') }}</p>
                </div>
              </li>
              <li>
                <i class="bi bi-people"></i>
                <div>
                  <h5>{{ $t('about.value3Title') }}</h5>
                  <p>{{ $t('about.value3Text') }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services/Videos Section -->
    <section id="services" class="services section">
      <div class="container section-title" data-aos="fade-up">
        <span>Live Sessions</span>
        <h2>{{ $t('home.featured') }}</h2>
        <p>{{ $t('home.featuredDescription') }}</p>
      </div>

      <div class="container">
        <div class="row gy-4 featured-videos-row">
          <div v-for="(video, index) in featuredVideos" :key="video.id" class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" :data-aos-delay="100 * (index + 1)">
            <div class="card video-card h-100" @click="openVideoModal(video)">
              <div class="card-img">
                <img :src="video.thumbnail" :alt="video.title" class="img-fluid" />
                <span class="play-btn">
                  <i class="bi bi-play-circle-fill"></i>
                </span>
              </div>
              <p class="card-date">{{ video.date }}</p>
              <h3>{{ video.title }}</h3>
              <p>{{ video.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-5" data-aos="fade-up">
          <NuxtLink :to="localePath('/videos')" class="btn-getstarted">
            {{ $t('home.viewAll') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call To Action Section -->
    <section id="call-to-action" class="call-to-action section">
      <div class="container">
        <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-xl-10">
            <div class="text-center">
              <h3>{{ $t('contact.description') }}</h3>
              <p>{{ $t('contact.artistsText') }}</p>
              <NuxtLink :to="localePath('/contacto')" class="cta-btn">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features section">
      <div class="container section-title" data-aos="fade-up">
        <span>{{ $t('home.mission') }}</span>
        <h2>{{ $t('home.mission') }}</h2>
        <p>{{ $t('home.missionText') }}</p>
      </div>

      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <img src="/img/lvz_silenciosa.jpg" class="img-fluid" alt="Galería Interior Live Session" />
          </div>
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('about.historyTitle') }}</h3>
            <p class="fst-italic">{{ $t('about.history') }}</p>
            <ul>
              <li><i class="bi bi-check"></i><span>{{ $t('about.historyGrowth') }}</span></li>
              <li><i class="bi bi-check"></i><span>{{ $t('about.today') }}</span></li>
            </ul>
            <NuxtLink :to="localePath('/nosotros')" class="btn-getstarted mt-3">
              {{ $t('nav.about') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <div
      class="video-modal-overlay"
      :class="{ active: selectedVideo }"
      @click.self="closeVideoModal"
    >
      <div class="video-modal-card" v-if="selectedVideo">
        <button class="close-btn" @click="closeVideoModal">
          <i class="bi bi-x-lg"></i>
        </button>

        <div class="video-container">
          <iframe
            v-if="selectedVideo"
            :src="getEmbedUrl(selectedVideo.youtubeUrl)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video-info">
          <div class="video-header">
            <h2>{{ selectedVideo.title }}</h2>
            <span class="video-date">
              <i class="bi bi-calendar3"></i>
              {{ selectedVideo.date }}
            </span>
          </div>
          <p class="video-description">{{ selectedVideo.description }}</p>
          <div class="video-actions">
            <a :href="selectedVideo.youtubeUrl" target="_blank" rel="noopener" class="btn-watch-youtube">
              <i class="bi bi-youtube"></i>
              Ver en YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Video {
  id: string
  title: string
  date: string
  description: string
  thumbnail: string
  youtubeUrl: string
}

const selectedVideo = ref<Video | null>(null)

const gilDeGilsVideo = computed(() => ({
  id: 'gilDeGils',
  title: t('videoData.gilDeGils.title'),
  date: t('videoData.gilDeGils.date'),
  description: t('videoData.gilDeGils.description'),
  thumbnail: '/img/nadie_lo_quiere_1.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=EK5vv1PgkfU'
}))

const featuredVideos = computed(() => [
  {
    id: 'pyramides',
    title: t('videoData.pyramides.title'),
    date: t('videoData.pyramides.date'),
    description: t('videoData.pyramides.description'),
    thumbnail: '/img/pyramides_1.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=qNz-JDd6_Eo'
  },
  {
    id: 'manza',
    title: t('videoData.manza.title'),
    date: t('videoData.manza.date'),
    description: t('videoData.manza.description'),
    thumbnail: '/img/manza_1.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=C1D30TS0hmY'
  },
  {
    id: 'sergioPangaro',
    title: t('videoData.sergioPangaro.title'),
    date: t('videoData.sergioPangaro.date'),
    description: t('videoData.sergioPangaro.description'),
    thumbnail: '/img/pangaro.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=3D-9XwMOGnY'
  }
])

function openVideoModal(video: Video) {
  selectedVideo.value = video
  document.body.style.overflow = 'hidden'
}

function closeVideoModal() {
  selectedVideo.value = null
  document.body.style.overflow = ''
}

function getEmbedUrl(youtubeUrl: string): string {
  const videoId = youtubeUrl.match(/(?:v=|\/)([\w-]{11})(?:\?|&|$)/)?.[1]
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }
  return ''
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Initialize AOS
    if ((window as any).AOS) {
      (window as any).AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    }

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && selectedVideo.value) {
        closeVideoModal()
      }
    })
  }
})
</script>

<style scoped>
/* Featured videos equal height */
.featured-videos-row {
  display: flex;
  flex-wrap: wrap;
}

.video-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.video-card p:last-child {
  flex-grow: 1;
}

.video-card.h-100 {
  height: 100%;
}

.video-card .card-img {
  position: relative;
  overflow: hidden;
}

.video-card .play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 60px;
  opacity: 0.8;
  transition: all 0.3s ease;
  text-decoration: none;
  z-index: 10;
}

.video-card:hover .play-btn {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
  color: var(--color-violeta);
}

.video-card .card-img::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.video-card:hover .card-img::after {
  background: rgba(0, 0, 0, 0.5);
}

/* Video Modal Styles */
.video-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.video-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.video-modal-card {
  background: var(--surface-color, #1a1a1a);
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: var(--color-violeta);
  transform: scale(1.1);
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  padding: 25px;
}

.video-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.video-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.video-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-violeta);
  font-size: 14px;
  font-weight: 500;
}

.video-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.video-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-watch-youtube {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #FF0000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s;
  text-decoration: none;
}

.btn-watch-youtube:hover {
  background: #cc0000;
  color: #fff;
  transform: translateY(-2px);
}

.btn-watch-youtube i {
  font-size: 18px;
}

.btn-getstarted {
  color: #000;
  background: var(--color-violeta);
  font-size: 14px;
  padding: 10px 25px;
  border-radius: 4px;
  transition: 0.3s;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
}

.btn-getstarted:hover {
  background: var(--color-verde);
  color: #000;
}

.btn-getstarted.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-verde);
  color: var(--color-verde);
}

.btn-getstarted.btn-secondary:hover {
  background: var(--color-verde);
  color: #000;
}

.pulsating-play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(var(--color-violeta) 50%, rgba(189, 120, 255, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
  cursor: pointer;
}

.pulsating-play-btn::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  animation: pulsate-btn 2s infinite;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(189, 120, 255, 0.7);
  top: -15%;
  left: -15%;
}

.pulsating-play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .video-modal-card {
    max-height: 95vh;
  }

  .video-header {
    flex-direction: column;
  }

  .video-header h2 {
    font-size: 20px;
  }

  .video-info {
    padding: 20px;
  }
}
</style>
