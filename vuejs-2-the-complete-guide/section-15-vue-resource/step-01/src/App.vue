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
                <br/>
                <div class="form-group">
                    <label for="">Save data node</label>
                    <input type="text" class="form-control" v-model="nodeSave">
                </div>
                <br/>
                <div class="form-group">
                    <label for="">Get data node</label>
                    <input type="text" class="form-control" v-model="node">
                </div>
                <button class="btn btn-primary" @click="submit">Enviar</button>

                <hr>

                <button class="btn btn-primary" @click="fetchData">Carregar dados</button>
                <br/>
                {{users}}
                <br/>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
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
                resource: {},
                node: 'data',
                nodeSave: 'alternative'
            }
        },
        methods: {
            submit: function () {
                //this.resource.save({id: 3}, this.user);
                //this.resource.save(this.user);
                this.resource.saveAlt3({node: this.nodeSave}, this.user);
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
                /*this.$http.get('')
                .then(response => {
                    return response.json();
                }).then(data => {
                    const pushArray = [];
                    for (let key in data.messages) {
                        pushArray.push(data.messages[key]);
                    }
                    this.users = pushArray;
                });
                */

                this.resource.getData({node: this.node})
                .then(response => {
                    return response.json();
                }).then(data => {
                    const pushArray = [];
                    for (let key in data) {
                        console.info(key);
                        pushArray.push(data[key]);
                    }
                    this.users = pushArray;
                });
            }
        },
        created: function () {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                saveAlt2: {method: 'POST', url: 'alternative.json{/id}'},
                saveAlt3: {method: 'POST', url: '{node}.json'},
                getData: {method: 'GET'}
                //this.resource.saveAlt({id: 4}, this.user); -> alternative.json/4
            }
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
