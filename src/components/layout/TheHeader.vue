<template>
<!-- header -->
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"/></svg>
          </router-link>
        </div>
        <div class="header__toggle">
          
        </div>
        <nav class="header__nav" :class="{ active: showBurger }">
          <ul v-on:click="showBurger = !showBurger">
            <li><router-link class="header__link" to="/">Home</router-link></li>
            <li><router-link class="header__link" to="/all">All</router-link></li>
            <li><router-link class="header__link" to="/top">Top</router-link></li>
            <li><router-link class="header__link" to="/celebrity">Celebrity</router-link></li>
            <li><router-link class="header__link" to="/sports">Sport</router-link></li>
            <li><router-link class="header__link" to="/politics">Politics</router-link></li>
            <li><router-link class="header__link" to="/television">Television</router-link></li>
            <li><router-link class="header__link" to="/entertainment">Entertainment</router-link></li>
            <li>
               <theme-switch/>
            </li>
          </ul>
         
        </nav>
      </div>
    </div>
  </div>
    <!-- burger button -->
    <div
    class="burger"
    v-on:click="showBurger = !showBurger"
    v-bind:class="{ active: showBurger }"
  >
    <span></span>
  </div>
</template>



<script setup>
import { defineOptions, ref } from "vue";

//components
import ThemeSwitch from "../components/ThemeSwitch.vue";

defineOptions({
  name: "TheHeader",
});

const showBurger = ref(false);

</script>