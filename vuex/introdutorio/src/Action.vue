<script>
import faker from 'faker'
import {mapGetters, mapMutations} from 'vuex'
import {ADD_BAD_TOMATO, ADD_RAND_TOMATO} from './mutation-types'

export default {
  name: 'Action',

  data () {
    return {
      tomato: {
        name: faker.name.firstName(),
        weight: faker.random.number(),
        good: true
      },
      user: {
        name: faker.name.firstName(),
        money: faker.random.number()
      },
      valor: 3
    }
  },

  mounted () {
    // setInterval(() => {
    //   this.$store.commit(ADD_RAND_TOMATO)
    // }, 2000)
  },

  computed: {
    ...mapGetters([
      'goodTomatoes',
      'badTomatoes',
      'allUsers'
    ])
  },

  methods: {
    addAndRandomUser () {
      this.$store.dispatch('addTheUser', this.user)
      this.user = {
        name: faker.name.firstName(),
        money: faker.random.number()
      }
    }
  }
}
</script>
<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="m0">Action</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <h5>Quantidade: {{$store.state.count}}</h5>
        <button class="btn btn-block" @click="$store.dispatch('increment')">Act Increment</button>
        <button class="btn btn-block btn-info" @click="$store.dispatch('incrementAsync')">Act IncrementAsync</button>
        <hr/>
        <input type="text" class="form-control" v-model="valor">
        <button class="btn btn-block btn-warning" @click="$store.dispatch('incrementWith', parseInt(valor))">
          Act IncrementAsync
        </button>
        <button class="btn btn-block btn-warning"
          @click="$store.dispatch({type: 'incrementWith', valor: parseInt(valor)})">
          Act IncrementAsync Object-style
        </button>
        <hr/>
        {{user.name}}
        <button class="btn btn-block btn-primary" @click="$store.dispatch('addTheUser', user)">
          Act addTheUser
        </button>
        <button class="btn btn-block btn-primary" @click=addAndRandomUser>
          Method addAndRandomUser
        </button>
      </div>
      <div class="col-md-2">
        <h4>Getter 'allUsers'</h4>
        <ul v-for="(user, index) in allUsers" :key="index">
          <li>
            Nome: {{user.name}}
            <br/>Valor: {{user.money}}
            <br/>Senha: {{user.password}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <h4>Getter 'goodTomatoes'</h4>
        <ul v-for="(tomato, index) in goodTomatoes" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <h4>Getter 'badTomatoes'</h4>
        <ul v-for="(tomato, index) in badTomatoes" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
