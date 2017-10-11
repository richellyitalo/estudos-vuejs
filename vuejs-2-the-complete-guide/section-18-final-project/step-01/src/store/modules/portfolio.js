const state = {
    funds: 10000,
    stocks: []
};
const mutations = {
    'BUY_STOCK': function (state, order) {
        const record = state.stocks.find(
            element => {
                return element.id == order.stockId
            }
        );

        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: order.stockId,
                quantity: order.quantity
            });
        }
        state.funds -= order.stockPrice * order.quantity;
    },
    'SELL_STOCK': function (state, order) {
        const record = state.stocks.find(
            element => {
                return element.id == order.stockId
            }
        );
        if (record.quantity > order.quantity) {
            record.quantity -= order.quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += order.stockPrice * order.quantity;
    },
    'SET_PORTFOLIO' : function (state, portfolio ) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock: function (context, order) {
        context.commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio: function (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds: function (state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}