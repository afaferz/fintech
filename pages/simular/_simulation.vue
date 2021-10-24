<template>
    <v-component :is="typeOfSimulate"></v-component>
</template>

<script>
import Amortization from "@/components/Simulations/Amortization.vue";
export default {
    layout: "principal-page",
    components: {
        Amortization
    },
    computed: {
        typeOfSimulate() {
            switch (this.$route.params.simulation) {
                case "amortizacao-de-divida":
                    return "Amortization";
            }
        }
    }
};
</script>

<style>
</style>
