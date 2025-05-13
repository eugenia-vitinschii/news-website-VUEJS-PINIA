import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useNewsStore = defineStore("newsId", {
  state: () => ({
    news: [],
    searchValue: '',
    limit: 5,
    page: 1,
    complected: true,
    isLoading: false
  }),
  getters: {
    getNews(state){
      return state.news
    },
    filteredNews: (state) => {
      //for input
      if(state.searchValue != '' && state.searchValue ){
        state.news = state.news.filter((item) => {
          return item.title
          .toUpperCase()
          .includes(state.searchValue.toUpperCase())
        })
      }
         return state.news
    },
    sortByPriority: (state) => {
      return state.news.sort ((a , b)=> a.source_priority > b.source_priority ? 1 : -1)
    },
    //get news  by ai_tag
    getNewsByCategory: (state) =>{
      return (tag) => state.news.filter((item) => item.ai_tag === tag)
    },
    getTopNews: (state) =>{
      return state.news.filter((item) => item.category === 'top')
    } 
  },
  actions: {
    async fetchNews() {
      // get news from db.json
      try {
        const response = await axios.get(`${baseUrl}/news`);
        this.news = response.data;
      } catch (error) {
        console.error("fetchNews news error:", error);
      }
    },
    async loadMore() {
      // read more news from db.json
      if( this.isLoading || !this.complected) return;
      this.isLoading = true
      this.page++

      try {
        const response = await axios.get(`${baseUrl}/news?_page=${this.page}&_limit=${this.limit}`);
        if(response.data.length < this.limit){
         this.complected = false
        }
        await new Promise(response => setTimeout(response, 500));

        this.news.push(...response.data);
      } catch (error) {
        console.error("loadMore news error:", error);
      } finally{
        this.isLoading = false
      }
    },
    async fetchNewsById(id) {
      // get news from db.json by id
      try {
        const response = await axios.get(`${baseUrl}/news/${id}`);
        this.news = response.data;
      } catch (error) {
        console.error("fetchNewsById(id) error:", error);
      }
    },
  },
});
