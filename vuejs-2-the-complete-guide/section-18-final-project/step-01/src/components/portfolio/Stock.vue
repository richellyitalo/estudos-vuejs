<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        {{ stock.name }}
        <small>(Preço: {{ stock.price | currency }} | Quantidade: {{ stock.quantity }})</small>
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
            @click="sellStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(parseInt(quantity))">
            {{ insufficientFunds ? 'Sem estoque' : 'Vender' }}
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
import { mapActions } from 'vuex';

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
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock: function () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

