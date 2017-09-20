<template>
  <div id="app">
    <nav class="nav has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <a href="../index.html" class="nav-item">
            <h2>Vue.js na prática</h2>
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-active">
            Home
          </a>
          <a class="nav-item is-tab"></a>
        </div>
      </div>
    </nav>
    <div class="section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
