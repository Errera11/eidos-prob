import { routes } from '@/utils/routes.js'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/styles/index.scss'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount('#app')
