import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Gallery from './pages/Gallery.vue'
import WorkDetail from './pages/WorkDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/gallery', name: 'gallery', component: Gallery },
    { path: '/work/:id', name: 'work', component: WorkDetail },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
