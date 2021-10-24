<template>
    <v-app>
        <v-component :is="menu"></v-component>
        <v-main>
            <Nuxt />
        </v-main>
        <PrincipalFooter />
    </v-app>
</template>

<script>
import MenuPrincipalDesktop from "@/components/Menu/MenuPrincipalDesktop";
import MenuPrincipalMobile from "@/components/Menu/MenuPrincipalMobile";
import PrincipalFooter from "@/components/Footer/PrincipalFooter";
export default {
    layout: "PrincipalPage",
    components: {
        MenuPrincipalDesktop,
        MenuPrincipalMobile,
        PrincipalFooter
    },
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        menu() {
            if (this.isMobile) return "MenuPrincipalMobile";
            return "MenuPrincipalDesktop";
        }
    }
};
</script>

<style>
</style>
