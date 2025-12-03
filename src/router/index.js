import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StartCodingPath from '../views/StartCodingPath.vue'
import ProFeaturesPath from '../views/ProFeaturesPath.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/start-coding',
    name: 'StartCoding',
    component: StartCodingPath
  },
  {
    path: '/pro-features',
    name: 'ProFeatures',
    component: ProFeaturesPath
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
