import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const mutation = () => import('@/Mutation')
const getter = () => import('@/Getter')
const action = () => import('@/Action')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/getter',
      name: 'getter',
      component: getter
    },
    {
      path: '/mutation',
      name: 'mutation',
      component: mutation
    },
    {
      path: '/action',
      name: 'action',
      component: action
    }
  ]
})
