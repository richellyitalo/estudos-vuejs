<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Counter is: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    }
    // sem 'mapGetters'
    // computed: {
    //     counter: function () {
    //         return this.$store.getters.doubleCounter
    //     }
    // }
}
</script>