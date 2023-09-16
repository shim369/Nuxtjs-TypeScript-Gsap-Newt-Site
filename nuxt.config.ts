// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['gsap']
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
    },
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