<template>
    <div>
        <section title="Apresentation" id="comeco">
            <Apresentation />
            <transition name="fade">
                <v-btn
                    v-show="buttomToBottom"
                    v-scroll-to="'#seu-perfil'"
                    class="mx-2 button-continue"
                    fab
                    dark
                    color="primary"
                >
                    <v-icon dark> mdi-chevron-down </v-icon>
                </v-btn>
            </transition>
        </section>
        <section title="GetSimulates" id="seu-perfil">
            <GetSimulates />
        </section>
        <section title="WhyInvesting">
            <WhyInvesting />
        </section>
        <section title="Financial">
            <Financial />
        </section>
        <section title="Educational">
            <Educational />
        </section>
        <section title="Apresentation">
            <Apresentation />
        </section>
    </div>
</template>

<script>
import Apresentation from "@/components/Index/Section/Apresentation.vue";
import WhyInvesting from "@/components/Index/Section/WhyInvesting.vue";
import Financial from "@/components/Index/Section/Financial.vue";
import Educational from "@/components/Index/Section/Educational.vue";
import GetSimulates from "@/components/Index/Section/GetSimulates.vue";
export default {
    layout: "principal-page",
    components: {
        Apresentation,
        WhyInvesting,
        Financial,
        Educational,
        GetSimulates
    },
    data() {
        return {
            buttomToBottom: true,
            buttomToTop: false,
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 800) {
                this.buttomToBottom = false;
            } else {
                this.buttomToBottom = true;
            }
            return this.buttomToBottom;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

section {
    min-height: 85vh;
    &[title="Apresentation"] {
        background-image: url("/img/patterns/leafs.svg");
        background-position: 0% 0%;
        background-size: auto;
        background-repeat: no-repeat;
        position: relative;
        .button-continue {
            position: absolute;
            left: 50%;
            bottom: 10px;
            animation: bounce 1s infinite alternate;
        }
        @keyframes bounce {
            from {
                transform: translateY(0px);
            }
            to {
                transform: translateY(-15px);
            }
        }
        @-webkit-keyframes bounce {
            from {
                transform: translateY(0px);
            }
            to {
                transform: translateY(-15px);
            }
        }
    }
    &[title="WhyInvesting"] {
        background-image: url("/img/patterns/montains-pattern.svg");
        background-position: 0% 0%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    &[title="Financial"] {
        background: linear-gradient(55deg, #fefefe 60%, $primary 60%);
        @media screen and (max-width: 600px) {
            background: linear-gradient(0deg, $primary 58%, #fefefe 55%);
        }
    }
    &[title="Educational"] {
        background: linear-gradient(-55deg, #fefefe 40%, $primary 30%);
        @media screen and (max-width: 600px) {
            background: linear-gradient(0deg, $primary 58%, #fefefe 55%);
        }
    }
    &[title="GetSimulates"] {
        background-color: $primary;
        background-image: url("/img/patterns/leafs.svg");
        background-position: 0% 0%;
        background-size: auto;
        background-repeat: no-repeat;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
