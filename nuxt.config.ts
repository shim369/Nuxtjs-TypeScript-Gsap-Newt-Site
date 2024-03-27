// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  build: {
    transpile: ['gsap']
  },
  modules: [
    'nuxt-aos'
  ],
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
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
          crossorigin: "",
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;900&family=Nanum+Myeongjo:wght@700&display=swap',
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