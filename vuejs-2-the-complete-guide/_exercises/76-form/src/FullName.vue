<template>
    <div>
        <div class="form-group">
            <label for="firstName">Nome</label>
            <input type="text" id="firstName" class="form-control" :value="firstName" @input="changedName(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Sobrenome</label>
            <input type="text" id="lastName" class="form-control" :value="lastName" @input="changedName(false, $event)">
        </div>
    </div>
</template>
<script>
export default {
    props: ['value'],
    methods: {
        changedName: function (isFirst, event) {
            let name = '';
            if (isFirst)
                name = event.target.value + ' ' + this.lastName;
            else
                name = this.firstName + ' ' + event.target.value;
            this.$emit('input', name);
        }
    },
    computed: {
        firstName: function () {
            return this.value.split(' ')[0];
        },
        lastName: function () {
            return this.value.split(' ')[1];
        }
    }
}
</script>


<style>

</style>
