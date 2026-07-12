<script setup>
import { RouterLink } from 'vue-router'
import { site } from '../data/site'
import { getFeaturedWork, workImageUrl } from '../data/works'

const featured = getFeaturedWork()
</script>

<template>
  <section class="home-hero" aria-label="Featured work">
    <div class="home-hero__media">
      <img
        :src="workImageUrl(featured)"
        :alt="featured.title"
        fetchpriority="high"
      />
    </div>
    <div class="home-hero__veil" aria-hidden="true" />
    <div class="home-hero__content">
      <h1 class="home-hero__brand">{{ site.name }}</h1>
      <p class="home-hero__tagline">{{ site.tagline }}</p>
      <RouterLink to="/gallery" class="btn">
        View gallery
        <span class="btn__arrow" aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </section>
</template>
