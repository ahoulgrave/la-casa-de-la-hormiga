<template>
  <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <NuxtLink :to="localePath('/')" class="logo d-flex align-items-center">
            <img src="/img/logo.png" alt="La Casa de la Hormiga" />
            <span class="sitename">LA CASA DE LA HORMIGA</span>
          </NuxtLink>
          <p>{{ $t('footer.description') }}</p>
        </div>

        <div class="col-auto footer-social ms-auto">
          <h4>{{ $t('nav.contact') }}</h4>
          <div class="social-links d-flex">
            <a :href="socialLinks.youtube" target="_blank" rel="noopener" aria-label="YouTube" class="youtube" data-tooltip="YouTube">
              <FaIcon :icon="['fab', 'youtube']" />
            </a>
            <a :href="socialLinks.instagram" target="_blank" rel="noopener" aria-label="Instagram" class="instagram" data-tooltip="Instagram">
              <FaIcon :icon="['fab', 'instagram']" />
            </a>
            <NuxtLink :to="localePath('/contacto')" aria-label="Contacto" class="contact" :data-tooltip="$t('contact.formTitle')">
              <FaIcon icon="envelope" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© {{ new Date().getFullYear() }} <strong class="px-1 sitename">La Casa de la Hormiga</strong> {{ $t('footer.copyright') }}</p>
      <div class="credits">
        {{ $t('location.city') }}
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

const localePath = useLocalePath()
</script>

<style scoped>
.footer-social h4 {
  font-size: 14px;
  margin-bottom: 15px;
}

.footer-social .social-links a {
  width: 44px;
  height: 44px;
  font-size: 20px;
}

.social-links a.youtube {
  background: rgba(255, 0, 0, 0.1);
  color: #FF0000;
}

.social-links a.youtube:hover {
  background: #FF0000;
  color: #fff;
}

.social-links a.instagram {
  background: rgba(225, 48, 108, 0.1);
  color: #E1306C;
}

.social-links a.instagram:hover {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: #fff;
}

.social-links a.contact {
  background: rgba(157, 78, 221, 0.1);
  color: var(--color-violeta);
}

.social-links a.contact:hover {
  background: var(--color-violeta);
  color: #fff;
}

.social-links a[data-tooltip] {
  position: relative;
}

.social-links a[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  margin-top: 8px;
}

.social-links a[data-tooltip]:hover::after {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 991px) {
  .footer-social {
    width: 100%;
    text-align: center;
    margin: 0 !important;
    margin-top: 20px !important;
  }

  .footer-social .social-links {
    justify-content: center;
  }
}
</style>
