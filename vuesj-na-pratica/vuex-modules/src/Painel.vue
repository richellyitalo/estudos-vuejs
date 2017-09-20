<template>
  
  <ul>
    <li> usu. {{getQtdUsers}}</li>
  </ul>
</template>


<script>
import {getQtdUsers} from './modules/user/getters'

export default {
  vuex: {
    getters: {
      getQtdUsers
    }
  }  
}
</script>
