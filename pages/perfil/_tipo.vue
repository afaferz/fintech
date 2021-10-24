<template>
    <v-components :is="typeOfProfile"></v-components>
</template>

<script>
import Divida from "@/components/Perfil/Divida.vue";
export default {
    layout: "principal-page",
    components: {
        Divida
    },
    computed: {
        typeOfProfile() {
            switch (this.$route.params.tipo) {
                case "dividas":
                    return "Divida";
            }
        }
    }
};
</script>

<style>
</style>
