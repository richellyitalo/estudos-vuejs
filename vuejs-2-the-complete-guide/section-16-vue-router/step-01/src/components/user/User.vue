<template>
    <div>
        <h1>The User Page</h1>
        <hr/>
        <router-view></router-view>
        <button class="btn btn-primary" @click="navigateToHome">Voltar a Home</button>
    </div>
</template>

<script>
export default {
    //via props
    // props: {
    //     id: {
    //         type: String
    //     }
    // },
    // via data
    // data: function() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     '$route': function (to, from) {
    //         this.id = from.params.id
    //     }
    // },
    methods: {
        navigateToHome: function() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>
