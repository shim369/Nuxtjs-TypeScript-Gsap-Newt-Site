// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  build: {
    transpile: ['gsap']
  },
  modules: [
    'nuxt-aos',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Lato: [300, 900],
      NanumMyeongjo: [700],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
          crossorigin: "",
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      newt: {
        spaceUid: process.env.NEWT_SPACE_UID,
        token: process.env.NEWT_CDN_API_TOKEN
      }
    }
  },
  typescript: {
    typeCheck: true
  },
  css: [
    '/assets/css/style.css',
  ]
})