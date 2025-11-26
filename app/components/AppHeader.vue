<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <NuxtLink :to="localePath('/')" class="logo d-flex align-items-center me-auto">
        <img src="/img/logo.png" alt="La Casa de la Hormiga" />
        <h1 class="sitename">La Casa de la Hormiga</h1>
      </NuxtLink>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')" :class="{ active: route.path === '/' || route.path === `/${locale}` }">
              {{ $t('nav.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/nosotros')" :class="{ active: route.path.includes('nosotros') }">
              {{ $t('nav.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/videos')" :class="{ active: route.path.includes('videos') }">
              {{ $t('nav.videos') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contacto')" :class="{ active: route.path.includes('contacto') }">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </li>
          <li class="lang-switcher-nav">
            <LanguageSwitcher />
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list" @click="toggleMobileNav"></i>
      </nav>

      <a class="btn-getstarted btn-youtube" href="https://www.youtube.com/@lacasadelahormiga" target="_blank" rel="noopener">
        <i class="bi bi-youtube"></i>
        <span class="btn-text">{{ $t('nav.watchYoutube') }}</span>
      </a>

    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()
const { locale } = useI18n()

const toggleMobileNav = () => {
  document.body.classList.toggle('mobile-nav-active')
  const navmenu = document.querySelector('.navmenu ul')
  if (navmenu) {
    navmenu.classList.toggle('show')
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
  handleScroll()
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
    background: rgba(0, 0, 0, 0.95);
    padding: 80px 20px 20px;
    z-index: 9999;
  }

  .navmenu ul.show {
    display: flex;
  }

  .navmenu ul li {
    padding: 10px 0;
  }

  .navmenu ul li a {
    font-size: 18px;
    color: #fff;
  }

  .mobile-nav-toggle {
    font-size: 28px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
