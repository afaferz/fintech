<template>
    <h1>{{ typeOfProfile }}</h1>
</template>

<script>
export default {
    layout: 'principal-page',
    computed: {
        typeOfProfile() {
            return this.$route.params.tipo;
        }
    }
};
</script>

<style>
</style>
