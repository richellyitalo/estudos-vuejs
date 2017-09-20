<template>
  <div>
    <strong v-show="getShowWaitMessage"><slot>Carregando...</slot></strong>
  </div>
</template>

<script>
import { getShowWaitMessage } from './getters'

export default {
  vuex: {
    getters: {
      getShowWaitMessage
    }
  }
}
</script>

