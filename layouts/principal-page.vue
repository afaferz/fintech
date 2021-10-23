<template>
    <v-app>
        <Desktop />
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
    layout: 'PrincipalPage',
    components: {
        Desktop,
        Mobile
    }
};
</script>

<style>
</style>
