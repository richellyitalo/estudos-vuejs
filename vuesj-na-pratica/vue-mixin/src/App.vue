<template>
  <div id="app">
    <comp1></comp1>
    <comp2></comp2>
    <comp3></comp3>
  </div>
</template>

<script>
import Comp1 from './Comp1.vue'
import Comp2 from './Comp2.vue'
import Comp3 from './Comp3.vue'
import {eventMixin} from './eventMixin'

export default {
  name: 'app',
  components: {
    Comp1, Comp2, Comp3
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mixins: [eventMixin],
  created: function() {
    console.log('App main')
  }
}
</script>

<style scoped>
</style>
