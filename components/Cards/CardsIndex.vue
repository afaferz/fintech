<template>
    <v-card :loading="loading" color="secondary" class="my-12 ma-0" min-height="60vh">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate>
            </v-progress-linear>
        </template>

        <v-card-title class="text-h4 font-style font-weight-bold white--text">
            Um novo jeito de pensar sobre suas
            <span class="primary--text"> finanças </span>
        </v-card-title>

        <v-card-text class="my-8">
            <v-list-item class="pa-0">
                <v-list-item-content>
                    <v-list-item-title
                        class="
                            mb-4
                            text-h5
                            font-style
                            primary--text
                            font-weight-bold
                        "
                    >
                        <v-icon size="35" color="white" class="mr-2">
                            mdi-clock-time-ten-outline
                        </v-icon>
                        Lorem, ipsum dolor sit
                        <v-divider class="mt-2"></v-divider>
                    </v-list-item-title>

                    <v-list-item-title
                        class="
                            mb-4
                            text-h5
                            font-style
                            primary--text
                            font-weight-bold
                        "
                    >
                        <v-icon size="35" color="white" class="mr-2">
                            mdi-currency-usd
                        </v-icon>
                        Lorem, ipsum dolor sit
                        <v-divider class="mt-2"></v-divider>
                    </v-list-item-title>

                    <v-list-item-title
                        class="
                            mb-4
                            text-h5
                            font-style
                            primary--text
                            font-weight-bold
                        "
                    >
                        <v-icon size="35" color="white" class="mr-2">
                            mdi-account-plus-outline
                        </v-icon>
                        Lorem, ipsum dolor sit
                        <v-divider class="mt-2"></v-divider>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card-text>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        loading: false,
        selection: 1
    }),

    methods: {
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        }
    }
};
</script>

<style lang="scss" scoped>
.font-style {
    font-family: "Boing-Bold", sans-serif !important;
    line-height: 1.3;
}
</style>
