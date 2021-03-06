import axios from 'axios'
import localforage from 'localforage'
import router from '@/router'
import { bus } from '@/plugins/event-bus'
import store from '@/store'

const http = axios.create({
  baseURL: 'http://localhost:3456'
})

const setSearching = (state) => {
  store.dispatch('setSearching', { isSearching: state })
}

// intercept request
const intercepRequest = async (config) => {
  setSearching(true)
  const token = await localforage.getItem('token')
  config.headers.common['x-access-token'] = token
  return config
}
const intercepRequestError = (error) => {
  setSearching(false)
  return Promise.reject(error)
}

http.interceptors.request.use(intercepRequest, intercepRequestError)

const intercepResponse = async (response) => {
  setSearching(false)
  return response
}

const intercepResponseError = (error) => {
  let message = error.message

  if (error.response != null) {
    /**
     * Token expirado
     */
    if (error.response.status === 403) {
      localforage.removeItem('token').then(() => {
        router.push({ name: 'auth.index', query: { expired: true } })
      })
    }

    message = error.response.data.error
  }

  bus.$emit('display-alert', {
    type: 'error',
    message
  })

  setSearching(true)

  return Promise.reject(error)
}

http.interceptors.response.use(intercepResponse, intercepResponseError)

export default http
