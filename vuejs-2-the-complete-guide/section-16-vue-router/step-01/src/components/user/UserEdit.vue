<template>
    <div>
        <h3>Edit the User</h3>
        <h4>Locale: {{ $route.query.locale }}</h4>
        <h4>Id carregado: {{id}}</h4>
        <button class="btn btn-primary" @click="confirmed = true">Confirmar</button>
        <p style="height: 900px"></p>
        <p id="data">Mais campos de data</p>
    </div>
</template>

<script>
export default {
    //via props
    data: function () {
        return {
            confirmed: false
        }
    },
    props: {
        id: {
            type: String
        }
    },
    beforeRouteLeave: function (to, from, next) {
        if (this.confirmed) {
            next()
        } else {
            if (confirm('Dados não salvos, deseja mesmo sair?'))
                next()
            else
                next(false)
        }
    }
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
}
</script>
