import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: getters,

    // como utilizar no componente:
    // this.$store.commit('increment')
    mutations: mutations,

    actions: actions,
    
    modules: {
        counter: counter
    }
})

/*
sem a divisão de arquivos no /store/{actions,getters,mutations}
export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: function (state) {
            return state.value;
        }
    },

    // como utilizar no componente:
    // this.$store.commit('increment')
    mutations: {
        updateValue: function (state, payload) {
            state.value = payload;
        }
    },

    actions: {
        updateValue: function (context, payload) {
            context.commit('updateValue', payload);
        }
    },
    
    modules: {
        counter: counter
    }
})
*/