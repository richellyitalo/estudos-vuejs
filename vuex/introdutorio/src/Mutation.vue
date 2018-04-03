<script>
import faker from 'faker'
import {mapGetters, mapMutations} from 'vuex'
import {ADD_BAD_TOMATO, ADD_RAND_TOMATO} from './mutation-types'

export default {
  name: 'Mutation',

  data () {
    return {
      tomato: {
        name: faker.name.firstName(),
        weight: faker.random.number(),
        good: true
      }
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
      'badTomatoes'
    ])
  },

  methods: {
    adicionarTomateBom () {
      this.$store.commit('addGoodTomato')
    },
    ...mapMutations([
      'addGoodTomato',
      'addTheTomato',
      ADD_BAD_TOMATO
    ]),
    ...mapMutations({
      addBom: 'addGoodTomato'
    })
  }
}
</script>
<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="m0">Mutation</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <button class="btn btn-danger btn-block">Adicionar Tomate Ruim</button>
        <button class="btn btn-success btn-block"
          @click="adicionarTomateBom">Add bom Método</button>
        <button class="btn btn-success btn-xs btn-block"
          @click="addGoodTomato">Adicionar Bom (mapMutations)</button>
        <button class="btn btn-success btn-xs btn-block"
          @click="addBom">Adicionar Bom (mapMutations custom)</button>
        <input type="text" class="form-control"
          v-model="tomato.name" placeholder="Nome"/>
        <input type="number" class="form-control"
          v-model="tomato.weight" placeholder="Nome"/>
        <label>Tomate bom?
          <input type="checkbox"
            v-model="tomato.good"/>
        </label>
        <button class="btn btn-info btn-xs btn-block"
            @click="addTheTomato(tomato)">Adicionar o tomate</button>
            <button class="btn btn-info btn-xs btn-block"
                @click="ADD_BAD_TOMATO(tomato)">Adicionar mals tomates</button>
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
