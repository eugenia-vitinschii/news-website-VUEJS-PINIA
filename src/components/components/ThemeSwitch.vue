<template>
<!-- Theme Switch --> 
<label class="switch">
   <input 
   type="checkbox"
   v-model="isDark"
   @change="toggleTheme"
   >
   <span class="switch__slider"></span>
</label>
</template>

<script setup>
//vue 
import { defineOptions, ref, watch } from 'vue'

//pinia
import { useThemeStore } from '@/stores/theme';

//Component settings
defineOptions({
  name: 'ThemeSwitch'
})

//variables
const  themeStore = useThemeStore()
const isDark = ref(themeStore.currenTheme === 'dark')

//change Theme
function toggleTheme(){
   themeStore.toggleTheme()
}

watch( () => themeStore.currenTheme, (val) => {
   isDark.value = val === 'dark'
})
</script>
