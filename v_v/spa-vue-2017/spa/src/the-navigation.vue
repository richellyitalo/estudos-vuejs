<script>
export default {
  computed: {
    shouldDisplayNavigation () {
      return this.$route.name !== 'auth.index'
    }
  }
}
</script>

<template>
  <div>
    <nav class="navbar navbar-default" v-show="shouldDisplayNavigation">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" :to="{ name: 'dashboard.index' }">SPA com VueJS</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{ name: 'dashboard.index' }">Dashboard</router-link></li>
            <li><router-link :to="{ name: 'categories.index' }">Categorias</router-link></li>
            <li><router-link :to="{ name: 'users.index' }">Usuários</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Sair</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
  </div>
</template>

