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
      path: '/faq',
      name: 'faq',
      component: () => import('./views/Faq.vue')
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
    }

  ]
})
