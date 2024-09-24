import { defineStore } from "pinia";
import axios from "axios";


const baseUrl = "http://localhost:3000";

export const useNewsStore = defineStore("newsId", {
   state: () => ({
      news: [],
   }),
   actions: {
      async fetchNews(){
         // get news from db.json
         try {
            const response = await axios.get(`${baseUrl}/news`);
            this.news= response.data;
         }
         catch(error) {
            alert(error)
            console.log(error)
         }
      }
   }
})