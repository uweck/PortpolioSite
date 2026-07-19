<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getWorkById, workImageUrl } from '../data/works'

const route = useRoute()
const work = computed(() => getWorkById(route.params.id))
const meta = computed(() => {
	if (!work.value) return ''
	return [work.value.year, work.value.medium].filter(Boolean).join(' · ')
})
</script>

<template>
	<div v-if="!work" class="not-found">
		<h1>Work not found</h1>
		<p>
			<RouterLink to="/gallery">Back to gallery</RouterLink>
		</p>
	</div>

	<article v-else class="work-detail">
		<div class="work-detail__toolbar">
			<RouterLink to="/gallery" class="work-detail__back">← Gallery</RouterLink>
			<div class="work-detail__info">
				<h1>{{ work.title }}</h1>
				<p v-if="meta">{{ meta }}</p>
			</div>
		</div>
		<div class="work-detail__stage">
			<img :src="workImageUrl(work)" :alt="work.title" />
		</div>
	</article>
</template>
