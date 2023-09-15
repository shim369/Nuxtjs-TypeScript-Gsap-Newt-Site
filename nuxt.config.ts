// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['gsap']
  },
  typescript: {
    typeCheck: true
  },
  css: [
    '/assets/css/style.css',
  ]
})