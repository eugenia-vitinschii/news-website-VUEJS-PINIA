<template>
  <div class="all" v-if="created">

  
   <!-- Celebrityy News -->
   <div class="article">
     <div class="container">
       <div class="article__wrapper">
         <the-article-title
           @openLink()="$router.push('celebrity')"
           :articleHeader="'Celebrity'"
         />
         <div class="article__items">
           <the-article
             v-for="item in getNewsByCategory('celebrity')"
             :key="item.id"
             :category="item.category"
             :id="item.id"
             :title="item.title"
             :description="item.description"
             :source_icon="item.source_icon"
             :source_url="item.source_url"
             :ai_tag="item.ai_tag"
             :keywords="item.keywords"
             :img="item.image_url"
             :creator="item.creator"
             :country="item.country"
           />
         </div>
       </div>
     </div>
   </div>
   <!-- Sport News -->
   <div class="article">
     <div class="container">
       <div class="article__wrapper">
         <the-article-title
           @openLink()="$router.push('sport')"
           :articleHeader="'sport'"
         />
         <div class="article__items">
           <the-article
             v-for="item in getNewsByCategory('sports')"
             :key="item.id"
             :category="item.category"
             :id="item.id"
             :title="item.title"
             :description="item.description"
             :source_icon="item.source_icon"
             :ai_tag="item.ai_tag"
             :keywords="item.keywords"
             :img="item.image_url"
             :creator="item.creator"
           />
         </div>
       </div>
     </div>
   </div>
   <!-- Politics News -->
   <div class="article">
     <div class="container">
       <div class="article__wrapper">
         <the-article-title
           @openLink()="$router.push('politics')"
           :articleHeader="'politics'"
         />
         <div class="article__items">
           <the-article
             v-for="item in getNewsByCategory('politics')"
             :key="item.id"
             :category="item.category"
             :id="item.id"
             :title="item.title"
             :description="item.description"
             :source_icon="item.source_icon"
             :ai_tag="item.ai_tag"
             :keywords="item.keywords"
             :img="item.image_url"
             :creator="item.creator"
           />
         </div>
       </div>
     </div>
   </div>
   <!-- Television News -->
   <div class="article">
     <div class="container">
       <div class="article__wrapper">
         <the-article-title
           @openLink()="$router.push('television')"
           :articleHeader="'television'"
         />
         <div class="article__items">
           <the-article
             v-for="item in getNewsByCategory('television')"
             :key="item.id"
             :category="item.category"
             :id="item.id"
             :title="item.title"
             :description="item.description"
             :source_icon="item.source_icon"
             :ai_tag="item.ai_tag"
             :keywords="item.keywords"
             :img="item.image_url"
             :creator="item.creator"
           />
         </div>
       </div>
     </div>
   </div>
   <!-- Cricket News -->
   <div class="article">
     <div class="container">
       <div class="article__wrapper">
         <the-article-title
           @openLink()="$router.push('entertainment')"
           :articleHeader="'Entertainment'"
         />
         <div class="article__items">
           <the-article
             v-for="item in getNewsByCategory('entertainment')"
             :key="item.id"
             :category="item.category"
             :id="item.id"
             :title="item.title"
             :description="item.description"
             :source_icon="item.source_icon"
             :ai_tag="item.ai_tag"
             :keywords="item.keywords"
             :img="item.image_url"
             :creator="item.creator"
           />
         </div>
       </div>
     </div>
   </div>
  </div>
 </template>
 
 <script setup>
 //vue
 import { defineOptions, onMounted, ref, onUnmounted } from "vue";
 
 //pinia
 import { useNewsStore } from "@/stores/news";
 import { storeToRefs } from "pinia";
 
 //import components
 import TheArticleTitle from "@/components/core/TheArticleTitle.vue";
 import TheArticle from "@/components/sections/TheArticle.vue";
 
 
 defineOptions({
   name: "AllView",
 });
 
 const store = useNewsStore();
 
 const { getNewsByCategory } = storeToRefs(store);
 
 const { fetchNews } = store;
 
 let created = ref(false);

 onUnmounted(() => {
  console.log('clean all, onUnmounted')
  store.$reset()
}) 
 //get news
 onMounted(() => {
  created.value = true
  console.log(created.value, 'get all,  onMounted')
   fetchNews()
 });
 </script>
 
 