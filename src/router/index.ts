import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import Menu from '../views/Menu.vue';
import CheckPrice from '../views/CheckPrice.vue'
import BlueInput from '../views/BlueInput.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
    
  },
  { path: '/menu', component: Menu },
  {path: '/checkprice', component: CheckPrice },
  {path:'/blueinput', component:BlueInput}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
