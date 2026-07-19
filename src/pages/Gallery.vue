<script setup>
import { RouterLink } from 'vue-router'
import { works, workImageUrl } from '../data/works'
</script>

<template>
	<div class="page">
		<header class="page__header">
			<h1>Gallery</h1>
			<p>A selection of recent work. Click any piece to view it full size.</p>
		</header>

		<ul class="gallery-grid">
			<li v-for="work in works" :key="work.id" class="gallery-item">
				<RouterLink :to="`/work/${work.id}`" class="gallery-card">
					<div class="gallery-card__frame">
						<img
							:src="workImageUrl(work)"
							:alt="work.title"
							loading="lazy"
						/>
					</div>
					<div class="gallery-card__meta">
						<span class="gallery-card__title">{{ work.title }}</span>
						<span v-if="work.year" class="gallery-card__year">{{ work.year }}</span>
					</div>
				</RouterLink>
			</li>
		</ul>
	</div>
</template>
