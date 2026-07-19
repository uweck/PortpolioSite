<script setup>
import { site } from '../data/site'
import SiteNav from './SiteNav.vue'
</script>

<template>
	<div class="site-shell">
		<SiteNav />
		<main class="site-main">
			<slot />
		</main>
		<footer class="site-footer">
			<span>{{ site.name }} · {{ site.designer }}</span>
			<span>Selected works</span>
		</footer>
	</div>
</template>
