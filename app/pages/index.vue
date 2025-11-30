<template>
  <div class="index-page">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <div class="container">
        <div class="row gy-4 d-flex justify-content-between">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <h2>{{ t('heroTitle') }}<br><span>{{ t('heroSubtitle') }}</span></h2>
            <p>{{ t('heroDescription') }}</p>

            <div class="d-flex gap-3 mb-4" data-aos="fade-up" data-aos-delay="200">
              <NuxtLink :to="localePath('/videos')" class="btn-getstarted">
                {{ t('heroCta') }}
              </NuxtLink>
              <a :href="socialLinks.youtube" target="_blank" rel="noopener" class="btn-getstarted btn-secondary">
                <FaIcon :icon="['fab', 'youtube']" class="me-2" />YouTube
              </a>
            </div>

            <div class="row gy-4" data-aos="fade-up" data-aos-delay="300">
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span>20+</span>
                  <p>{{ t('statsVideos') }}</p>
                </div>
              </div>
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span>2022</span>
                  <p>{{ t('statsSince') }}</p>
                </div>
              </div>
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span><FaIcon icon="location-dot" /></span>
                  <p>{{ t('statsBarcelona') }}</p>
                </div>
              </div>
              <div class="col-lg-3 col-6">
                <div class="stats-item text-center w-100 h-100">
                  <span><FaIcon icon="heart" /></span>
                  <p>{{ t('statsLiveMusic') }}</p>
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
            <img src="/img/videos/nadie_lo_quiere_1.jpg" class="img-fluid" alt="La Casa de la Hormiga Live Session" />
          </div>

          <div class="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ t('whatWeDo') }}</h3>
            <p>{{ t('whatWeDoText') }}</p>
            <ul>
              <li>
                <FaIcon icon="video" />
                <div>
                  <h5>{{ $t('values.authenticity') }}</h5>
                  <p>{{ $t('values.authenticityText') }}</p>
                </div>
              </li>
              <li>
                <FaIcon icon="music" />
                <div>
                  <h5>{{ $t('values.professionalism') }}</h5>
                  <p>{{ $t('values.professionalismText') }}</p>
                </div>
              </li>
              <li>
                <FaIcon icon="users" />
                <div>
                  <h5>{{ $t('values.diversity') }}</h5>
                  <p>{{ $t('values.diversityText') }}</p>
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
        <span>{{ $t('common.liveSessions') }}</span>
        <h2>{{ t('featured') }}</h2>
        <p>{{ t('featuredDescription') }}</p>
      </div>

      <div class="container">
        <div class="row gy-4 featured-videos-row">
          <div v-for="(video, index) in featuredVideos" :key="video.id" class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" :data-aos-delay="100 * (index + 1)">
            <div class="card video-card h-100" @click="openVideoModal(video)">
              <div class="card-img">
                <img :src="video.thumbnail" :alt="video.title" class="img-fluid" />
                <span class="play-btn">
                  <FaIcon icon="circle-play" />
                </span>
              </div>
              <p class="card-date">{{ video.formattedDate }}</p>
              <h3>{{ video.title }}</h3>
              <p>{{ video.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-5" data-aos="fade-up">
          <NuxtLink :to="localePath('/videos')" class="btn-getstarted">
            {{ t('viewAll') }}
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
              <h3>{{ $t('cta.collaborate') }}</h3>
              <p>{{ $t('cta.artistsText') }}</p>
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
        <span>{{ t('mission') }}</span>
        <h2>{{ t('mission') }}</h2>
        <p>{{ t('missionText') }}</p>
      </div>

      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <img src="/img/videos/lvz_silenciosa.jpg" class="img-fluid" alt="Galería Interior Live Session" />
          </div>
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ t('historyTitle') }}</h3>
            <p class="fst-italic">{{ t('historySummary') }}</p>
            <NuxtLink :to="localePath('/proyecto')" class="btn-getstarted mt-3">
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
          <FaIcon icon="xmark" />
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
              <FaIcon icon="calendar" />
              {{ selectedVideo.formattedDate }}
            </span>
          </div>
          <p class="video-description">{{ selectedVideo.description }}</p>
          <div class="video-actions">
            <a :href="selectedVideo.youtubeUrl" target="_blank" rel="noopener" class="btn-watch-youtube">
              <FaIcon :icon="['fab', 'youtube']" />
              {{ t('watchOnYoutube') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { videosData, featuredVideoIds } from '~/data/videos'
import { socialLinks } from '~/data/social'

const { t, locale } = useI18n({ useScope: 'local' })
const { t: $t } = useI18n()
const localePath = useLocalePath()

interface Video {
  id: string
  title: string
  date: string
  formattedDate: string
  description: string
  thumbnail: string
  youtubeUrl: string
}

const selectedVideo = ref<Video | null>(null)

// Format date according to current locale
function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper to build video with data
const buildVideo = (id: string) => {
  const videoData = videosData.find(v => v.id === id)
  if (!videoData) return null
  return {
    id: videoData.id,
    title: videoData.title,
    date: videoData.date,
    formattedDate: formatDate(videoData.date),
    description: videoData.description[locale.value as keyof typeof videoData.description] || videoData.description.es,
    thumbnail: videoData.thumbnail,
    youtubeUrl: videoData.youtubeUrl
  }
}

// Featured videos for homepage (configured in data/videos.ts)
const featuredVideos = computed(() =>
  featuredVideoIds
    .map(id => buildVideo(id))
    .filter((v): v is Video => v !== null)
)

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
  width: 100%;
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
  aspect-ratio: 16 / 9;
}

.video-card .card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  display: inline-flex;
  align-items: center;
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

  #features .features-item .col-md-7 {
    text-align: center;
  }
}
</style>

<i18n lang="yaml">
es:
  heroTitle: La Casa de la Hormiga
  heroSubtitle: Live Sessions
  heroDescription: Grabaciones audiovisuales de música en vivo en Barcelona
  heroCta: Ver videos
  statsVideos: Videos
  statsSince: Desde
  statsBarcelona: Barcelona
  statsLiveMusic: Live Music
  whatWeDo: Qué hacemos
  whatWeDoText: En La Casa de la Hormiga realizamos grabaciones audiovisuales de conciertos reales, en vivo y con público. Siempre intentamos interferir lo menos posible en la experiencia de quienes asisten. La prioridad es la música y el momento, no la grabación.
  featured: Videos destacados
  featuredDescription: Una selección de nuestras grabaciones más especiales
  viewAll: Ver todos los videos
  mission: Nuestra misión
  missionText: Somos un proyecto impulsado principalmente por migrantes, con un fuerte compromiso por visibilizar la diversidad cultural que transita la ciudad. Buscamos capturar la escena musical de Barcelona para mostrar la experiencia auténtica que se vive en cada concierto.
  historyTitle: Historia del proyecto
  historySummary: La Casa de la Hormiga nació en 2022, cuando dos amigos de Buenos Aires se encontraron en Barcelona. Empezaron con escasos recursos, con una cámara prestada y muchas ganas de aprender. Hoy ya publicamos más de 20 videos.
  watchOnYoutube: Ver en YouTube

en:
  heroTitle: La Casa de la Hormiga
  heroSubtitle: Live Sessions
  heroDescription: Audiovisual recordings of live music in Barcelona
  heroCta: Watch videos
  statsVideos: Videos
  statsSince: Since
  statsBarcelona: Barcelona
  statsLiveMusic: Live Music
  whatWeDo: What we do
  whatWeDoText: At La Casa de la Hormiga we make audiovisual recordings of real concerts, live and with an audience. We always try to interfere as little as possible with the experience of those attending. The priority is the music and the moment, not the recording.
  featured: Featured videos
  featuredDescription: A selection of our most special recordings
  viewAll: View all videos
  mission: Our mission
  missionText: We are a project driven mainly by migrants, with a strong commitment to making visible the cultural diversity that passes through the city. We seek to capture Barcelona's music scene to show the authentic experience of each concert.
  historyTitle: Project history
  historySummary: La Casa de la Hormiga was born in 2022, when a childhood friend —sound engineer— moved from Buenos Aires to Barcelona. We started knowing nothing about audiovisuals, with a borrowed camera and a strong desire to learn. Today we have published more than 20 videos.
  watchOnYoutube: Watch on YouTube

ca:
  heroTitle: La Casa de la Hormiga
  heroSubtitle: Live Sessions
  heroDescription: Gravacions audiovisuals de música en viu a Barcelona
  heroCta: Veure vídeos
  statsVideos: Vídeos
  statsSince: Des de
  statsBarcelona: Barcelona
  statsLiveMusic: Live Music
  whatWeDo: Què fem
  whatWeDoText: A La Casa de la Hormiga realitzem gravacions audiovisuals de concerts reals, en viu i amb públic. Sempre intentem interferir el mínim possible en l'experiència dels qui hi assisteixen. La prioritat és la música i el moment, no la gravació.
  featured: Vídeos destacats
  featuredDescription: Una selecció de les nostres gravacions més especials
  viewAll: Veure tots els vídeos
  mission: La nostra missió
  missionText: Som un projecte impulsat principalment per migrants, amb un fort compromís per visibilitzar la diversitat cultural que transita la ciutat. Busquem capturar l'escena musical de Barcelona per mostrar l'experiència autèntica que es viu a cada concert.
  historyTitle: Història del projecte
  historySummary: La Casa de la Hormiga va néixer el 2022, quan un amic de la infància —enginyer de so— es va mudar des de Buenos Aires a Barcelona. Vam començar sense saber res d'audiovisuals, amb una càmera prestada i moltes ganes d'aprendre. Avui ja hem publicat més de 20 vídeos.
  watchOnYoutube: Veure a YouTube
</i18n>
