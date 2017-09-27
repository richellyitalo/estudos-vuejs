<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                {{ text | to-lowercase }}
                <hr>
                {{ text | toUppercase}}
                <hr>
                <input type="text" v-model="textFilter">
                <ul>
                    <li v-for="fruit in fruitsFiltered">{{fruit}}</li>
                </ul>

                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixin';

    export default {
        /*data: function () {
            return {
                text: 'Olá, eu sou o bob!',
                fruits: ['Maçã', 'Queijo', 'Pão', 'Presunto'],
                textFilter: ''
            }
        },
        computed: {
            fruitsFiltered: function () {
                var vm = this;
                return this.fruits.filter(function (fruit) {
                    return fruit.match(vm.textFilter);
                })
            }
        },*/
        mixins: [fruitMixin],
        data: function () {
            return {
                text: 'Olá, eu sou o bob!'
            }
        },
        filters: {
            toUppercase: function (value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        },
        created: function () {
            console.log('created App');
        }
    }
</script>

<style>

</style>
