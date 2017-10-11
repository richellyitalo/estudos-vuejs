<template>
  <div>
    <h1>Gerencie suas vendas</h1>
    <h6>Finalize o dia clicando no botão 'Finalizar Dia' e comece um novo.</h6>

    <h6>Fundos: {{ funds | currency }}</h6>
  </div>
</template>

<script>
export default {
  computed: {
    funds: function () {
      return this.$store.getters.funds;
    }
  }
}
</script>
