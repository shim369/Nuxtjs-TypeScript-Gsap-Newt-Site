import { createClient } from 'newt-client-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const newtClient = createClient({
    spaceUid: config.public.newt.spaceUid,
    token: config.public.newt.token,
    apiType: 'cdn'
  })
  return {
    provide: {
      newtClient
    }
  }
})
