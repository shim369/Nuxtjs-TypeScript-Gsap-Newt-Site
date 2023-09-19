<template>
    <main class="under-main">
        <template v-if="article">
            <section class="blog-detail bg-green">
              <div class="container" data-aos="fade-up">
                <h1>{{ article?.title }}</h1>
                <time class="date"><i class="material-icons">schedule</i>{{ new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(article.date))}}</time>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div v-html="article?.body"></div>
              </div>
			      </section>
        </template>
    </main>
</template>

<script lang="ts" setup>
import type { Article } from '~/types/article'

const route = useRoute()
const { slug } = route.params

const { data } = await useAsyncData(`article-${slug}`, async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'body', 'coverImage', 'category', 'date']
    }
  })
})
const article = data.value

useHead({
  title: article?.title,
  meta: [
    { name: 'description', content: 'This is Blog detail page' }
  ]
})
</script>