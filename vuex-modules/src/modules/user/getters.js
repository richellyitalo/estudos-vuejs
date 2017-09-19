export function getUsers(state) {
  return state.user.list
}

export function hasUsers(state) {
  return state.user.list.length > 0
}

export function getQtdUsers(state) {
  return state.user.list.length
}