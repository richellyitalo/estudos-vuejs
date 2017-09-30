<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Nome de usuário</label>
                    <input type="text" class="form-control" v-model="user.username">    
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" class="form-control" v-model="user.email">    
                </div>
                <button class="btn btn-primary" @click="submit">Enviar</button>

                <hr>

                <button class="btn btn-primary" @click="fetchData">Carregar dados</button>
                <br/>
                <br/>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users">{{user.username}} - {{user.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {}
            }
        },
        methods: {
            submit: function () {
                this.resource.save({}, this.user);
                /*this.$http.post(
                    '',
                    this.user
                ).then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                })*/
            },
            fetchData: function () {
                this.$http.get('')
                .then(response => {
                    return response.json();
                }).then(data => {
                    const pushArray = [];
                    for (let key in data.messages) {
                        pushArray.push(data.messages[key]);
                    }
                    this.users = pushArray;
                });
            }
        },
        created: function () {
            this.resource = this.$resource('data.json').then(response => {
                console.info(response);
            });
        }
    }
</script>

<style>
</style>
