const state = {
    list: [],
    selected: {}
}

const mutations = {
    SET_SUPPLIERS(state, data) {
        state.list = data
    }
}

export default {
    state, mutations
}