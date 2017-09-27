import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created: function () {
    console.log('Mixin Global');
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
