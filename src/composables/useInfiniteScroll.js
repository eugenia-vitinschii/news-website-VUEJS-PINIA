//Infinite scroll.js

import { onMounted, onUnmounted } from "vue";

export function useInfiniteScroll (callback, offset = 200){
   const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.offsetHeight;

      if(scrollBottom >= docHeight - offset) {
         callback();
      }
   }

   onMounted(() => {
      window.addEventListener('scroll', handleScroll)
   });

   onUnmounted( () => {
      window.removeEventListener( 'scroll', handleScroll)
   })
}