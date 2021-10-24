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
                            class="logo"
                        >
                        </v-img>

                        <div
                            class="d-flex align-center"
                            v-if="$route.path === '/'"
                        >
                            <a
                                v-for="{ name, href } in links"
                                :key="name"
                                v-scroll-to="href"
                                class="
                                    text-decoration-none text-uppercase
                                    mx-5
                                    secondary--text
                                    menu-link
                                    body-2
                                "
                            >
                                {{ name }}
                            </a>
                            <v-btn
                                class="ml-4"
                                rounded
                                color="#8eaeff"
                                @click="openLoginModal = true"
                            >
                                <span class="white--text">
                                    JUNTE-SE A NÓS
                                </span>
                            </v-btn>
                        </div>
                        <div class="d-flex align-center" v-else>
                            <NuxtLink
                                v-for="{ name, pathName } in links"
                                :key="name"
                                :to="pathName"
                                class="
                                    text-decoration-none text-uppercase
                                    mx-5
                                    secondary--text
                                    menu-link
                                    body-2
                                "
                            >
                                {{ name }}
                            </NuxtLink>
                            <v-btn
                                class="ml-4"
                                rounded
                                color="#8eaeff"
                                @click="openLoginModal = true"
                            >
                                <span class="white--text">
                                    JUNTE-SE A NÓS
                                </span>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <ModalLogin v-model="openLoginModal" @close="openLoginModal = false" />
    </div>
</template>

<script>
import ModalLogin from "@/components/Login/ModalLogin";
export default {
    components: {
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
            ],
            easing: "easeInOutCubic"
        };
    }
};
</script>

<style lang="scss" scoped>
.logo {
    position: relative;
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: #8eaeff;
        position: absolute;
        bottom: 0px;
    }
}
.menu-link {
    display: inline-block;
    position: relative;
    transition: 0.2s ease-in-out;
    z-index: 2;
    color: #fefefe !important;
    &:hover {
        &:before {
            animation: waving 3s linear infinite;
            transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-origin: left;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%238eaeff; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E")
                0px 50% / 80px 80px repeat-x;
            transform: scaleX(1);
        }
    }
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 80px;
        left: 0;
        bottom: -45px;
        z-index: -1;
        transform: scaleX(0);
        transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1);
        transform-origin: right;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B stroke:%238eaeff; stroke-width:2; stroke-linecap:square; %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 40 40 40 Q 60 40 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E")
            0px 50% / 80px 80px repeat-x;
    }
}

.nuxt-link-exact-active {
    color: #8eaeff !important;
}

@keyframes waving {
    to {
        background-position: 80px 50%, 160px 50%;
    }
}
</style>
