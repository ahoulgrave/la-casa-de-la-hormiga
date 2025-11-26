<template>
  <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <NuxtLink :to="localePath('/')" class="logo d-flex align-items-center">
            <img src="/img/logo.png" alt="La Casa de la Hormiga" />
            <span class="sitename">La Casa de la Hormiga</span>
          </NuxtLink>
          <p>{{ $t('footer.description') }}</p>
          <div class="social-links d-flex mt-4">
            <a :href="socialLinks.youtube" target="_blank" rel="noopener" aria-label="YouTube">
              <FaIcon :icon="['fab', 'youtube']" />
            </a>
            <a :href="socialLinks.instagram" target="_blank" rel="noopener" aria-label="Instagram">
              <FaIcon :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>{{ $t('footer.links') }}</h4>
          <ul>
            <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/proyecto')">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/videos')">{{ $t('nav.videos') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contacto')">{{ $t('nav.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>{{ $t('footer.liveSessions') }}</h4>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=qNz-JDd6_Eo" target="_blank">Pyramides</a></li>
            <li><a href="https://www.youtube.com/watch?v=C1D30TS0hmY" target="_blank">Manza</a></li>
            <li><a href="https://www.youtube.com/watch?v=8C4IPKPuhEI" target="_blank">Galería Interior</a></li>
            <li><a href="https://www.youtube.com/watch?v=3D-9XwMOGnY" target="_blank">Sergio Pángaro</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>{{ $t('nav.contact') }}</h4>
          <p><FaIcon icon="location-dot" /> {{ $t('location.city') }}, {{ $t('location.country') }}</p>
          <NuxtLink :to="localePath('/contacto')" class="btn-contact-footer mt-2">
            <FaIcon icon="envelope" class="me-2" />{{ $t('contact.formTitle') }}
          </NuxtLink>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© {{ new Date().getFullYear() }} <strong class="px-1 sitename">La Casa de la Hormiga</strong> {{ $t('footer.copyright') }}</p>
      <div class="credits">
        {{ $t('location.city') }} - {{ $t('footer.liveSessions') }}
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

const localePath = useLocalePath()
</script>

<style scoped>
.footer-about .logo img {
  max-height: 40px;
  margin-right: 10px;
}

.footer-contact i {
  color: var(--color-violeta);
  margin-right: 8px;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
}

.footer-contact a:hover {
  color: var(--color-violeta);
}

.btn-contact-footer {
  display: inline-flex;
  align-items: center;
  background: var(--color-violeta);
  color: #000;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-contact-footer:hover {
  background: var(--color-verde);
  color: #000;
}
</style>
