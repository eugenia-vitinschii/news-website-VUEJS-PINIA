<template>
  <!-- article item (center) -->
  <div class="article__item">
    <div class="article__content">
      <!-- aricle content -->
      <div class="article__title">
        <router-link :to="'/thesis/' + id">
          <p class="subheading link">{{ title }}</p>
        </router-link>
      </div>
      <div class="article__text">
        <p class="body-text text-limit">{{ description }}...</p>
      </div>
    </div>
    <!-- article description -->
    <div class="article__description">
      <div class="article__media">
        <div class="article__media--author">
          <p class="body-text-category">{{ creator }}</p>
        </div>
      

      <div class="article__media--tag">
        <router-link :to="ai_tag">
          <p class="body-text-category">#{{ ai_tag }}</p>
        </router-link>
      </div>

      <div class="article__media--icon">
        <a :href="source_url" target="_blank">
          <img :src="source_icon" alt="source icon" 
          @error="$event.target.src='@/assets/img/news.jpg'"
          />
          
        </a>
      </div>
      </div>
      <div class="article__img grayscale">
        <img :src="img" 
          @error="$event.target.src='@/assets/img/news.jpg'"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheArticle",
});

defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  source_icon: {
    type: String,
  },
  category: {
    type: String,
  },
  source_url: {
    type: String,
  },
  ai_tag: {
    type: String,
  },
  keywords: {
    type: String,
  },
  img: {
    type: String,
  },
  top: {
    type: Boolean,
  },
  articleHeader: {
    type: String,
  },
  creator: {
    type: String,
  },
  country: {
    type: String,
  },
});
</script>

<style>
</style>