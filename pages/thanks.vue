<script lang="ts" setup>
useHead({
  title: 'Thank you',
  meta: [
    { name: 'description', content: '問い合わせの送信が成功しました' }
  ]
})
</script>

<template>
    <main class="under-main">
        <section>
            <div class="Result">
                <div class="bg"></div>
                <div class="under-head">
                <h1>Thank you!</h1>
                </div>
                <div class="under-contents">
                <NuxtLink to="/">
                    Back to Top
                </NuxtLink>
                </div>
            </div>
        </section>
  </main>
</template>