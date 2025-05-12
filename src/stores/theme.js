//theme.js
import {defineStore} from 'pinia';

//themeStore
export const useThemeStore = defineStore('theme', {
   state: () =>({
      currenTheme: localStorage.getItem('theme') || 'light'
   }),
   actions: {
      //togle
      toggleTheme() {
         this.currenTheme = this.currenTheme === 'light' ? 'dark' : 'light'
         localStorage.setItem('theme', this.currenTheme)
         document.documentElement.className = this.currenTheme
      },
      //set theme
      setTheme(theme) {
         this.currenTheme = theme
         localStorage.setItem('theme', theme)
         document.documentElement.className = theme
      },
      //init saved theme
      initTheme(){
         const savedTheme = localStorage.getItem("theme") || 'light'
         this.setTheme(savedTheme) 
      }
      
   }
})