<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result :counter="counter"></app-result>
                <hr>
                <app-counter @updated="counter += $event"></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
                <input type="text" class="form-control" v-model="value">
                <p>
                    {{value}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';

    export default {
        computed: {
            value: {
                get: function () {
                    return this.$store.getters.value;
                },
                set: function (value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        data() {
            return {
                counter: 0
            }
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
        }
    }
</script>

