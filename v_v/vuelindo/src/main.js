require('./primeiro')
require('./segundo')

const app = new Vue({
  el: '#app',
  data: {
    title: 'Working!',
    visible: true,
    error: true
  }
})