<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" md="6" lg="6" class="classStepper">
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">
                            Dados cadastrais
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="e1 > 2" step="2">
                            Dados cadastrais
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">
                            Formulário pessoal
                        </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-text-field
                                :rules="rules.textRules"
                                label="Primeiro nome"
                            ></v-text-field>
                            <v-text-field
                                :rules="rules.textRules"
                                label="Segundo nome"
                            ></v-text-field>
                            <v-btn
                                color="primary"
                                @click="e1 = 2"
                                class="rounded-xl mb-2"
                            >
                                Continue
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-text-field
                                :rules="rules.emailRules"
                                label="E-mail"
                            ></v-text-field>
                            <v-text-field
                                :rules="rules.textRules"
                                label="Celular"
                            ></v-text-field>
                            <v-btn
                                color="#8eaeff"
                                @click="e1 = 1"
                                class="rounded-xl mb-2"
                            >
                                Voltar
                            </v-btn>

                            <v-btn
                                color="primary"
                                @click="e1 = 3"
                                class="rounded-xl mb-2 ml-lg-4"
                            >
                                Continue
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-select
                                :rules="rules.textRules"
                                :items="salary"
                                label="Qual sua renda mensal?"
                            ></v-select>

                            <v-select
                                :rules="rules.textRules"
                                :items="typeContract"
                                label="Qual seu tipo de contrato?"
                            ></v-select>

                            <v-select
                                :rules="rules.textRules"
                                :items="outlay"
                                label="Principais gastos"
                                chips
                                multiple
                            ></v-select>

                            <v-btn
                                color="#8eaeff"
                                @click="e1 = 2"
                                class="rounded-xl mb-2"
                            >
                                Voltar
                            </v-btn>

                            <v-btn
                                @click="snackbar = true"
                                href="/"
                                class="ml-lg-4 rounded-xl mb-2"
                                color="primary"
                            >
                                Criar conta
                            </v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar"
            color="black"
            class="white--text"
            top
            right
            timeout="3000"
        >
            {{ successAccount }}
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    layout: "principal-page",
    data() {
        return {
            e1: 1,
            snackbar: false,
            successAccount: "Conta criada com sucesso!",
            salary: [
                "Até R$ 1.500",
                "Até R$ 3.000",
                "Até R$ 6.000",
                "Até R$ 10.000",
                "Mais de R$ 11.000"
            ],
            typeContract: ["PJ", "CLT"],
            outlay: [
                "Empréstimos",
                "Alimentação",
                "Carro",
                "Aluguel",
                "Vícios"
            ],
            rules: {
                textRules: [v => !!v || "Campo obrigatório"],
                emailRules: [
                    v => !!v || "E-mail obrigatório",
                    v => /.+@.+/.test(v) || "E-mail inválido"
                ]
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.classStepper {
    margin-top: 35px;
}
</style>
