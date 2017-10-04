import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { selector: to.hash }
      }
      return { x: 0, y: 0}
    }
  }
})

router.beforeEach((to, from, next) => {
    console.log('Global router each');
    next();
})

new Vue({
  router: router, 
  el: '#app',
  render: h => h(App)
})
