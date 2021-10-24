<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6">
                <div class="d-flex flex-column">
                    <span
                        class="
                            financial-title
                            primary--text
                            my-14
                            font-weight-bold
                        "
                    >
                        ENTENDA SUA
                        <span class="secondary--text">SITUAÇÃO</span> E TRABALHE
                        COM ELA
                    </span>
                    <p class="secondary--text mb-0 body-1 text-md-h5">
                        A partir do que você quer alcançar no futuro, entenda o
                        que você precisa fazer hoje para isso
                    </p>

                    <v-divider class="my-3 primary"></v-divider>

                    <p class="secondary--text body-1 text-md-h5">
                        Download our app to open a Fixed Saver today and watch
                        your money grow safely and securelyView our rates
                    </p>
                </div>
            </v-col>
            <v-col cols="12" md="6"> Trabalhe com o que tem hoje </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.financial-title {
    font-size: 4rem !important;
    @media screen and (max-width: 600px) {
        font-size: 2.25rem !important;
    }
    font-family: "Boing-Bold", sans-serif !important;
    line-height: 1.5;
}
</style>
