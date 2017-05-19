import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Eveluation from '@/components/Eveluation/Eveluation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/1',
      name: 'Eveluation',
      component: Eveluation
    }
  ]
})
