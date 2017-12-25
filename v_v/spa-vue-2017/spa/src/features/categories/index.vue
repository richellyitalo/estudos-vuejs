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
  }
}
</script>

<template>
  <div>
    <h1>Sou um componente Cat</h1>
    <div class="row">
      <div
        class="col-sm-6 col-md-4"
        v-for="category in list"
        :key="category.id">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{ category.name }}</h3>
            <p>
              <a href="#" class="btn btn-default btn-xs" role="button">Button</a>
              <a href="#" class="btn btn-default btn-xs" role="button">Button</a>
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
</style>

