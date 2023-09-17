// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
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
  typescript: {
    typeCheck: true
  },
  css: [
    '/assets/css/style.css',
  ]
})