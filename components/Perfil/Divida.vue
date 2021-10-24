<template>
    <div>
        <v-container fluid class="d-flex flex-row h-100">
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <Amortization />
                </v-col>
            </v-row>
        </v-container>
        <section title="Educational">
            <Educational />
        </section>
    </div>
</template>

<script>
import Amortization from "@/components/Simulations/Amortization";
import Educational from "@/components/Index/Section/Educational";
export default {
    components: {
        Amortization,
        Educational
    }
};
</script>

<style lang="scss" scoped>
section {
    min-height: 85vh;
    &[title="Educational"] {
        background: linear-gradient(-55deg, #fefefe 40%, $primary 30%);
        @media screen and (max-width: 600px) {
            background: linear-gradient(0deg, $primary 58%, #fefefe 55%);
        }
    }
}
</style>
