<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button v-show="!isLogged" @click="doLogin">Logar</button>
    
    <div v-show="isLogged">
      <painel></painel>
      <button @click="doLogout"> Sair</button>
      <button @click="loadUsers">Usuários</button>
      <button @click="loadProducts">Produtos</button>
      <button @click="loadSuppliers">Suplimentos</button>

      <hr/>

      <!-- produtos -->
      <div v-show="hasProducts">
        <h4>Produtos</h4>
        <button @click="emptyProducts"> Limpar produtos <small>Do state</small></button>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nome</td>
              <td>Qtd</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in getProducts">
              <td>{{p.id}}</td>
              <td>{{p.name}}</td>
              <td>{{p.quantity}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- suplimentos -->
      <div v-show="hasSuppliers">
        <h4>Produtos</h4>
        <table border="1" width="100%">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nome</td>
              <td>Qtd</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in getSuppliers">
              <td>{{s.id}}</td>
              <td>{{s.name}}</td>
              <td>{{s.quantity}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- users -->
      <div v-show="hasUsers">
        <h4>Produtos</h4>
        <table border="1" width="100%">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nome</td>
              <td>E-mail</td>
              <td>Gênero</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in getUsers">
              <td>{{u.id}}</td>
              <td>{{u.name}}</td>
              <td>{{u.email}}</td>
              <td>{{u.gender}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'

import Painel from './Painel.vue'

import {doLogin, doLogout} from './modules/login/actions'
import {isLogged} from './modules/login/getters'

import {loadProducts, emptyProducts} from './modules/product/actions'
import {getProducts, hasProducts} from './modules/product/getters'

import {loadSuppliers} from './modules/supplier/actions'
import {getSuppliers, hasSuppliers} from './modules/supplier/getters'

import {loadUsers} from './modules/user/actions'
import {getUsers, hasUsers} from './modules/user/getters'

export default {
  name: 'app',
  components: {
    Painel
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  vuex: {
    actions: {
        doLogin,
        doLogout,
        loadProducts,
        emptyProducts,
        loadSuppliers,
        loadUsers
    },
    getters: {
      isLogged,
      getProducts,
      hasProducts,
      getSuppliers,
      hasSuppliers,
      getUsers,
      hasUsers
    }
  },

  store
}
</script>

<style scoped>

</style>
