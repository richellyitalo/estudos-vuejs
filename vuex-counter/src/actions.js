export const incrementCounter = function ({dispatch, state}) {
  dispatch('SHOW_WAIT_MESSAGE')

  setTimeout(function(){
    dispatch('INCREMENT')
    dispatch('HIDE_WAIT_MESSAGE')
  }, 2000)
}

export const decrementCounter = function ({dispatch, state}) {
  dispatch('DECREMENT')
}

export const incrementCounterWithValue = function ({dispatch, state}, value) {
  let intValue = parseInt(value)

  if (isNaN(intValue)) {
    throw "Impossível converter o número para inteiro"
  } else {
    dispatch('INCREMENT_VALUE', parseInt(value))
  }
}