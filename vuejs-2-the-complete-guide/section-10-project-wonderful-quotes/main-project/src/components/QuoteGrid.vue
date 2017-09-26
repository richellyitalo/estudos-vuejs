<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote">{{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    components: {
        appQuote: Quote
    },
    props: ['quotes'],
    methods: {
        deleteQuote: function (index) {
            this.$emit('quoteDeleted', index);
        }
    }
}
</script>

