export function getSuppliers(state) {
  return state.supplier.list
}

export function hasSuppliers(state) {
  return state.supplier.list.length > 0
}