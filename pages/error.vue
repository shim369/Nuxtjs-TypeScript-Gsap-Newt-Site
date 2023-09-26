<script lang="ts" setup>
useHead({
  title: 'Error',
  meta: [
    { name: 'description', content: '問い合わせの送信が失敗しました' }
  ]
})
</script>

<template>
    <main class="under-main">
        <section>
            <div class="Result">
                <div class="bg"></div>
                <div class="under-head">
                <h1>Error!</h1>
                </div>
                <div class="under-contents">
                <NuxtLink href="/">
                    Back to Top
                </NuxtLink>
                </div>
            </div>
        </section>
  </main>
</template>