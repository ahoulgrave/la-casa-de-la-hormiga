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
            <a href="https://www.youtube.com/@lacasadelahormiga" target="_blank" rel="noopener" aria-label="YouTube">
              <i class="bi bi-youtube"></i>
            </a>
            <a href="https://www.instagram.com/lacasadelahormiga.bcn/" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>{{ $t('footer.links') }}</h4>
          <ul>
            <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/nosotros')">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/videos')">{{ $t('nav.videos') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contacto')">{{ $t('nav.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Live Sessions</h4>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=qNz-JDd6_Eo" target="_blank">Pyramides</a></li>
            <li><a href="https://www.youtube.com/watch?v=C1D30TS0hmY" target="_blank">Manza</a></li>
            <li><a href="https://www.youtube.com/watch?v=8C4IPKPuhEI" target="_blank">Galería Interior</a></li>
            <li><a href="https://www.youtube.com/watch?v=3D-9XwMOGnY" target="_blank">Sergio Pángaro</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>{{ $t('nav.contact') }}</h4>
          <p><i class="bi bi-geo-alt"></i> Barcelona, España</p>
          <p class="mt-2">
            <strong>Email:</strong><br>
            <a href="mailto:lacasadelahormiga.bcn@gmail.com">lacasadelahormiga.bcn@gmail.com</a>
          </p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© {{ new Date().getFullYear() }} <strong class="px-1 sitename">La Casa de la Hormiga</strong> {{ $t('footer.copyright') }}</p>
      <div class="credits">
        Barcelona - Live Sessions
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
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
</style>
