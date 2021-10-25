<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
    >
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar color="primary" dark>
                    Opening from the bottom
                </v-toolbar>
                <v-card-text>
                    {{ infos }}
                    <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false"> Close </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    name: "ThanksForRegister",
    props: {
        value: {
            type: Boolean
        },
        infos: {
            type: Object
        }
    },
    computed: {
        openModal: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    }
};
</script>
