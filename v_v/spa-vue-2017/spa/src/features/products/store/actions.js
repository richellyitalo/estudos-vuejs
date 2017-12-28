import http from '@/services/http'
import findIndex from 'lodash/findIndex'

const fetch = async (context) => {
  // ou
  // fetch ({ commit })
  // extrai o `commit` de `context`
  const response = await http.get('/categoria')
  if (response != null) {
    const categories = response.data
    context.commit('SET_LIST', categories)
  }
}

const save = async (context, obj) => {
  const { verb, category } = obj
  const response = await http[verb]('/categoria', category)

  if (response != null) {
    category.id = response.data.category.id
    update(context, { ...category })
    return Promise.resolve()
  }
}

const fetchOne = async (context, obj) => {
  const response = await http.get(`/categoria/${obj.id}`)
  if (response != null) {
    return Promise.resolve(response.data.category)
  }
}

const update = ({ commit, state }, obj) => {
  const index = findIndex(state.list, { 'id': obj.id })
  const payload = { category: obj, index }
  commit('SET_ONE', payload)
}

const remove = ({ commit, state }, obj) => {
  return new Promise(async (resolve) => {
    const { id } = obj
    const response = await http.delete(`/categoria/${id}`)
    const { message } = response.data
    const index = findIndex(state.list, { id })

    if (index > -1) {
      commit('REMOVE_ONE', { index })
    }

    resolve(message)
  })
}

export default {
  fetch,
  save,
  fetchOne,
  update,
  remove
}
