<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="textFilter">
        <ul>
            <li v-for="fruit in fruitsFiltered">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixin} from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        created: function () {
            console.log('created List.vue');
        }
    }
</script>

<style>

</style>
