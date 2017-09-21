<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Nome de usuário: {{myName}}</p>
        <p>Nome inverso: {{switchName()}}</p>
        <p>Idade: {{myAge}}</p>
        <p>
            <button @click="resetName">Resetar nome</button>
        </p>
        <p>
            <button @click="resetFn()">Resetar Fn</button>
        </p>
    </div>
</template>

<script>
import {eventBus} from '../main'

export default {
    props: {
        myName: {
            type: String
        },
        resetFn: Function,
        myAge: Number
    },
    methods: {
        switchName: function () {
            return this.myName.split('').reverse().join('')
        },
        resetName: function () {
            this.myAge = 30
            this.myName = 'Novo Nome'
            this.$emit('resetParentName', this.myName)
        }
    },
    created: function () {
        eventBus.$on('wasChangeAge', (age) => {
            this.myAge = age
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
