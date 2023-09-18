<template>
    <main class="under-main">
		<section>
			<h1>Blog</h1>
  <div v-if="data">
    <ul>
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`">
          <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          alt=""
          />
          <div>
            <div>
              {{ blog.category?.name }}
            </div>
            <div>
              {{ blog.title }}
            </div>
			<time class="date">
					{{ formatDate(blog.publishedAt ?? blog.createdAt) }}
			</time>
          </div>
        </NuxtLink>
      </li>
    </ul>
	</div>
		</section>
	</main>
</template>
<script setup lang="ts">
import { Blog } from "~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
endpoint: "blogs",
});
console.log(data);

const formatDate = (dateString: Date) => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}.${month}.${day}`;
};

formatDate;
</script>
