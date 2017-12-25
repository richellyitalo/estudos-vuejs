<script>
import axios from 'axios'

export default {
  name: 'Categories',
  mounted () {
    const url = 'http://localhost:3456/categoria'
    axios
      .get(url)
      .then(this.successHandler)
      .catch(this.errorHandler)
  },
  methods: {
    successHandler (res) {
      console.log(res.data)
    },
    errorHandler (error) {
      console.warn(error)
    }
  }
}
</script>

<template>
  <div>
    <h1>Sou um componente Cat</h1>
  </div>
</template>
