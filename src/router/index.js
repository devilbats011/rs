/* eslint-disable quotes */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Dashboard from '@/views/Dashboard'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
