import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/index/index.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})