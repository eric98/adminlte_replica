import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cards from '@/components/Cards'
import Login from '@/components/Login'
import Landing from '@/components/Landing'
import MainLayout from '@/components/MainLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/cards',
          name: 'Cards',
          component: Cards
        },
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
