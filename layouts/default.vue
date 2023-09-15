<template>
    <Header />
    <slot />
    <Footer />
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>