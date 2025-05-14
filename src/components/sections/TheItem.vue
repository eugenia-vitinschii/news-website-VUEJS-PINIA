<template>
  <div class="home__item masonry__item">
    <!-- home img -->
    <div class="home__img">
      <img :src="img" 
            @error="$event.target.src='https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg'"/>
    </div>
    <!-- home title -->
    <div class="home__text">
      <p class="body-text">{{ pubDate }}</p>
      <router-link :to="'/thesis/' + id">
        <p class="subheading link">
          {{ title }}
        </p>
      </router-link>
      <div class="thesis__info">
      <button 
      class="show-more"
       title="get more"
      @click="getMore = !getMore"
            :class="{active: getMore}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </button>

      <div 
      class="thesis__info--text"
      v-show="getMore"
      >

      <p class="body-text" v-if="category">category: {{ category }}</p>
      <p class="body-text" v-if="ai_tag">#{{ ai_tag }}</p>
      <p class="body-text" v-if="keywords">keywords: {{ keywords}}</p>
      </div>

    </div>
    </div>
    <!-- home info -->
      <div class="home__info">
        <p class="body-text text-limit">
          {{ description }}
        </p>
      </div>
    </div>
</template>

<script setup>
import { defineOptions, defineProps, ref } from "vue";

defineOptions({
  name: "TheItem",
});

defineProps({
  id: {
    type: String,
  },
  img: {
    type: String,
    default: require('@/assets/img/news.jpg'),
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  pubDate: {
    type: String,
  },
  category: {
    type: String,
  },
  ai_tag : {
    type: String,
  },
  keywords: {
    type: String,
  },
});

let getMore= ref(false)
</script>

<style>
</style>