export function loadSuppliers({dispatch, state}) {
  this.$http.get('/suppliers.json').then(
    (response) => {
      dispatch('SET_SUPPLIERS', response.data)
    },
    (error) => {
      console.error(error.statusText)
    }
  )
}