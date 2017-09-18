<template>
  <div id="app">
    {{msg}}
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader.vue';
import AppContent from './layout/AppContent.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AppHeader, AppContent, AppFooter
  },
  created: function () {
    Materialize.toast('Materialize rodando irmão', 1000);
  }
}
</script>

<style scoped>

</style>
