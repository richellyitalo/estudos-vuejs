<template>
  <div id="app">
    <display></display>
    <increment></increment>
  </div>
</template>

<script>
import Display from './Display.vue'
import Increment from './Increment.vue'
import store from './store'

export default {
  name: 'app',
  components: {
    Display, Increment
  },
  store
}
</script>