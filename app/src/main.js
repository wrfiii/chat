import { createApp } from 'vue'
import router from './router/index';
import App from './App.vue'
import 'rest-css';
import './assets/css/index.css'
import IconSvg from './icons/index'

createApp(App).component('svg-icon',IconSvg).use(router).mount('#app')