<template>
    <div>
        <h3>Some User Details</h3>
        <p>Usuário carregado tem o ID {{ $route.params.id }}</p>
        <router-link
            tag="button"
            :to="link"
            class="btn btn-primary">Editar</router-link>
        <hr>
    </div>
</template>

<script>
export default {
  data: function () {
      return {
          link: {
            name: 'userEdit', 
            params: { id: this.$route.params.id }, 
            query: { locale: 'en', q: 1000},
            hash: '#data'
          }
      }
  },
  beforeRouteEnter: function(to, from, next) {
      console.log('Dentro de componente');
      next(true);
    //   next(vm => {
    //       console.log(vm.link);
    //   });
  }
}
</script>
