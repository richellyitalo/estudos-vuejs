<script>
export default {
  mounted () {
    this.$bus.$on('display-alert', obj => {
      const { type, message } = obj
      this.messages[type] = message
    })
    this.$bus.$on('clear-alerts', () => {
      this.messages.success = ''
      this.messages.error = ''
    })
  },
  data () {
    return {
      messages: {
        success: '',
        error: ''
      }
    }
  },
  computed: {
    shouldDisplaySuccessMessage () {
      return this.messages.success !== ''
    },
    shouldDisplayErrorMessage () {
      return this.messages.error !== ''
    }
  },
  methods: {
    close (type) {
      this.messages[type] = ''
    }
  }
}
</script>

<template>
  <div>
    <div
      v-show="shouldDisplaySuccessMessage"
      class="alert alert-success alert-dismissible">
      <button @click="close('success')" type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ messages.success }}
    </div>
    <div
      v-show="shouldDisplayErrorMessage"
      class="alert alert-danger alert-dismissible">
      <button @click="close('error')" type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ messages.error }}
    </div>
  </div>
</template>

