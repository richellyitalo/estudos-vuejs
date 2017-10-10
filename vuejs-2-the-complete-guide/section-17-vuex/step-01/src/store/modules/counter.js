const state = {
    counter: 0
}

const getters = {
    doubleCounter: function(state) {
        return state.counter * 2;
    },
    stringCounter: function(state) {
        return state.counter + ' Clicks' ;
    }
}

const mutations = {
    increment: function (state, payload) {
        state.counter += payload;
    },
    decrement: function (state, payload) {
        state.counter -= payload;
    }
}

const actions = {
    increment: function (context, payload) {
        context.commit('increment', payload);
    },
    decrement: function (context, payload) {
        context.commit('decrement', payload);
    },
    // para versão mais avançada do javascript
    // decrement: ({commit}) => {
    //     commit('decrement');
    // }
    asyncIncrement: function (context, payload) {
        setTimeout(function () {
            context.commit('increment', payload.by);
        }, payload.time);
    },
    asyncDecrement: function (context, payload) {
        setTimeout(function () {
            context.commit('decrement', payload.by);
        }, payload.time);
    }
}

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}