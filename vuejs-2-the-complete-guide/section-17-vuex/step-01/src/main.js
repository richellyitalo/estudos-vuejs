import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store'

new Vue({
  el: '#app',
  store: store, // ou apenas 'store,'
  render: h => h(App)
})
