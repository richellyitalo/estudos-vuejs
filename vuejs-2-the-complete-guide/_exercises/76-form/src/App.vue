<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Formulário de cadastro</h1>
                    <hr>
                    <!--<div class="form-group">
                                <label for="firstName">Nome</label>
                                <input type="text" id="firstName" class="form-control" v-model="firstName">
                            </div>
                            <div class="form-group">
                                <label for="lastName">Sobrenome</label>
                                <input type="text" id="lastName" class="form-control" v-model="lastName">
                            </div>-->

                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="text" id="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        Guardar dados?
                        <label for="yes">
                            <input type="radio" id="yes" value="true" v-model="storeData"> Sim
                        </label>
                        <label for="no">
                            <input type="radio" id="no" value="no" v-model="storeData"> Não
                        </label>
                    </div>

                    <button class="btn btn-primary" @click.prevent="submitted">Submit!
                    </button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="!isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue';

export default {
    data: function() {
        return {
            fullName: 'Richelly Italo',
            //firstName: '',
            //lastName: '',
            email: '',
            password: '',
            storeData: true,

            isSubmitted: false
        }
    },
    methods: {
        submitted: function() {
            this.isSubmitted = true;
        }
    },
    components: {
        appFullName: FullName
    },
    computed: {
        fullNameComputed: function() {
            return this.fullName.firstName + ' ' + this.fullName.lastName;
        }
    }
}
</script>

<style>

</style>
