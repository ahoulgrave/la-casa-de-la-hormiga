<template>
  <article class="video-card">
    <a :href="video.youtubeUrl" target="_blank" rel="noopener" class="video-link">
      <div class="video-thumbnail">
        <img :src="video.thumbnail" :alt="video.title" loading="lazy" />
        <div class="video-overlay">
          <div class="play-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div class="video-card-content">
        <h3>{{ video.title }}</h3>
        <p class="video-date">{{ video.date }}</p>
        <p class="video-description">{{ video.description }}</p>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
interface Video {
  title: string
  date: string
  description: string
  thumbnail: string
  youtubeUrl: string
}

defineProps<{
  video: Video
}>()
</script>

<style scoped>
.video-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(189, 120, 255, 0.15);
  border-color: rgba(189, 120, 255, 0.3);
}

.video-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.video-thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-card:hover .video-thumbnail img {
  transform: scale(1.05);
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-card:hover .video-overlay {
  opacity: 1;
}

.play-icon {
  width: 70px;
  height: 70px;
  background: var(--color-primario);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-negro);
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.video-card:hover .play-icon {
  transform: scale(1);
}

.play-icon svg {
  margin-left: 4px;
}

.video-card-content {
  padding: 1.25rem;
}

.video-card-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-blanco);
  margin-bottom: 0.25rem;
}

.video-date {
  font-size: 0.8rem;
  color: var(--color-primario);
  margin-bottom: 0.5rem;
}

.video-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
