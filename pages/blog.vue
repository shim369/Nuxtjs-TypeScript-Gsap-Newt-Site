<template>
    <main class="under-main">
		<section>
			<h1>Blog</h1>
			    <div class="blog-item-box">
            <div v-for="article in nuxtArticles" :key="article._id" class="blog-item">
              <NuxtLink :to="`/articles/${article.slug}`" :title="`${article.title}`">
              <img :src="article.coverImage.src" :alt="`Cover image for ${article.title}`" width="400" height="300" loading="lazy" />
              <time class="date">
              <i class="material-icons">schedule</i>
              {{ formatDate(article.date) }}
              </time>
              <h2>{{ article.title }}</h2>
              </NuxtLink>
            </div>
          </div>
		</section>
	</main>
</template>
<script lang="ts" setup>
import type { Article } from '~/types/article'
import { useAsyncData, useNuxtApp, useHead } from '#app'

const { data } = await useAsyncData('articles', async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'body', 'coverImage', 'category', 'date']
    }
  })
})
const articles = data.value?.items ?? []

const nuxtArticles = articles.filter((article: Article) => article.category.name === 'Nuxt')

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(date))
}

useHead({
  title: 'NUXT BASE',
  meta: [
    { name: 'description', content: 'NUXT BASE is a website by Nuxt 3' }
  ]
})
</script>
