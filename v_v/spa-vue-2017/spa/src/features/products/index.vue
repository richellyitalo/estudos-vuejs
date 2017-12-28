<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Categories',
  mounted () {
    this.fetch()
  },
  methods: {
    ...mapActions('categories', ['fetch', 'update', 'remove']),
    askRemove (category) {
      const confirm = window.confirm(`Deseja remover ${category.name}?`)

      if (confirm) {
        this.doRemove(category.id)
      }
    },
    doRemove (id) {
      this.remove({ id })
        .then(message => {
          this.$bus.$emit('display-alert', {
            type: 'success',
            message
          })
        })
    },
    navigation (route) {
      this.$router.push({ name: route })
    },
    updateList (obj) {
      this.update(obj.category)
    }
  },
  computed: {
    ...mapState('categories', ['list']),
    ...mapState(['isSearching']),
    hasCategories () {
      return this.list.length > 0
    },
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
      <router-view @update-category-list="updateList"></router-view>
    </transition>

    <div class="text-center" v-show="isSearching">
      <img src="../../assets/images/loading.gif" height="80" alt="Loading..." />
    </div>

    <div class="no-categories" v-show="!hasCategories && !isSearching">
      <h4>Não há categorias cadastradas.</h4>
    </div>

    <div class="row" v-show="hasCategories">
      <div
        class="col-sm-6 col-md-4"
        v-for="category in list"
        :key="category.id">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{ category.name }}</h3>
            <p class="text-right">
              <router-link 
                :to="{ name: 'categories.form', params : { id: category.id } }"
                class="btn btn-default btn-xs">
                Editar
              </router-link>
              <a href="" @click.prevent="askRemove(category)" class="btn btn-default btn-danger btn-xs" role="button">Excluir</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .no-categories {
    padding: 30px;
  }
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

