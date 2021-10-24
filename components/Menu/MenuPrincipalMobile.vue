<template>
    <div>
        <v-app-bar color="primary" height="100px">
            <v-container fluid class="d-flex flex-row h-100">
                <v-row align="center" justify="center">
                    <v-col
                        cols="12"
                        class="d-flex flex-row justify-space-around"
                    >
                        <v-img
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-height="50"
                            max-width="50"
                            src="/img/logos/logo.svg"
                        ></v-img>
                        <v-spacer></v-spacer>
                        <v-menu
                            offset-y
                            origin="center center"
                            bottom
                            nudge-bottom="20%"
                            min-width="100%"
                            close-on-content-click
                            allow-overflow
                            rounded="0"
                            transition="slide-x-transition"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <HamburguerButton :on="on" :attrs="attrs" />
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="{ name, href } in links"
                                    :key="name"
                                >
                                    <v-list-item-title>
                                        <NuxtLink
                                            :to="href"
                                            class="
                                                text-decoration-none
                                                text-uppercase
                                                mx-7
                                                secondary--text
                                                menu-link
                                            "
                                        >
                                            {{ name }}
                                        </NuxtLink>
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-btn
                                        rounded
                                        block
                                        color="#8eaeff"
                                        @click="openLoginModal = true"
                                    >
                                        <span class="white--text">
                                            JUNTE-SE A NÓS
                                        </span>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
                <!-- <v-row align="center" justify="center">
                    <v-col
                        cols="12"
                        class="d-flex flex-row justify-space-around"
                    >
                        <v-img
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-height="50"
                            max-width="50"
                            src="/img/logos/logo.svg"
                        ></v-img>

                        <div class="d-flex align-center">
                            <NuxtLink
                                v-for="{ name, href } in links"
                                :key="name"
                                :to="href"
                                class="
                                    text-decoration-none text-uppercase
                                    mx-7
                                    secondary--text
                                    menu-link
                                "
                            >
                                {{ name }}
                            </NuxtLink>
                        </div>
                    </v-col>
                </v-row> -->
            </v-container>
            <ModalLogin
                v-model="openLoginModal"
                @close="openLoginModal = false"
            />
        </v-app-bar>
    </div>
</template>

<script>
import HamburguerButton from "@/components/Custom/HamburguerButton.vue";
import ModalLogin from "@/components/Login/ModalLogin.vue";

export default {
    components: {
        HamburguerButton,
        ModalLogin
    },
    data() {
        return {
            openLoginModal: false,
            links: [
                {
                    name: "Começo",
                    href: { name: "index" }
                },
                {
                    name: "Seu Perfil",
                    href: ""
                },
                {
                    name: "Algo aqui",
                    href: ""
                },
                {
                    name: "Educação Financeira",
                    href: ""
                },
                {
                    name: "Simule o valor",
                    href: ""
                },
                {
                    name: "FAQ",
                    href: ""
                }
            ]
        };
    }
};
</script>

<style>
</style>
