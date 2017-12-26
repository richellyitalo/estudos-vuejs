<script>
import http from '@/services/http'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  data () {
    return {
      category: {
        id: 0,
        name: ''
      }
    }
  },
  validations: {
    category: {
      name: {
        required
      }
    }
  },
  watch: {
    '$route' () {
      if (this.$route.params.id != null) {
        this.fetch()
      }
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const { id } = this.$route.params

      if (id !== undefined) {
        const response = await http.get(`/categoria/${id}`)
        this.category = response.data.category
      }
    },
    async submit () {
      if (this.isWholeModelInvalid) {
        return
      }

      const verb = this.isNew ? 'post' : 'put'
      const { category } = this
      const response = await http[verb]('/categoria', category)
      
      if (response != null) {
        this.category.id = response.data.category.id

        const category = { ...this.category }

        this.$emit('update-category-list', { category })
        this.$bus.$emit('display-alert', {
          type: 'success',
          message: 'Categoria salva com sucesso'
        })
      }
    }
  },
  computed: {
    isWholeModelInvalid () {
      return this.$v.$invalid
    },
    isNameInvalid () {
      return this.$v.category.name.$invalid
    },
    isNew () {
      return this.category.id === 0
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submit" class="well">
      <div class="form-group"
        :class="{ 'has-error': isNameInvalid }">
        <label for="" class="control-label">Nome</label>
        <input type="text" class="form-control" v-model="category.name">
      </div>
      <div class="text-right">
        <button
        :disabled="isWholeModelInvalid"
        class="btn btn-primary btn-xs"
        type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>
