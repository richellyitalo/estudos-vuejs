<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        {{ stock.name }}
        <small>(Price: {{ stock.price | currency }})</small>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number"
            class="form-control"
            placeholder="Quantidade"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
            >
        </div>
        <div class="pull-right">
          <button 
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(parseInt(quantity))">
            {{ insufficientFunds ? 'Sem saldo' : 'Comprar' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border-color: tomato;
}
</style>


<script>
export default {
  props: ['stock'],
  data: function () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds: function () {
      return this.$store.getters.funds;
    },
    insufficientFunds: function () {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock: function () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order);
    }
  }
}
</script>

