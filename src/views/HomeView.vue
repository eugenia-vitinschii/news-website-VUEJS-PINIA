<template>
  <!-- home view news -->
  <div class="home">
    <div class="container">
      <div class="home__wrapper">
        <!-- filters -->
        <div class="home__filters">
          <input type="text" id="search-input" v-model="searchValue" placeholder="Search news" />
          <p class="body-text" v-show="searchValue.length > 0">
            {{ searchNewsByTitile.length }} result(s) for "{{ searchValue }}""
          </p>
        </div>
        <!-- items wrapper -->
        <div class="home__items masonry">
          <transition-group name="fade-items">
             <the-item 
                v-for="item in searchNewsByTitile" 
                :key="item.id" 
                :id="item.id" 
                :img="item.image_url"
                :title="item.title" 
                :description="item.description" 
                :pubDate="item.pubDate" 
                :category="item.category"
                :ai_tag="item.ai_tag" 
                :keywords="item.keywords" 
            />
            
          </transition-group>
        </div>
        <div class="home__items masonry" v-if="isLoading">
          <transition-group name="fade-items">
            <the-skeleton v-for="i in 5" :key="i" />
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, onMounted, watch, computed } from "vue";

//import components
import TheItem from "@/components/sections/TheItem.vue";
import TheSkeleton from "@/components/core/TheSkeleton.vue";

//pinia
import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";

//InfiniteScroll
import { useInfiniteScroll } from "@/composables/useInfiniteScroll";

//component settings
defineOptions({
  name: "HomeView",
});

//pinia news store
const store = useNewsStore();
const {  loadMore } = store;

//acctions & getters
const { searchNewsByTitile, searchValue  } = storeToRefs(store);

//variables
const isLoading = computed( () => store.isLoading)

useInfiniteScroll( () => {
  loadMore()
})

loadMore()

//wach news
watch(searchValue, () => {
  loadMore();
});

//hooks
onMounted( async() => {
  await loadMore();
});


</script>
