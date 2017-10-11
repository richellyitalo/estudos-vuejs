import Vue from 'vue'

export const loadData = function (context) {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };
                console.log(portfolio);

                context.commit('SET_STOCKS', stocks);
                context.commit('SET_PORTFOLIO', portfolio);
            }
        })
}