import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('currency', function (value) {
  return 'R$' + value .toLocaleString();
})

Vue.http.options.root = 'https://vuejs-stock-trader-4b128.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
