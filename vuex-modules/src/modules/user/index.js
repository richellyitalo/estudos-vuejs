const state = {
    list: [],
    selected: {}
}

const mutations = {
    SET_USERS(state, data) {
        state.list = data
    }
}

export default {
    state, mutations
}