const state = {
    username: '',
    email: '',
    token: ''
}

const mutations = {
    SETLOGIN(state, data) {
        console.log(data)
        state.username = data.username
        state.email = data.email
        state.token = data.token
    }
}

export default {
    state, mutations
}