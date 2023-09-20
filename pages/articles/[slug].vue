<template>
    <main class="under-main">
        <template v-if="article">
            <section class="blog-detail">
              <div class="container">
                <h1 class="blog-title">{{ article?.title }}</h1>
                <time class="date">
                <i class="material-icons">schedule</i>
                {{ formatDate(article.date) }}
                </time>
                <div v-html="article?.body" class="blog-body"></div>
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

const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
</script>