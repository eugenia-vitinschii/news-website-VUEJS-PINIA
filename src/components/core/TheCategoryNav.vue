<template>
<!-- category nav  go-back & category name-->
    <div class="category__nav--back">
      <button class="button-svg" @click="$router.go(-1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>
    </div>
    <div class="category__nav--title">
      <h1 class="heading-category">{{ category }}</h1>
    </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheCategoryNav",
});

defineProps({
  category: {
    type: String
  }
})

</script>

<style>
</style>