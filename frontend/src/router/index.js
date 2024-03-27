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
      path: '/update/:_id/:nom/:prenom/:telephone/:status/:email/:sexe/:boursier/:present',
      component: UpdateInviteView
    },
    {
      path: '/statistique',
      component: StatistiqueView
    }
  ]
})

export default router
