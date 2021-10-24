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
                        Controle seus pagamentos, dívidas e investimentos em um
                        só lugar
                    </p>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="ml-auto" max-width="400">
                    <v-card-title class="secondary white--text">
                        <span class="text-h6">Gastos &amp; Ganhos</span>
                        <v-spacer></v-spacer>
                        <v-btn
                            :outlined="interval == null"
                            :color="interval == null ? 'white' : 'primary'"
                            dark
                            depressed
                            @click="interval == null ? start() : stop()"
                        >
                            VEJA FUNCIONANDO
                        </v-btn>
                    </v-card-title>
                    <v-card-text class="py-0">
                        <v-timeline dense>
                            <v-slide-x-reverse-transition group hide-on-leave>
                                <v-timeline-item
                                    v-for="item in items"
                                    :key="item.id"
                                    :color="item.color"
                                    small
                                    fill-dot
                                >
                                    <v-alert
                                        :value="true"
                                        :color="item.color"
                                        :icon="item.icon"
                                        class="white--text"
                                    >
                                        {{ item.text }}
                                    </v-alert>
                                </v-timeline-item>
                            </v-slide-x-reverse-transition>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
const COLORS = ["info", "warning", "error", "success"];
const ICONS = {
    info: "mdi-information",
    warning: "mdi-alert",
    error: "mdi-close-circle",
    success: "mdi-check-circle"
};

export default {
    name: "Financial",
    data: () => ({
        interval: null,
        items: [
            {
                id: 1,
                color: "success",
                icon: ICONS.success,
                text: `R$ ${(Math.random() * 10)
                    .toFixed(2)
                    .replace(".", ",")} Adicionados para seu controle`
            }
        ],
        nonce: 2
    }),

    beforeDestroy() {
        this.stop();
    },

    methods: {
        addEvent() {
            let { color, icon } = this.genAlert();

            // Gera uma nova cor
            const previousColor = this.items[0].color;
            while (previousColor === color) {
                color = this.genColor();
            }

            let text = "R$ 0,00 Movimentados";

            if (color === "info") {
                text = "Nenhuma movimentação recente";
                color = "info";
                icon = ICONS[color]
            }
            if (color === "error") {
                text = `R$ -${(Math.random() * 10)
                    .toFixed(2)
                    .replace(".", ",")} retirados de suas finanças`;
                color = "error";
                icon = ICONS[color]
            }
            if (color === "warning") {
                text = "Atenção! Seus gastos estão chegando ao limite definido";
                color = "warning";
                icon = ICONS[color]
            }
            if (color === "success") {
                text = `R$ ${(Math.random() * 10)
                    .toFixed(2)
                    .replace(".", ",")} adicionados as suas finanças`;
                color = "success";
                icon = ICONS[color]
            }

            this.items.unshift({
                id: this.nonce++,
                color,
                icon,
                text
            });

            if (this.nonce > 5) {
                this.items.pop();
            }
        },
        genAlert() {
            const color = this.genColor();

            return {
                color,
                icon: this.genIcon(color)
            };
        },
        genColor() {
            return COLORS[Math.floor(Math.random() * 4)];
        },
        genIcon(color) {
            return ICONS[color];
        },
        start() {
            this.interval = setInterval(this.addEvent, 3000);
        },
        stop() {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};
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
