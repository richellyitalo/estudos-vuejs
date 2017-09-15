<template>
  <h1>{{title}}</h1>
  <div>
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
  }
}
</script>
