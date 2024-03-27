import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateInviteView from '../views/UpdateInviteView.vue'
import StatistiqueView from '../views/StatistiqueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/update/:id/:appelation/:numero/:status/:email/:sexe/:is_boursier/:is_entry',
      component: UpdateInviteView
    },
    {
      path: '/statistique',
      component: StatistiqueView
    }
  ]
})

export default router
