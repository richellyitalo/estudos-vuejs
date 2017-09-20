<template>
  <div @click="onMenuClick">
    <h1>{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Menu sem título'
    }
  },
  methods: {
    onMenuClick: function() {
      this.$emit('menu-click', 'Mensagem do emissor!');
    }
  }
}
</script>
