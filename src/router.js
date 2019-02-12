import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('./views/Weather.vue')
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/RandomPeople.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/MiniShop.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('./views/InfoTablePeople.vue')
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: () => import('./views/confirmOrderProduct.vue')
    },
    {
      path: '/diagrams',
      name: 'line-chart',
      component: () => import('./views/AgeDiagrams.vue')
    },

  ]
})
