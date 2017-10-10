<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 30, time: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, time: 1500})">Decrement</button>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
        // com uso do 'mapMutations'
        // methods: {
        //     ...mapMutations([
        //         'increment',
        //         'decrement'
        //     ])
        // }
        // sem map mutations
        // methods: {
        //     increment() {
        //         this.$store.commit('increment')
        //     },
        //     decrement() {
        //         this.$store.commit('decrement')
        //     }
        // }
    }
</script>