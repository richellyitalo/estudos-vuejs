<template>
    <div class="form-inline">
        <h1>Registro</h1>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="E-mail" v-model="email">
            <input type="password" class="form-control" placeholder="Senha" v-model="password">
            <button class="btn btn-primary" @click="signUp">Registrar</button>
            <br>
            <p class="alert alert-info" v-if="error.message.trim().length > 0">
                {{error.message}}
            </p>
            <br/>
            <router-link to="/signin">Tela de login</router-link>
            <pre>{{error}}</pre>
        </div>
    </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
    data() {
        return {
            email: 'admin@admin.com',
            password: '123456',
            error: {
                code: '',
                message: ''
            }
        }
    },
    methods: {
        signUp() {
            firebaseApp.auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .catch( error => {
                this.error = error
            });
        }
    }
}
</script>
