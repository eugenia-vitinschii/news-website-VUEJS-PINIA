<template>
<!-- header -->
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <img src="@/assets/img/logo.jpg" alt="logo">
        </div>
        <div class="header__toggle">
          <button @click="theme.toggleTheme">{{ theme.currenTheme }}</button>
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

//theme
import { useThemeStore } from "@/stores/theme";
const theme = useThemeStore()

defineOptions({
  name: "TheHeader",
});

const showBurger = ref(false);

</script>