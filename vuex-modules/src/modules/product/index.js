const state = {
    list: [],
    selected: {}
}

const mutations = {
    SET_PRODUCTS(state, data) {
        state.list = data
    },

    EMPTY_PRODUCTS(state) {
        state.list = []
    }
}

export default {
    state, mutations
}