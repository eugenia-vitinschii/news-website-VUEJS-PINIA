<!-- skeleton -->
 <template>
  <div class="skeleton">
      <div class="skeleton__img shimmer">
      </div>
      <div class="skeleton__title shimmer"></div>
      <div class="skeleton__text shimmer"></div>
  </div> 
 </template>
 
 <script setup>
 //vue 
 import { defineOptions } from 'vue'

 //Component settings
 defineOptions({
   name: 'TheSkeleton'
 })

 </script>
 