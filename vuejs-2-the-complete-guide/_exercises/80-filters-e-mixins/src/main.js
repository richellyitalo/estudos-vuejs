import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

Vue.mixin({
    computed: {
        textCountedMixin: function () {
            return this.text + ' (' + ( this.text.length ) + ')';
        } 
    }
});

Vue.filter('showCount', function (value) {
    return value + ' (' + ( value.length ) + ')';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
