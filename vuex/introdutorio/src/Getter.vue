<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Getter',

  computed: {
    ...mapGetters([
      'getTomatoes',
      'tomatoesById'
    ]),
    ...mapGetters({
      tomatoes: 'getTomatoes',
      sohOsBons: 'goodTomatoes',
      buscaPorId: 'tomatoesById'
    })
  },

  methods: {
    peloId (id) {
      return this.$store.getters.tomatoesById(id)
    }
  }
}
</script>
<template>
  <div>
    <div class="row">
      <div class="col-md-12"><h1>Getter</h1></div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <h4>Getter 'tomatoes'</h4>
        <ul v-for="(tomato, index) in tomatoes" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <h4>Getter 'getTomatoes'</h4>
        <ul v-for="(tomato, index) in getTomatoes" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <h4>Getter 'sohOsBons'</h4>
        <ul v-for="(tomato, index) in sohOsBons" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <h4>Getter método local 'tomatoesById'</h4>
        <ul v-for="(tomato, index) in tomatoesById(4)" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <h4>Getter método local 'tomatoesById'</h4>
        <ul v-for="(tomato, index) in buscaPorId(2)" :key="index">
          <li>
            Nome: {{tomato.name}}
            <br/>Peso: {{tomato.weight}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
