<template>
    <v-app>
        <v-component :is="menu"></v-component>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Desktop from "@/components/Menu/Desktop";
import Mobile from "@/components/Menu/Mobile";
export default {
    layout: "PrincipalPage",
    components: {
        Desktop,
        Mobile
    },
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        menu() {
            if (this.isMobile) return "Mobile";
            return "Desktop";
        }
    }
};
</script>

<style>
</style>
