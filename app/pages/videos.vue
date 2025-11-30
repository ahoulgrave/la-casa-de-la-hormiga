<template>
  <div class="videos-page">
    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade">
      <div class="container position-relative">
        <h1>{{ t('title') }}</h1>
        <p>{{ t('description') }}</p>
        <nav class="breadcrumbs">
          <ol>
            <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
            <li class="current">{{ $t('nav.videos') }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Videos Section -->
    <section id="videos" class="services section">
      <div class="container section-title" data-aos="fade-up">
        <span>{{ $t('common.liveSessions') }}</span>
        <h2>{{ t('allVideos') }}</h2>
      </div>

      <div class="container">
        <div class="row gy-4 videos-row">
          <div v-for="(video, index) in allVideos" :key="video.id" class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" :data-aos-delay="100 * ((index % 3) + 1)">
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

        <!-- YouTube Channel CTA -->
        <div class="text-center mt-5" data-aos="fade-up">
          <p class="mb-4" style="color: rgba(255,255,255,0.7);">{{ t('watchOnYoutube') }}</p>
          <a :href="socialLinks.youtube" target="_blank" rel="noopener" class="btn-youtube">
            <FaIcon :icon="['fab', 'youtube']" class="me-2" />
            {{ t('youtubeChannel') }}
          </a>
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
import { videosData, type VideoData } from '~/data/videos'
import { socialLinks } from '~/data/social'

const { t, locale } = useI18n({ useScope: 'local' })
const { t: $t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Videos - La Casa de la Hormiga'
})

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

// Build videos with data from the file
const allVideos = computed(() =>
  videosData.map(video => ({
    id: video.id,
    title: video.title,
    date: video.date,
    formattedDate: formatDate(video.date),
    description: video.description[locale.value as keyof typeof video.description] || video.description.es,
    thumbnail: video.thumbnail,
    youtubeUrl: video.youtubeUrl
  }))
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
/* Videos grid equal height */
.videos-row {
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

.video-card h3 {
  color: var(--heading-color);
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
  padding-top: 56.25%; /* 16:9 aspect ratio */
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

/* YouTube Channel CTA */
.btn-youtube {
  display: inline-flex;
  align-items: center;
  background: #FF0000;
  color: #fff;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  text-decoration: none;
}

.btn-youtube:hover {
  background: #cc0000;
  color: #fff;
  transform: translateY(-2px);
}

.btn-youtube i {
  font-size: 24px;
}

/* Responsive */
@media (max-width: 991px) {
  .video-modal-card {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .video-modal-overlay {
    padding: 10px;
  }

  .video-modal-card {
    max-height: 95vh;
    overflow-y: auto;
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

  .video-description {
    font-size: 14px;
  }

  .close-btn {
    width: 36px;
    height: 36px;
    top: 10px;
    right: 10px;
  }

  .btn-youtube {
    padding: 10px 20px;
    font-size: 14px;
  }

  .video-card .play-btn {
    font-size: 48px;
  }
}

@media (max-width: 576px) {
  .video-modal-overlay {
    padding: 5px;
    align-items: flex-start;
    padding-top: 20px;
  }

  .video-header h2 {
    font-size: 18px;
  }

  .video-info {
    padding: 15px;
  }

  .btn-watch-youtube {
    width: 100%;
    justify-content: center;
    padding: 12px 20px;
  }

  .video-card .play-btn {
    font-size: 40px;
  }
}
</style>

<i18n lang="yaml">
es:
  title: Nuestros videos
  description: Todas nuestras grabaciones de música en vivo
  allVideos: Todos los videos
  watchOnYoutube: Ver en YouTube
  youtubeChannel: Canal de YouTube

en:
  title: Our videos
  description: All our live music recordings
  allVideos: All videos
  watchOnYoutube: Watch on YouTube
  youtubeChannel: YouTube Channel

ca:
  title: Els nostres vídeos
  description: Totes les nostres gravacions de música en viu
  allVideos: Tots els vídeos
  watchOnYoutube: Veure a YouTube
  youtubeChannel: Canal de YouTube
</i18n>
