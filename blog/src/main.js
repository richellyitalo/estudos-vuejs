// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyChhlC_sT7sXRuVd0ratyc819XJPFLBui0",
  authDomain: "estudando-vuejs.firebaseapp.com",
  databaseURL: "https://estudando-vuejs.firebaseio.com",
  projectId: "estudando-vuejs",
  storageBucket: "",
  messagingSenderId: "428013007053"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

require('../node_modules/bulma/css/bulma.css')
require('./bradcomp.js')
