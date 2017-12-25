<script>
import axios from 'axios'

export default {
  name: 'Authentication',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { email, password } = this
      const payload = { email, password }
      const url = 'http://localhost:3456/autenticacao'
      axios.post(url, payload)
        .then(this.successHandler)
        .catch(this.errorHandler)
    },
    successHandler (res) {
      console.warn(res.data)
    },
    errorHandler (error) {
      console.warn(error)
    }
  }
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form class="well top50" @submit.prevent="login">
          <div class="form-group">
            <label class="control-label">E-mail</label>
            <input v-model="email" type="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="control-label">Senha</label>
            <input v-model="password" type="password" class="form-control">
          </div>
          <div class="text-right">
            <button class="btn btn-primary btn-xs" type="submit">Logar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top50 {
  margin-top: 50px;
}
</style>

