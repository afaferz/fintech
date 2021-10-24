<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12">
                <div class="d-flex flex-column">
                    <span
                        class="financial-title my-14 font-weight-bold"
                        :class="
                            $vuetify.breakpoint.smAndDown
                                ? 'primary--text'
                                : 'white--text'
                        "
                    >
                        DESCOMPLIQUE
                        <span class="secondary--text">TERMOS</span> E
                        <span class="secondary--text">CONCEITOS</span>
                        FINANCEIROS
                    </span>
                    <p class="secondary--text mb-0 body-1 text-md-h5">
                        Conheça e saiba como funciona cada tipo de investimento,
                        financiamento e dívida
                    </p>

                    <v-divider class="my-3 primary"></v-divider>

                    <p class="secondary--text body-1 text-md-h5">
                        Entenda como escolher e saber o melhor tipo de
                        posicionalmento finaceiro pra você
                    </p>
                </div>
            </v-col>
            <v-col cols="12">
                <v-card rounded="0">
                    <v-tabs
                        v-model="tab"
                        background-color="secondary"
                        center-active
                        color="primary"
                        show-arrows
                        grow
                    >
                        <v-tabs-slider color="primary"></v-tabs-slider>

                        <v-tab
                            v-for="(item) in items"
                            :key="item"
                        >
                            {{ item.title }}
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="item in items" :key="item">
                            <v-card flat rounded="0">
                                <v-card-text v-text="item.text"></v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" md="4">
                <v-card width="400">
                    <v-img
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    >
                        <v-app-bar flat color="rgba(0, 0, 0, 0)">
                            <v-app-bar-nav-icon
                                color="white"
                            ></v-app-bar-nav-icon>

                            <v-toolbar-title class="text-h6 white--text pl-0">
                                Messages
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn color="white" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-app-bar>

                        <v-card-title class="white--text mt-8">
                            <v-avatar size="56">
                                <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                />
                            </v-avatar>
                            <p class="ml-3">John Doe</p>
                        </v-card-title>
                    </v-img>

                    <v-card-text>
                        <div class="font-weight-bold ml-8 mb-2">Today</div>

                        <v-timeline align-top dense>
                            <v-timeline-item
                                v-for="message in messages"
                                :key="message.time"
                                :color="message.color"
                                small
                            >
                                <div>
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong> @{{
                                            message.time
                                        }}
                                    </div>
                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card width="400">
                    <v-img
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    >
                        <v-app-bar flat color="rgba(0, 0, 0, 0)">
                            <v-app-bar-nav-icon
                                color="white"
                            ></v-app-bar-nav-icon>

                            <v-toolbar-title class="text-h6 white--text pl-0">
                                Messages
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn color="white" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-app-bar>

                        <v-card-title class="white--text mt-8">
                            <v-avatar size="56">
                                <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                />
                            </v-avatar>
                            <p class="ml-3">John Doe</p>
                        </v-card-title>
                    </v-img>

                    <v-card-text>
                        <div class="font-weight-bold ml-8 mb-2">Today</div>

                        <v-timeline align-top dense>
                            <v-timeline-item
                                v-for="message in messages"
                                :key="message.time"
                                :color="message.color"
                                small
                            >
                                <div>
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong> @{{
                                            message.time
                                        }}
                                    </div>
                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card width="400">
                    <v-img
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    >
                        <v-app-bar flat color="rgba(0, 0, 0, 0)">
                            <v-app-bar-nav-icon
                                color="white"
                            ></v-app-bar-nav-icon>

                            <v-toolbar-title class="text-h6 white--text pl-0">
                                Messages
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn color="white" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-app-bar>

                        <v-card-title class="white--text mt-8">
                            <v-avatar size="56">
                                <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                />
                            </v-avatar>
                            <p class="ml-3">John Doe</p>
                        </v-card-title>
                    </v-img>

                    <v-card-text>
                        <div class="font-weight-bold ml-8 mb-2">Today</div>

                        <v-timeline align-top dense>
                            <v-timeline-item
                                v-for="message in messages"
                                :key="message.time"
                                :color="message.color"
                                small
                            >
                                <div>
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong> @{{
                                            message.time
                                        }}
                                    </div>
                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
            items: [
                {
                    title: "Amortização",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    title: "SPC",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    title: "Cheque Especial",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    title: "Financiamento Imobiliário",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    title: "Financiamento de Automóvel",
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
            ]
        };
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
