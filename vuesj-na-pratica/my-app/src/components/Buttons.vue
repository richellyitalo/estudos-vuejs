<template>
  <div>
    <a @click="callUsers" class="waves-effect waves-light btn">Chamar usuários</a>
    <a @click="countUsers" class="waves-effect waves-light btn"><i class="material-icons left">cloud</i> Contar Usuários</a>
    <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
    <a @click="resourceGet">resource-->get</a>

    <hr/>

    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
     return {
       users: null,
       resourceUser: this.$resource('user{/id}', null ,   {
         removerUsuario: {method: 'GET', url: '/user/foo/{/id}'}
       })
     }
  },
  methods: {
    callUsers: function() {
      this.$http({ url: '/users.json', method: 'GET' })
      .then(function(response) {
        console.log(response)
        this.users = response.data
      }, function (response) {
        Materialize.toast('Erro!', 1000);
      })
    },

    countUsers: function() {
      Materialize.toast(this.users.length, 1000);
    },

    resourceGet: function (){
      this.resourceUser.removerUsuario({id: 3})
      .then(function(response) {
        console.log(response);
      }, function(response) {
        console.log(response);
        Materialize.toast('Deu ruim!', 1000, 'red');
      })
    }
  }
}
</script>
