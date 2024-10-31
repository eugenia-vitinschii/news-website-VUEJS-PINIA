<template>
  <!-- home view news -->
  <div class="home">
    <div class="container">
      <div class="home__wrapper">
        <!-- filters -->
        <div class="home__filters">
          <input
            type="text"
            id="search-input"
            v-model="searchValue"
            placeholder="Search news"
          />
          <p class="body-text" v-show="searchValue.length > 0" >
            {{ filteredNews.length }} result(s) for "{{ searchValue }}""
          </p>
        </div>
        <div class="home__items" v-if="created">
          <the-item
            v-for="item in filteredNews"
            :key="item.title"
            :id="item.id"
            :img="item.image_url"
            :title="item.title"
            :description="item.description"
            :pubDate="item.pubDate"
            :category="item.category"
            :ai_tag="item.ai_tag"
            :keywords="item.keywords"
          />
        </div>
        <div class="home__button" v-if="store.complected">
           <button class="read-more" @click="loadMore()">read more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, onMounted, watch, ref, onUnmounted } from "vue";

//pinia
import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";

//import components
import TheItem from "@/components/sections/TheItem.vue";

defineOptions({
  name: "HomeView",
});

const store = useNewsStore();
const { fetchNews, loadMore } = store;
const { filteredNews } = storeToRefs(store);
const { searchValue } = storeToRefs(store);

 
let created = ref(false);

watch(searchValue, () => {
  fetchNews();
});

onUnmounted(() => {
  console.log(created.value, "clean news, onUnmounted");
  store.$reset();
});

//get news
onMounted(() => {
  created.value = true;
  console.log(created.value, "get news, unMounted");
  loadMore();
});

// onUnmounted(() =>{
//   console.log(created.value, 'onUnmounted')
// })
</script>
