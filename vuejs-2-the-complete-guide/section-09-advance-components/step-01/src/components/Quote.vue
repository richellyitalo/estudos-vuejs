<template>
    <div>
        <h1>Quote</h1>
        {{ increase }}
        <button @click="increase++">Aumentar</button>
    </div>
</template>
<script>
export default {
  data: function () {
      return {
          increase: 1
      }
  },
  destroyed: function () {
      console.log('destruido')
  },
  deactivated: function () {
      console.log('deactivated')
  },
  activated: function () {
      console.log('activated')
  }
}
</script>
