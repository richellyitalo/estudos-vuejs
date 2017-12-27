import Vue from 'vue'

const SET_LIST = (state, obj) => {
  state.list = obj.categories
}

const SET_ONE = (state, obj) => {
  const { category, index } = obj
  if (index > -1) {
    Vue.set(state.list, index, category)
    state.list[index].name = category.name
  } else {
    state.list.unshift(category)
  }
}

const REMOVE_ONE = (state, obj) => {
  state.list.splice(obj.index, 1)
}

export default {
  SET_LIST,
  SET_ONE,
  REMOVE_ONE
}
