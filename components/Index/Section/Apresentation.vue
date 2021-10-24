<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12">
                <p class="font-style">
                    Um novo jeito de pensar sobre suas
                    <span class="primary--text"> finanças </span>
                </p>
            </v-col>
            <v-col cols="12" md="12">
                <div class="d-flex flex-column flex-md-row justify-center">
                    <v-btn
                        color="primary"
                        class="rounded-0 x-large mx-6 my-5 my-md-0"
                        outlined
                        @click="reserve"
                    >
                        Estou em dívida atualmente
                    </v-btn>
                    <v-btn
                        color="secondary"
                        class="rounded-0 x-large mx-6 my-5 my-md-0"
                        outlined
                        @click="reserve"
                    >
                        Quero começar a investir
                    </v-btn>
                    <v-btn
                        color="primary"
                        class="rounded-0 x-large mx-6 my-5 my-md-0"
                        outlined
                        @click="reserve"
                    >
                        Já sou investidor
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CardsIndex from "@/components/Cards/CardsIndex";

export default {
    name: "Apresentation",
    components: {
        CardsIndex
    }
};
</script>

<style lang="scss" scoped>
.font-style {
    font-family: "Boing-Bold", sans-serif !important;
    line-height: 1.3;
    font-size: 2.2em !important;
    @media screen and (max-width: 600px) {
        font-size: 2rem !important;
        letter-spacing: 0.0073529412em !important;
    }
}
</style>
