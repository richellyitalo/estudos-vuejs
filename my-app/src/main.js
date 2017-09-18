import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HelloWorldRouter from './components/HelloWorldRouter.vue'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'

var router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorldRouter },
    { path: '/cartoes', component: Card },
    { path: '/botoes', component: Buttons },
  ]
})

Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
