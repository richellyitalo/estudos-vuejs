import axios from 'axios'
import localforage from 'localforage'
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
  bus.$emit('display-alert', {
    type: 'error',
    message: error.message
  })
  return Promise.reject(error)
}

http.interceptors.response.use(intercepResponse, intercepResponseError)

export default http
