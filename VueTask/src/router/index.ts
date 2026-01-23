import { createRouter, createWebHistory } from 'vue-router'

const Liste = () => import('../views/Liste.vue')
const ParametrePage = () => import('../views/ParametrePage.vue')

const routes = [
  { path: '/liste', name: 'Liste', component: Liste },
  { path: '/parametre', name: 'Parametre', component: ParametrePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
