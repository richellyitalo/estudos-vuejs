// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TheContainer from './the-container'
import router from './router'
import eventBus from './plugins/event-bus'

Vue.config.productionTip = false

Vue.use(eventBus)

window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<the-container></the-container>',
  components: { TheContainer }
})
