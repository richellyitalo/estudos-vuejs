<template>
    <div class="container">
        <app-header :quoteMax="maxQuotes" :quoteCount="quotes.length"></app-header>
        <app-new-quote @newQuote="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Clique no quote para exclui-lo!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'

export default {
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
    },
    data: function() {
        return {
            quotes: [
                'Este é um exemplo de quote'
            ],
            maxQuotes: 5
        }
    },
    methods: {
        addQuote: function (quote) {
            if (this.quotes.length >= this.maxQuotes) {
                alert('Remove um quote para poder adicionar.');
                return;
            }
            this.quotes.push(quote);
        },
        deleteQuote: function (index) {
            this.quotes.splice(index, 1);
        }
    }
}
</script>

<style>

</style>
