export const fruitMixin = {
    data: function () {
        return {
            text: 'Olá, eu sou o bob!',
            fruits: ['Maçã', 'Queijo', 'Pão', 'Presunto'],
            textFilter: '',
            text: 'Texto do mixin'
        }
    },
    computed: {
        fruitsFiltered: function () {
            var vm = this;
            return this.fruits.filter(function (fruit) {
                return fruit.match(vm.textFilter);
            })
        }
    },
    created: function () {
        console.log('created mixin');
    }
}