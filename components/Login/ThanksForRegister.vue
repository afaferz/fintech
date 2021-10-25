<template>
    <v-dialog
        v-model="openModal"
        transition="dialog-bottom-transition"
        max-width="600"
    >
        <template v-slot:default="dialog">
            <v-card color="secondary" class="pa-12">
                <v-card-text>
                    <div class="text-h2 my-5 font-weight-bold primary--text">
                        UHUUUUUU!!! 🥳
                    </div>
                    <p class="white--text text-h4">
                        Olá!
                        <b class="primary--text">
                            {{ infos.completeName }}
                        </b>
                    </p>
                    <p class="white--text text-h5">
                        Seja muito bem-vindo(a) ao
                        <br />
                        <span class="text-uppercase primary--text">futuro financeiro</span>
                    </p>
                    <p class="white--text text-h5">
                        Nós do <b>Banco Vida Leve</b> estamos
                        extremamente felizes em tê-lo(a) conosco
                    </p>
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn color="primary" class="white--text rounded-xl" x-large nuxt to="/" @click="dialog.value = false" block>
                        ACESSAR SUA CONTA AGORA
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    name: "ThanksForRegister",
    props: {
        value: {
            type: Boolean
        },
        infos: {
            type: Object
        }
    },
    computed: {
        openModal: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
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
