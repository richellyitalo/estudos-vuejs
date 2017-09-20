<template>
  <div>
    <h3>Contador é {{getCount}}</h3>
  </div>
</template>

<script>

import { getCount } from './getters'

export default {
  vuex: {
    getters: {
      getCount
    }
  }  
}
</script>
