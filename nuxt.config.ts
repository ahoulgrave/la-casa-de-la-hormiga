// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      web3formsKey: process.env.WEB3FORMS_ACCESS_KEY || ''
    }
  },

  // Módulos
  modules: ['@nuxtjs/i18n'],

  // Configuración i18n
  i18n: {
    locales: [
      { code: 'es', name: 'Castellano', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ca', name: 'Català', file: 'ca.json' }
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // Generación estática para GitHub Pages
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // Configuración de la app
  app: {
    head: {
      title: 'La Casa de la Hormiga - Live Sessions',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Grabaciones audiovisuales de música en vivo en Barcelona. Documentamos la escena musical con pasión y autenticidad.' },
        { name: 'keywords', content: 'música en vivo, Barcelona, conciertos, grabaciones, live sessions, audiovisual' },
        { property: 'og:title', content: 'La Casa de la Hormiga - Live Sessions' },
        { property: 'og:description', content: 'Grabaciones audiovisuales de música en vivo en Barcelona' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/vendor/bootstrap-icons/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
        { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
      ],
      script: [
        { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', defer: true },
        { src: '/vendor/aos/aos.js', defer: true },
        { src: '/vendor/glightbox/js/glightbox.min.js', defer: true },
        { src: '/js/main.js', defer: true },
      ]
    }
  },

  // CSS global
  css: ['~/assets/css/main.css'],
})
