<template>
    <v-container class="special-height">
        <v-row justify="center" align="center" class="special-height">
            <v-col cols="12">
                <p
                    class="
                        font-style
                        primary--text
                        text-uppercase
                        font-weight-bold
                    "
                >
                    Um novo jeito de pensar sobre suas
                    <span class="secondary--text"> finanças </span>
                </p>
                <v-divider></v-divider>
                <p class="secondary--text text-h5 text-md-h3 my-5">
                    Uma relação bancária para o seu desenvolvimento financeiro
                </p>
            </v-col>
            <v-col cols="12" md="12">
                <div class="d-flex flex-column flex-md-row justify-center">
                    <v-btn
                        color="primary"
                        height="80"
                        class="
                            rounded-0
                            white--text
                            x-large
                            mx-6
                            my-5 my-md-0
                            divida
                        "
                        nuxt
                        :to="{
                            name: 'perfil-tipo',
                            params: {
                                tipo: 'dividas',
                            },
                        }"
                    >
                        Estou em dívida atualmente
                    </v-btn>
                    <v-btn
                        color="primary"
                        height="80"
                        class="
                            rounded-0
                            white--text
                            x-large
                            mx-6
                            my-5 my-md-0
                            potencial-investidor
                        "
                        nuxt
                        :to="{
                            name: 'perfil-tipo',
                            params: {
                                tipo: 'investidor-iniciante',
                            },
                        }"
                    >
                        Quero começar a investir
                    </v-btn>
                    <v-btn
                        color="primary"
                        height="80"
                        class="
                            rounded-0
                            white--text
                            x-large
                            mx-6
                            my-5 my-md-0
                            investidor
                        "
                        nuxt
                        :to="{
                            name: 'perfil-tipo',
                            params: {
                                tipo: 'investidor',
                            },
                        }"
                    >
                        Já sou investidor
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Apresentation",
    components: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";
.special-height {
    min-height: 100vh;
}
.divida,
.proposta-investidor,
.investidor {
    background: $primary;
}
.font-style {
    font-family: "Boing-Bold", sans-serif !important;
    line-height: 1.3;
    font-size: 4em !important;
    @media screen and (max-width: 600px) {
        font-size: 2rem !important;
        letter-spacing: 0.0073529412em !important;
    }
}
</style>
