<template>
    <main class="under-main">
		<section>
      <div class="bg"></div>
			<h1>Blog</h1>
      <p>This blog is powered by a headless CMS. It offers the flexibility to use any tech stack and allows for content reuse across multiple platforms. The system ensures fast performance even under high traffic, reduces security risks, and provides centralized content management.</p>
			    <div class="blog-item-box">
            <div v-for="article in articles" :key="article._id" class="blog-item">
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

// const nuxtArticles = articles.filter((article: Article) => article.category.name === 'Nuxt')


const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

useHead({
  title: 'Blog | Nuxt Base',
  meta: [
    { name: 'description', content: 'Nuxt Base is a website by Nuxt 3' }
  ]
})
</script>
