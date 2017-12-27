import axios from 'axios'
import localforage from 'localforage'
import router from '@/router'
import { bus } from '@/plugins/event-bus'

const http = axios.create({
  baseURL: 'http://localhost:3456'
})

// intercept request
const intercepRequest = async (config) => {
  const token = await localforage.getItem('token')
  config.headers.common['x-access-token'] = token
  return config
}
const intercepRequestError = (error) => Promise.reject(error)

http.interceptors.request.use(intercepRequest, intercepRequestError)

const intercepResponse = async (response) => response

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
  return Promise.reject(error)
}

http.interceptors.response.use(intercepResponse, intercepResponseError)

export default http
