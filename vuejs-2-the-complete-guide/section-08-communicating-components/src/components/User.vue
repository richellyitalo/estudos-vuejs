<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Meu nome: {{ name }}</p>
        <p>Minha idade: {{age}}</p>
        <button @click="changeName">Mudar o nome</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :myName="name" 
                @resetParentName="name = $event"
                :resetFn="resetName"
                :myAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :myAge="age"
                @wasChangeAge="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Foo',
                age: 27
            }
        },
        methods: {
            changeName: function () {
                this.name = 'Bar'
            },
            resetName: function () {
                this.name = 'John'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
