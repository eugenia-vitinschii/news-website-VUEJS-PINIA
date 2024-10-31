<template>
  <!-- thesis item component -->
  <div class="thesis__item">
    <div class="thesis__title">
      <p class="body-text">{{ pubDate }}</p>
      <h1 class="heading">{{ title }}</h1>
    </div>
    <div class="thesis__img">
      <img :src="img" 
      @error="$event.target.src='https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg'"/>

    </div>
    <div class="thesis-text">
      <p class="subheading">{{ description }}</p>
      <p class="body-text">{{ content }}</p>
    </div>
    <div class="thesis__info">
      <button
        class="show-more"
        title="get more"
        @click="getMore = !getMore"
        :class="{ active: getMore }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path
            d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>
      </button>

      <div class="thesis__info--text" v-show="getMore">
        <h2 class="body-text" v-if="category">category: {{ category }}</h2>
        <h3 class="body-text" v-if="ai_tag">#{{ ai_tag }}</h3>
        <p class="body-text" v-if="keywords">keywords: {{ keywords }}</p>
      </div>
    </div>
    <div class="thesis__source">
      <div class="thesis__source--img" title="show news source">
        <a :href="source_url" target="_blank">
          <img :src="source_icon" alt="icon" />
        </a>
      </div>
    </div>
  </div>
</template>
 
 <script setup>
import { defineOptions, defineProps, ref } from "vue";

defineOptions({
  name: "TheThesis",
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
  img: {
    type: String,
  },
  content: {
    type: String,
  },
  pubDate: {
    type: String,
  },
  category: {
    type: String,
  },
  ai_tag: {
    type: String,
  },
  keywords: {
    type: String,
  },
  source_url: {
    type: String,
  },
  source_icon: {
    type: String,
  },
});

let getMore = ref(false);
</script>
 
 <style>
</style>