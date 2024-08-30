import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/generators',
      name: 'generators',
      children: [
        {
          path: 'grid',
          name: 'grid',
          component: () => import('@/views/generators/GridGeneratorView.vue')
        },
        {
          path: 'form',
          name: 'form',
          component: () => import('@/views/generators/FormGeneratorView.vue')
        },
        {
          path: 'nav',
          name: 'nav',
          component: () => import('@/views/generators/NavGeneratorView.vue')
        }
      ]
    }
  ]
})

export default router
