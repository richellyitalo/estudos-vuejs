// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex, { mapState, mapGetters } from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    users: [
      {name: 'jao', money: 1},
      {name: 'Pedrao', money: 1},
      {name: 'Maria', money: 2},
      {name: 'Zezin', money: 3}
    ]
  },
  // MUDATIONS
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      if (state.count > 0) {
        state.count--
      }
    }
  },

  // GETTERS
  getters: {
    moreThanOne: state => {
      return state.users.filter(user => user.money > 1)
    },
    moreThanOneCount: (state, getters) => {
      return getters.moreThanOne.length
    },
    queryUser: (state) => (key) => {
      return state.users.filter(user => user.name.indexOf(key) >= 0)
    }
  }
})

store.commit('increment')
console.warn(store.state.count)

// Exemplo #1 estrutura simples
const Test = {
  template: '<h3>Quantidade: {{quantidade}}</h3>',
  computed: {
    quantidade () {
      return store.state.count
    }
  }
}

const Counter = {
  data () {
    return {
      query: 'j'
    }
  },
  template: `
    <div>
      Quantidade: {{ count }}
      <button @click=up>Up</button>
      <button @click=down>Down</button>
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
      </ul>
      <!--<br/>Com dados locais (+3): {{ countComDadosLocais }}-->
    </div>
  `,
  methods: {
    up () {
      this.$store.commit('increment')
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
