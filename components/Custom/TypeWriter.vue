<template>
    <span v-if="started">
        {{ fullText.substring(0, this.charAt) }}
    </span>
    <span v-else class="line" />
</template>

<script>
export default {
    props: {
        text: {
            // texto para ser simulado a digitacao
            type: String,
            required: true
        },
        delay: {
            // tempo para digitar cada caracter
            type: Number,
            default: 100
        },
        order: {
            // se o texto for composto (usar mais de uma componente do type-writer)
            // eh necessario especificar uma ordem em cada componente
            type: Number,
            default: 1
        },
        startAtBegin: {
            type: Boolean,
            default: true
        },
        group: {
            type: String,
            default: "1"
        }
    },
    data() {
        return {
            fullText: "",
            currentText: "",
            charAt: 0,
            timeout: null,
            started: false
        };
    },
    watch: {
        text: {
            handler: function(newVal, oldVal) {
                this.fullText = newVal.slice();
            },
            deep: true
        }
    },
    mounted() {
        // === EVENTOS
        this.$root.$on("typewriter_start", this.startListener);
        this.$root.$on("typewriter_end", this.endListener);
        // ===

        // usei o slice para criar uma cópia da string (esta igual do antigo plugin vue-typer)
        this.fullText = this.text.slice();

        if (this.order === 1 && !this.timeout && this.startAtBegin) {
            this.started = true;
            this.tick();
        }
    },
    beforeDestroy() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.$root.$off("typewriter_start", this.startListener);
        this.$root.$off("typewriter_end", this.endListener);
    },
    methods: {
        tick() {
            this.charAt++;
            if (this.charAt < this.fullText.length) {
                this.timeout = setTimeout(() => {
                    this.tick();
                }, this.delay);
            } else {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = null;
                }

                this.$root.$emit("typewriter_end", {
                    group: this.group,
                    order: this.order
                });
            }
        },
        startListener(event) {
            if (event.group !== this.group) return;
            if (this.timeout) return;

            if (event.order === this.order) {
                this.started = true;
                this.tick();
            }
        },
        endListener(event) {
            if (event.group !== this.group) return;
            if (this.timeout) return;

            if (event.order + 1 === this.order) {
                this.started = true;
                this.tick();
            }
        }
    }
};
</script>

<style scoped>
span.line:empty:before {
    content: "\200b";
}
</style>
