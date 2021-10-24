import colors from "vuetify/es5/util/colors";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - fintech",
        title: "Inovathon - Fintech",
        htmlAttrs: {
            lang: "pt-BR"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/vuetify-overwrites.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            light: true,
            treeShake: true,
            themes: {
                light: {
                    primary: '#162b62',
                    accent: colors.grey.darken3,
                    secondary: '#8eaeff',
                    info: colors.lightBlue.accent1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.darken2,
                    success: colors.lightGreen.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};
