import stocks from '../../data/stocks';

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS': function (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS': function (state) {
        console.log('rnd');
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    buyStock: function (context, order) {
        context.commit('BUY_STOCK', order);
    },
    initStocks: function (context) {
        context.commit('SET_STOCKS', stocks);
    },
    randomizeStocks: function (context) {
        context.commit('RND_STOCKS')
    }
};

const getters = {
    stocks: function (state) {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}