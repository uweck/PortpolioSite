<script setup>
import { RouterLink } from 'vue-router'
import { site } from '../data/site'
</script>

<template>
	<header class="site-nav">
		<RouterLink to="/" class="site-nav__brand">{{ site.name }}</RouterLink>
		<nav aria-label="Primary">
			<ul class="site-nav__links">
				<li>
					<RouterLink to="/">Home</RouterLink>
				</li>
				<li>
					<RouterLink to="/gallery">Gallery</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
