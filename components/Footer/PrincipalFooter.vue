<template>
    <v-footer color="white lighten-1" elevation="6" class="pa-0">
        <v-container>
            <v-row justify="space-between" align="center" class="mt-4">
                <v-col
                    v-for="item in links"
                    :key="item.title"
                    cols="12"
                    :md="12 / links.length"
                    align-self="start"
                    class="mx-4 mx-md-0"
                >
                    <p
                        class="
                            primary--text
                            font-weight-black
                            text-uppercase
                            subheading
                        "
                    >
                        {{ item.title }}
                    </p>
                    <p v-for="subItem in item.sublinks" :key="subItem.href">
                        <NuxtLink
                            :to="subItem.href"
                            class="
                                secondary--text
                                text-decoration-none
                                sublinks
                            "
                        >
                            {{ subItem.title }}
                        </NuxtLink>
                    </p>
                </v-col>
            </v-row>
        </v-container>
        <v-row>
            <v-col
                class="primary lighten-2 py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        links: [
            {
                title: "Sobre nós",
                sublinks: [
                    { title: "Home", href: "" },
                    { title: "Blog", href: "" },
                    { title: "Quem somos", href: "" },
                    { title: "Investimentos", href: "" }
                ]
            },
            {
                title: "Serviços",
                sublinks: [
                    { title: "Controle de finanças", href: "" },
                    { title: "Gestão de risco", href: "" },
                    { title: "Estudo de caso", href: "" },
                    { title: "Mentorias individuais", href: "" },
                    { title: "Simuladores", href: "" }
                ]
            },
            {
                title: "Aprenda conosco",
                sublinks: [
                    { title: "Mentorias", href: "" },
                    { title: "Videos", href: "" },
                    { title: "E-book", href: "" },
                    { title: "Newsletter", href: "" }
                ]
            },
            {
                title: "Ajuda & Suporte",
                sublinks: [
                    { title: "Fale conosco", href: "" },
                    { title: "FAQs", href: "" }
                ]
            },
            {
                title: "Fale Conosco",
                sublinks: [
                    { title: "Fale conosco", href: "" },
                    { title: "FAQs", href: "" }
                ]
            },
            {
                title: "Termos & Privacidade",
                sublinks: [
                    { title: "Legal", href: "" },
                    { title: "Legal", href: "" },
                    { title: "Privacidade", href: "" },
                    { title: "Segurança", href: "" }
                ]
            }
        ]
    })
};
</script>

<style lang="scss" scoped>
.sublinks {
    position: relative;
    // transition: all 0.35s ease;
    &::before {
        transition: all 0.3s ease-in-out 0s;
        background-color: #8eaeff;
        bottom: -5px;
        content: "";
        display: inline-block;
        height: 2px;
        position: absolute;
        width: 0%;
    }
    &:hover::before {
        width: 95%;
    }
}
</style>
