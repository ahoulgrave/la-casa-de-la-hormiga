<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <NuxtLink :to="localePath('/')" class="logo d-flex align-items-center me-auto">
        <img src="/img/logo.png" alt="La Casa de la Hormiga" />
        <h1 class="sitename">La Casa de la Hormiga</h1>
      </NuxtLink>

      <nav id="navmenu" class="navmenu">
        <ul :class="{ show: mobileNavOpen }">
          <!-- Close button inside mobile menu -->
          <li class="mobile-nav-close d-xl-none">
            <button @click="closeMobileNav" aria-label="Cerrar menú">
              <FaIcon icon="xmark" />
            </button>
          </li>
          <li>
            <NuxtLink :to="localePath('/')" :class="{ active: route.path === '/' || route.path === `/${locale}` }" @click="closeMobileNav">
              {{ $t('nav.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/proyecto')" :class="{ active: route.path.includes('proyecto') || route.path.includes('project') }" @click="closeMobileNav">
              {{ $t('nav.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/videos')" :class="{ active: route.path.includes('videos') }" @click="closeMobileNav">
              {{ $t('nav.videos') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contacto')" :class="{ active: route.path.includes('contacto') }" @click="closeMobileNav">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </li>
          <li class="lang-switcher-nav">
            <LanguageSwitcher />
          </li>
        </ul>
        <FaIcon icon="bars" class="mobile-nav-toggle d-xl-none" @click="openMobileNav" />
      </nav>

      <a class="btn-getstarted btn-youtube" :href="socialLinks.youtube" target="_blank" rel="noopener">
        <FaIcon :icon="['fab', 'youtube']" />
        <span class="btn-text">{{ $t('nav.watchYoutube') }}</span>
      </a>

    </div>
  </header>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

const localePath = useLocalePath()
const route = useRoute()
const { locale } = useI18n()

const mobileNavOpen = ref(false)

const openMobileNav = () => {
  mobileNavOpen.value = true
  document.body.classList.add('mobile-nav-active')
  document.body.style.overflow = 'hidden'
}

const closeMobileNav = () => {
  mobileNavOpen.value = false
  document.body.classList.remove('mobile-nav-active')
  document.body.style.overflow = ''
}

// Close menu on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mobileNavOpen.value) {
    closeMobileNav()
  }
}

onMounted(() => {
  // Handle scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      document.body.classList.add('scrolled')
    } else {
      document.body.classList.remove('scrolled')
    }
  }

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.btn-youtube {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FF0000 !important;
  color: #fff !important;
}

.btn-youtube:hover {
  background: #cc0000 !important;
  color: #fff !important;
}

.btn-youtube i {
  font-size: 18px;
}

@media (max-width: 767px) {
  .btn-youtube .btn-text {
    display: none;
  }

  .btn-youtube {
    width: 40px;
    height: 40px;
    padding: 0 !important;
    justify-content: center;
    margin-left: 15px !important;
  }

  .btn-youtube svg {
    font-size: 20px;
  }
}

.lang-switcher-nav {
  margin-left: 10px;
}

@media (max-width: 1199px) {
  .navmenu ul {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.98);
    padding: 20px;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .navmenu ul.show {
    display: flex;
  }

  .navmenu ul li {
    padding: 10px 0;
    text-align: center;
  }

  .navmenu ul li a {
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    display: block;
  }

  .navmenu ul li a:hover,
  .navmenu ul li a.active {
    color: var(--color-violeta);
  }

  .mobile-nav-toggle {
    font-size: 28px;
    color: #fff;
    cursor: pointer;
    z-index: 9998;
  }

  /* Close button */
  .mobile-nav-close {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0 !important;
  }

  .mobile-nav-close button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    padding: 10px;
    transition: color 0.3s;
  }

  .mobile-nav-close button:hover {
    color: var(--color-violeta);
  }

  .lang-switcher-nav {
    margin-top: 20px;
    margin-left: 0;
  }
}

/* Hide close button on desktop */
@media (min-width: 1200px) {
  .mobile-nav-close {
    display: none;
  }
}
</style>
