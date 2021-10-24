<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12">
                <div class="d-flex flex-column">
                    <span
                        class="
                            financial-title
                            white--text
                            font-weight-bold
                            my-14
                        "
                    >
                        ENCONTRE SEU
                        <span class="secondary--text">PERFIL</span> FINANCEIRO E
                        ENTENDA COMO VOCÊ PODE
                        <span class="secondary--text">APRIMORÁ-LO</span>
                    </span>
                    <p>
                        <NuxtLink
                            to=""
                            class="
                                white--text
                                text-decoration-none
                                simulate-now
                            "
                        >
                            <span> Simular agora </span>
                            <svg viewBox="0 0 13 20">
                                <polyline
                                    points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                                />
                            </svg>
                        </NuxtLink>
                    </p>
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
        </v-row>
        <!-- <v-row justify="center" align="center">
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
        </v-row> -->
    </v-container>
</template>

<script>
export default {
    name: "GetSimulates",

    data: () => ({
        messages: [
            {
                from: "You",
                message: `Sure, I'll see you later.`,
                time: "10:42am",
                color: "deep-purple lighten-1"
            },
            {
                from: "John Doe",
                message: "Yeah, sure. Does 1:00pm work?",
                time: "10:37am",
                color: "green"
            },
            {
                from: "You",
                message: "Did you still want to grab lunch today?",
                time: "9:47am",
                color: "deep-purple lighten-1"
            }
        ]
    })
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

.financial-title,
.simulate-now {
    font-size: 4rem !important;
    @media screen and (max-width: 600px) {
        font-size: 2.25rem !important;
    }
    font-family: "Boing-Bold", sans-serif !important;
    line-height: 1.5;
}
.simulate-now {
    position: relative;
    span {
        background-image: linear-gradient(0deg, $secondary 0%, $secondary 100%);
        background-position: 100% 97%;
        background-repeat: no-repeat;
        background-size: var(--background-size, 100%) 2px;
        transition: background-size 0.2s linear var(--background-delay, 0.15s);
        transform: translateZ(0);
    }

    &::before {
        transition: all 0.3s ease-in-out 0s;
        background-color: #8eaeff;
        bottom: -5px;
        content: "";
        display: inline-block;
        height: 2px;
        position: absolute;
        width: 82.95%;
        transition: width 0.2s linear var(--background-delay, 0.15s);
        transform: translateZ(0);
    }

    svg {
        display: inline;
        line-height: 1;
        fill: none;
        height: 1.5em;
        left: 0px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
        stroke: $secondary;
        stroke-dasharray: 7.95 30;
        stroke-dashoffset: var(--stroke-dashoffset, 46);
        vertical-align: middle;
        position: relative;
        transition: stroke-dashoffset var(--stroke-duration, 0.15s)
            var(--stroke-easing, linear) var(--stroke-delay, 0s);
        width: 1.5em;
    }
    &:hover,
    &:hover::before {
        width: 0%;
        --background-size: 0%;
        --background-delay: 0s;
        --stroke-dashoffset: 26;
        --stroke-duration: 0.3s;
        --stroke-easing: cubic-bezier(0.3, 1.5, 0.5, 1);
        --stroke-delay: 0.195s;
    }
}
</style>
