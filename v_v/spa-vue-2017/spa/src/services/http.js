import axios from 'axios'
import localforage from 'localforage'

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

// intercept response
const intercepResponse = async (response) => response

const intercepResponseError = (error) => Promise.reject(error)

http.interceptors.response.use(intercepResponse, intercepResponseError)

export default http
