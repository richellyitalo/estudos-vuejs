<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Loja de Estoque</router-link> 
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link activeClass="active" tag="li" to="/portfolio"><a>Portfolio</a></router-link>
          <router-link activeClass="active" tag="li" to="/stocks"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">{{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">Finalizar dia</a>
          </li>
          <li 
            class="dropdown"
            :class="{open: isDropDownOpen}">
            <a 
              href="#" 
              class="dropdown-toggle" 
              data-toggle="dropdown" 
              role="button" 
              aria-haspopup="true" 
              aria-expanded="false"
              @click="isDropDownOpen = !isDropDownOpen">Salvar e carregar<span class="caret"></span></a>
            <ul 
              class="dropdown-menu">
              <li><a href="#" @click="saveData">Salvar dados</a></li>
              <li><a href="#" @click="loadData">Carregar dados</a></li>
            </ul>
          </li>
        </ul>
      </div>
      
    </div>
    
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      isDropDownOpen: false
    }
  },
  computed: {
    funds: function () {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay: function () {
      this.randomizeStocks();
    },
    saveData: function () {
      const data = {
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio,
        funds: this.$store.getters.funds
      };
      this.$http.put('data.json', data);
    },
    loadData: function () {
      this.fetchData();
    }
  }
}
</script>
