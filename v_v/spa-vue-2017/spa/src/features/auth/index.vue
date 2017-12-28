<script>
import axios from 'axios'
import localforage from 'localforage'
import { mapActions } from 'vuex'

export default {
  name: 'Authentication',
  data () {
    return {
      email: 'vedovelli@gmail.com',
      password: '123456'
    }
  },
  mounted () {
    if (window.location.search.indexOf('expired=true') > -1) {
      this.$bus.$emit('display-alert', {
        type: 'error',
        message: 'Login expirado. Favor logar novamente.'
      })
    }
  },
  methods: {
    ...mapActions(['setToken']),
    // aqui usando o ES6 com promessas (async-await)
    async login () {
      try {
        const { email, password } = this

        const response = await axios.post(
          '/autenticacao',
          { email, password }
        )

        const { token } = response.data
        localforage.setItem('token', token)
          .then((token) => {
            this.setToken({ token })
            this.$router.push({ name: 'index' })
          })
      } catch (error) {
        console.warn(error)
      }
    }
    /*
    // Maneira utilizada tratando a promessa pelo próprio axios
    login () {
      const { email, password } = this
      const payload = { email, password }
      const url = 'http://localhost:3456/autenticacao'
      axios.post(url, payload)
        .then(this.successHandler)
        .catch(this.errorHandler)
    },
    successHandler (res) {
      const { token } = res.data
      localforage.setItem('token', token)
    },
    errorHandler (error) {
      console.warn(error)
    }
    */
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

