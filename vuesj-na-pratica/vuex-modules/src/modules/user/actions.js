export function loadUsers({dispatch, state}) {
  this.$http.get('/users.json').then(
    (response) => {
      dispatch('SET_USERS', response.data)
    },
    (error) => {
      console.error(error.statusText)
    }
  )
}