<template>
  <!-- item for category pages list / grid -->
  <div class="category__item">
    <!-- category text div-->
    <div class="category__text">
      <!-- title -->
      <div class="category__text--title">
        <router-link :to="'/thesis/' + id">
          <p class="subheading link">
            {{ title }}
          </p>
        </router-link>
      </div>
      <div class="category__text--description">
        <p class="body-text text-limit">{{ description }}</p>
        <p class="body-text-category">{{ category }}</p>
        <p class="body-text-category">
          {{ ai_tag }}
        </p>
      </div>
    </div>
    <!-- category source img-->
    <div class="category__text--img">
        <a :href="source_url" target="_blank">
          <img :src="source_icon" alt="icon" />
        </a>
      </div>
    <!--category img div-->
    <div class="category__img grayscale">
     <img :src="img" 
      @error="$event.target.src='https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg'"/>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheCategory",
});

defineProps({
  id: {
    type: String,
    
  },
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  ai_tag: {
    type: String,
  },
  source_url: {
    type: String,
  },
  source_icon: {
    type: String,
  },
});
</script>
