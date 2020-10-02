/* eslint-disable quotes */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    alias: '/Dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard')
  },
  {
    path: '/Overload',
    name: 'Overload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Overload" */ '@/views/Overload')
  },
  {
    path: '/Price-Check',
    name: 'Pricecheck',
    component: () => import(/* webpackChunkName: "Pricecheck" */ '@/views/Pricecheck')
  },
  {
    path: '/Alog',
    name: 'Alog',
    component: () => import(/* webpackChunkName: "Pricecheck" */ '@/views/Alog')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
