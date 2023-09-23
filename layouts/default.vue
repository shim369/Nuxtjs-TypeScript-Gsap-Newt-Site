<template>
    <Header />
    <slot />
    <Contact />
    <Footer />
</template>
<script>
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Contact,
    Footer,
  },
}
</script>