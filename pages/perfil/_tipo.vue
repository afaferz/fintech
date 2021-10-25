<template>
    <v-components :is="typeOfProfile"></v-components>
</template>

<script>
import Divida from "@/components/Perfil/Divida.vue";
import Investor from "@/components/Perfil/Investor.vue";
import ExperienceInvestor from "@/components/Perfil/ExperienceInvestor.vue";
export default {
    layout: "principal-page",
    components: {
        Divida,
        Investor,
        ExperienceInvestor
    },
    computed: {
        typeOfProfile() {
            switch (this.$route.params.tipo) {
                case "dividas":
                    return "Divida";
                case "investidor-iniciante":
                    return "Investor";
                case "investidor":
                    return "ExperienceInvestor";
            }
        }
    }
};
</script>

<style>
</style>
