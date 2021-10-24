import Vue from 'vue';

Vue.filter('formatMoney', value => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
});
