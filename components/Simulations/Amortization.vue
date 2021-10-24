<template>
    <v-row justify="center" align="center">
        <v-col cols="12" md="8">
            <v-row class="align-center">
                <v-col cols="6">
                    <h2 class="font-weight-bold pt-4">
                        Calculadora de Amortização
                    </h2>
                    <p class="pt-4">Calcule a amortização financeira</p>
                    <v-text-field
                        v-model.number="debt"
                        v-mask="'##.###,##'"
                        outlined
                        prefix="R$"
                        label="Valor da dívida"
                    />
                    <v-text-field
                        v-model.number="parcels"
                        outlined
                        label="Número de parcelas restantes"
                    />
                    <v-text-field
                        v-model.number="fees"
                        outlined
                        label="Taxa de juros (%) para desconto"
                    />
                    <v-text-field
                        v-model.number="payment"
                        outlined
                        prefix="R$"
                        label="Valor de pagamento"
                    />
                    <v-btn
                        color="deep-purple"
                        x-large
                        class="white--text pa-4"
                        rounded
                        @click="calculateNewDebt"
                    >
                        CALCULAR
                    </v-btn>
                </v-col>
                <v-col>
                    <h2>
                        O valor que você iria pagar caso amortizasse essa
                        quantidade, seria:<br />
                        <strong>
                            <Money v-model="newDebt" v-bind="money" />
                        </strong>
                    </h2>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { Money, VMoney } from "v-money";
export default {
    layout: "principal-page",
    components: {
        Money
    },
    directives: { money: VMoney },
    data() {
        return {
            debt: 0,
            parcels: 0,
            fees: 0,
            payment: 0,
            newDebt: 0,
            money: {
                decimal: ",",
                thousands: ".",
                prefix: "R$ ",
                precision: 2,
                masked: false
            }
        };
    },
    methods: {
        calculateNewDebt() {
            if (this.payment < this.monthDebt) {
                alert(
                    "O valor de pagamento deve ser maior ou igual ao valor mensal"
                );
                return;
            }
            this.newDebt =
                this.debt -
                this.monthDebt -
                (this.fees * (this.payment - this.monthDebt)) / 100;
        }
    },
    computed: {
        monthDebt() {
            return this.debt / this.parcels;
        }
    }
};
</script>

<style>
</style>
