export function loadProducts({dispatch, state}) {
  this.$http.get('/products.json').then(
    (response) => {
      dispatch("SET_PRODUCTS", response.data)
    },
    (error) => {
      console.error(error.statusText)
    }
  )
}

export function emptyProducts({dispatch, state}) {
  dispatch('EMPTY_PRODUCTS')
}