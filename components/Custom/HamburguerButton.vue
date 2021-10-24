<template>
    <div class="d-flex align-center">
        <v-btn v-on="on" v-bind="attrs" plain height="55" v-ripple="false">
            <template #default>
                <div
                    class="button"
                    :class="[activeClass ? 'button--active' : '']"
                >
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </template>
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        on: {
            required: true
        },
        attrs: {
            required: true
        }
    },
    data() {
        return {
            activeClass: false
        };
    },
    watch: {
        attrs: {
            handler(val) {
                val["aria-expanded"] === "true"
                    ? (this.activeClass = true)
                    : (this.activeClass = false);
            },
            deep: true
        }
    }
};
</script>

<style lang="scss"scoped>
div.button {
    background: transparent !important;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    span.line {
        background: #8eaeff;
        border-radius: 10px;
        height: 3px;
        margin: 4px 0;
        transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span.line:nth-of-type(1) {
        width: 40%;
    }

    span.line:nth-of-type(2) {
        width: 90%;
    }

    span.line:nth-of-type(3) {
        width: 55%;
    }

    &.button--active {
        span.line:nth-of-type(1) {
            transform-origin: bottom;
            transform: rotatez(45deg) translate(8px, -2px);
        }
        span.line:nth-of-type(2) {
            transform-origin: top;
            transform: translate(6px, -1px) rotatez(-45deg);
            width: 80%;
        }
        span.line:nth-of-type(3) {
            transform-origin: bottom;
            transform: translate(17px, -8px) rotatez(45deg);
            width: 40%;
        }
    }
}
</style>
