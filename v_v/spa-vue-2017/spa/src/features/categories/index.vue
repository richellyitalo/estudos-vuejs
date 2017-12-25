<script>
import http from '@/services/http'

export default {
  name: 'Categories',
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    const response = await http.get('/categoria')
    if (response != null) {
      this.list = response.data.categories
    }
  },
  methods: {
    navigation (route) {
      this.$router.push({ name: route })
    }
  },
  computed: {
    shouldDisplayNew () {
      return this.$route.name === 'categories.index'
    },
    shouldDisplayBack () {
      return this.$route.name === 'categories.form'
    }
  }
}
</script>

<template>
  <div>
    <h2>
      Categorias
      <button 
        v-show="shouldDisplayNew"
        @click="navigation('categories.form')"
        type="button" class="btn btn-primary btn-xs pull-right">nova</button>
      <button 
        v-show="shouldDisplayBack"
        @click="navigation('categories.index')"
        type="button" class="btn btn-default btn-xs pull-right">voltar</button>
    </h2>
    
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>

    <div class="row">
      <div
        class="col-sm-6 col-md-4"
        v-for="category in list"
        :key="category.id">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{ category.name }}</h3>
            <p class="text-right">
              <a href="#" class="btn btn-default btn-xs" role="button">Editar</a>
              <a href="#" class="btn btn-default btn-danger btn-xs" role="button">Excluir</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .thumbnail {
    min-height: 150px;
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter {
    transform: translateY(10px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>

