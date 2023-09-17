<template>
    <main class="under-main">
		<section>
		<template v-if="data">
			<h1>{{ data.title }}</h1>
			<img
				:src="data.eyecatch?.url"
				:width="data.eyecatch?.width"
				:height="data.eyecatch?.height"
				alt=""
			/>
			<div>
				<div>
				{{ data.category?.name }}
				</div>
				<time class="date">
					{{ formatDate(data.publishedAt ?? data.createdAt) }}
				</time>
			</div>
			<div v-html="data.content"></div>
		</template>
		</section>
	</main>
</template>
<script setup lang="ts">
import { Blog } from "../../types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}.${month}.${day}`;
};

formatDate;
</script>