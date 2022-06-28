import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path:'/pioupiou',
    name:'Pioupiou',
    component:()=>import("../views/PiouPiou.vue")
  },
  {
    path:'/memories/:id',
    name:'memo',
    component:()=>import("../views/MemoriesPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
