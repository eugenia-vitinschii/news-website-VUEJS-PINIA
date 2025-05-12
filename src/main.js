import './assets/sass/app.sass'

 
import {createPinia} from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { useThemeStore } from './stores/theme';


createApp(App).use(createPinia()).use(router).mount('#app')


useThemeStore().initTheme()