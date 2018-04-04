// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Vuex, { mapState, mapGetters, mapMutations } from 'vuex'
import faker from 'faker'
import { ADD_BAD_TOMATO, ADD_RAND_TOMATO } from './mutation-types'
import axios from 'axios'

import '@/assets/app.sass'

window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')

Vue.config.productionTip = false

Vue.use(Vuex)

const getTomatoGood = () => {
  return axios.get('https://makemeapassword.org/api/v1/pronouncable/json?c=1&sc=5')
    .then(r => {
      const password = r.data.pws[0]
      return {id: 1, name: password, weight: 30, good: true}
    })
}

const getTomatoBad = () => {
  return axios.get('https://makemeapassword.org/api/v1/pronouncable/json?c=1&sc=5')
    .then(r => {
      const password = r.data.pws[0]
      return {id: 1, name: password, weight: 30, good: false}
    })
}

const store = new Vuex.Store({
  state: {
    count: 0,
    users: [
      {name: 'jao', money: 1, password: '123'},
      {name: 'Pedrao', money: 1, password: '123'},
      {name: 'Maria', money: 2, password: '123'},
      {name: 'Zezin', money: 3, password: '123'}
    ],
    tomatoes: [
      {id: 1, name: 'Bob', weight: 30, good: true},
      {id: 2, name: 'Jack', weight: 50, good: false},
      {id: 3, name: 'Frank', weight: 85, good: false},
      {id: 4, name: 'Symon', weight: 25, good: true}
    ]
  },

  // GETTERS
  getters: {
    allUsers (state) {
      return state.users
    },
    moreThanOne: state => {
      return state.users.filter(user => user.money > 1)
    },
    moreThanOneCount: (state, getters) => {
      return getters.moreThanOne.length
    },
    queryUser: (state) => (key) => {
      return state.users.filter(user => user.name.indexOf(key) >= 0)
    },
    getTomatoes (state) {
      return state.tomatoes
    },
    tomatoesById: (state) => (id) => {
      return [state.tomatoes.find(tomatoe => tomatoe.id === id)]
    },
    goodTomatoes (state) {
      return state.tomatoes.filter(tomatoe => tomatoe.good)
    },
    badTomatoes (state) {
      return state.tomatoes.filter(tomatoe => !tomatoe.good)
    }
  },

  // MUDATIONS
  mutations: {
    addGoodTomato (state) {
      const tomato = {
        name: faker.name.firstName(),
        weight: faker.random.number(),
        good: true
      }
      state.tomatoes.push(tomato)
    },
    addBadTomato (state) {
      const tomato = {
        name: faker.name.firstName(),
        weight: faker.random.number(),
        good: false
      }
      state.tomatoes.push(tomato)
    },
    [ADD_RAND_TOMATO] (state) {
      const tomato = {
        name: faker.name.firstName(),
        weight: faker.random.number(),
        good: true
      }
      state.tomatoes.push(tomato)
    },
    addTheTomato (state, payload) {
      // com spread
      state.tomatoes.push({...payload})
    },

    [ADD_BAD_TOMATO] (state, payload) {
      state.tomatoes.push({...payload, good: false})
    },

    increment (state) {
      state.count++
    },
    increment10 (state) {
      state.count += 10
    },
    increment10Delay (state) {
      state.count += 10
    },
    incrementComPayload (state, n) {
      state.count += n
    },
    incrementComPayloadObjeto (state, n) {
      state.count += n.valor
    },
    decrement (state) {
      if (state.count > 0) {
        state.count--
      }
    },
    addUser (state) {
      state.users.push({name: faker.name.findName(), money: 5})
    },
    ADD_USER_RICH (state) {
      state.users.push({name: faker.name.findName(), money: 10})
    },
    addTheUser (state, payload) {
      state.users.push({...payload})
    },
    ADD_TOMATO: function (state, payload) {
      state.tomatoes.push(payload)
    }
  },

  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    },
    incrementWith (context, payload) {
      context.commit('incrementComPayload', payload)
    },
    addTheUser (context, payload) {
      context.commit('increment')
      axios.get('https://makemeapassword.org/api/v1/pronouncable/json?c=1&sc=5')
        .then(r => {
          const password = r.data.pws[0]
          Vue.set(payload, 'password', password) // ou {...payload, password}
          // ou também context.commit('addTheUser', {...payload, password})
          context.commit('addTheUser', payload)
        })
        .catch(r => {
          alert('DEU RUIM')
        })
    },
    incrementPromise (context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment')
          resolve()
          // reject(new Error('DEU_RUIM'))
        }, 1000)
      }
      )
    },
    subIncrementPromise (context) {
      return context.dispatch('incrementPromise').then(() => {
        context.commit('increment10')
      })
    },
    // async await
    async addGoodTomato (context) {
      context.commit('addTheTomato', await getTomatoGood())
    },
    async addBadTomato (context) {
      await context.dispatch('addGoodTomato')
      context.commit('addTheTomato', await getTomatoBad())
    }
  }
})

store.commit('increment')
// console.warn(store.state.count)

// Exemplo #1 estrutura simples
// const Test = {
//   template: '<h3>Quantidade: {{quantidade}}</h3>',
//   computed: {
//     quantidade () {
//       return store.state.count
//     }
//   }
// }

const Counter = {
  data () {
    return {
      query: 'j'
    }
  },
  template: `
    <div class="container-fluid">
      <div class="text-center">
        <h3>Navegação</h3>
        <ul class="list-inline">
          <li>
            <router-link :to="{name: 'getter'}">Getter</router-link>
          </li>
          <li>
            <router-link :to="{name: 'mutation'}">Mutation</router-link>
          </li>
          <li>
            <router-link :to="{name: 'action'}">Action</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <!--Quantidade: {{ count }}
      <button @click=up>Up</button>
      <button @click=up>Up#2</button>
      <button @click=upComValor>Up#Payload</button>
      <button @click=upComValor2>Up#Payload#2</button>
      <button @click=down>Down</button>
      <hr/>
      <button @click=addUser>Adicionar usuário</button>
      <button @click=addUserMaior>Adicionar usuário rico</button>
      <h4>Total de usuários: {{ usersCount }}</h4>
      <ul>
        <li v-for="user in users">
          {{user.name + ' money: ' + user.money}}
        </li>
      </ul>

      <h4>Busca por usuário</h4>
      <input v-model=query />
      <ul>
        <li v-for="user in queryUsuario">
          {{user.name + ' money: ' + user.money}}
        </li>
      </ul>-->
      <!--<br/>Com dados locais (+3): {{ countComDadosLocais }}-->
    </div>
  `,
  // methods: mapMutations([
  //   'addUser'
  // ]),
  methods: {
    ...mapMutations([
      'addUser'
    ]),
    ...mapMutations({
      addUserMaior: 'ADD_USER_RICH'
    }),
    up () {
      this.$store.commit('increment')
    },
    up2 () {
      this.$store.commit({type: 'increment'})
    },
    upComValor () {
      this.$store.commit('incrementComPayload', 4)
    },
    upComValor2 () {
      this.$store.commit({type: 'incrementComPayloadObjeto', valor: 5})
    },
    down () {
      this.$store.commit('decrement')
    }
  },
  // COMPUTED manual
  // computed: mapState({
  //   count: state => state.count,

  //   countAlias: 'count',

  //   countComDadosLocais (state) {
  //     return state.count + 3
  //   }
  // }),
  computed: {
    ...mapState([
      'count'
    ]),

    // GETTERS MANUAIS
    // users () {
    //   return this.$store.getters.moreThanOne
    // },

    // usersCount () {
    //   return this.$store.getters.moreThanOneCount
    // },

    // queryUsuario () {
    //   return this.$store.getters.queryUser(this.query)
    // }
    ...mapGetters({
      users: 'moreThanOne',
      usersCount: 'moreThanOneCount'
    }),
    queryUsuario () {
      return this.$store.getters.queryUser(this.query)
    }
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Counter },
  template: '<Counter />'
})
