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
                            max-height="75"
                            max-width="125"
                            src="/img/logo.jpeg"
                            @click="$router.push({ name: 'index' })"
                        />
                        <v-spacer></v-spacer>
                        <v-menu
                            offset-y
                            origin="center center"
                            bottom
                            nudge-bottom="10%"
                            min-width="100%"
                            close-on-content-click
                            allow-overflow
                            rounded="0"
                            transition="slide-x-transition"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <HamburguerButton :on="on" :attrs="attrs" />
                            </template>

                            <v-list v-if="$route.path === '/'">
                                <v-list-item
                                    v-for="{ name, href } in links"
                                    :key="name"
                                >
                                    <v-list-item-title>
                                        <a
                                            v-scroll-to="href"
                                            class="
                                                text-decoration-none
                                                text-uppercase
                                                mx-5
                                                secondary--text
                                                menu-link
                                                body-2
                                            "
                                        >
                                            {{ name }}
                                        </a>
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

                            <v-list v-else>
                                <v-list-item
                                    v-for="{ name, pathName } in links"
                                    :key="name"
                                >
                                    <v-list-item-title>
                                        <NuxtLink
                                            :to="pathName"
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
                    href: "#comeco",
                    pathName: "/"
                },
                {
                    name: "Seu Perfil",
                    href: "#seu-perfil",
                    pathName: "/#/seu-perfil"
                },
                {
                    name: "Educação Financeira",
                    href: "#financas",
                    pathName: "/#/financas"
                },
                {
                    name: "FAQS",
                    href: "#faqs",
                    pathName: "/#/faqs"
                }
            ]
        };
    }
};
</script>

<style>
</style>
