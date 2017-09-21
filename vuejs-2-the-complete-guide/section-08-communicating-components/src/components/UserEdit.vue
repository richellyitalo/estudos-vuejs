<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Minha idade {{myAge}}</p>
        <p>
            <button @click="changeAge">Alterar idade</button>
        </p>
    </div>
</template>

<script>
import {eventBus} from '../main'

export default {
    props: {
        myAge: Number
    },
    methods: {
        changeAge: function () {
            this.myAge = 30;
            //this.$emit('wasChangeAge', this.myAge)
            //eventBus.$emit('wasChangeAge', this.myAge)
            eventBus.changeAge(this.myAge)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
