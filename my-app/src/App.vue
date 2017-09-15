<template>
  <div id="app">
    <my-menu title="Meu Primeiro Componente">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </my-menu>

    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import MyMenu from './MyMenu.vue';

export default {
  name: 'app',
  components: {
    MyMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
