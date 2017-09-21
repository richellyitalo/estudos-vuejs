<template>
    <span @click="showDetail">
        Server #{{ server.id }}
    </span>
</template>

<script>
import {eventBus} from '../../main'

export default {
  props: {
      server: {
          type: Object,
          required: true
      }
  },
  methods: {
      showDetail: function () {
          eventBus.$emit('showServerDetail', this.server)
      }
  }
}
</script>

<style scoped>
    span {
        display: block;
        cursor: pointer;
    }
    span:hover {
        font-weight: bold;
    }
</style>


