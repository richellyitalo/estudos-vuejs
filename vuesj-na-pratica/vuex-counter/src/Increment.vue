<template>
<div>

  <div>
    <button @click="tryIncrementCounter">+1</button>
    <button @click="decrementCounter">-1</button>
  </div>
  
  <div>
    <input type="text" v-model="incrementValue">
    <button @click="tryIncrementCountWithValue">Adicionar</button>
  </div>

  <message>Formulando contagem...</message>

</div>
</template>

<script>
import Message from './Message.vue'
import { incrementCounter, decrementCounter, incrementCounterWithValue } from './actions'

export default {
  vuex: {
    actions: {
      incrementCounter, decrementCounter, incrementCounterWithValue
    }/*,
    getters: {
      getShowWaitMessage
    }*/
  },
  data() {
    return {
      incrementValue: 0,
      waitMessage: false
    }
  },
  components: {
    Message
  },
  methods: {
    tryIncrementCounter() {
      // let t = this
      // t.waitMessage = true
      // this.incrementCounter(() => {
      //   t.waitMessage = false
      // })

      this.incrementCounter()
    },
    tryIncrementCountWithValue() {
      try {
        this.incrementCounterWithValue(this.incrementValue)
      } catch(error) {
        alert(error)
      }
    }
  }
}
</script>

