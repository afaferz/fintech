<template>
    <div>
        <section title="Apresentation">
            <Apresentation />
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
    </div>
</template>

<script>
import Apresentation from "@/components/Index/Section/Apresentation.vue";
import WhyInvesting from "@/components/Index/Section/WhyInvesting.vue";
import Educational from "@/components/Index/Section/Educational.vue";
import Financial from "@/components/Index/Section/Financial.vue";
export default {
    layout: "principal-page",
    components: {
        Apresentation,
        WhyInvesting,
        Educational,
        Financial
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

section {
    min-height: 85vh;
    &[title="Apresentation"] {
        /* background-color: #1d4183; */
        background-image: url("https://assets-global.website-files.com/5ed4da65a453e37fa99ff351/6001bc930bb4da4171ea5d30_img-vines.svg");
        background-position: 0% 0%;
        background-size: auto;
        background-repeat: no-repeat;
    }
    &[title="WhyInvesting"] {
        // background-color: $primary;

        background-image: url("/img/patterns/montains-pattern.svg");
        background-position: 0% 0%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    &[title="Financial"] {
        background: linear-gradient(
            55deg,
            #fefefe 60%,
            $primary 60%,
        );
        @media screen and (max-width: 600px) {
            background: linear-gradient(
                0deg,
                $primary 58%,
                #fefefe 55%,
            );
        }
    }
    &[title="Educational"] {
        background: linear-gradient(
            -55deg,
            #fefefe 42%,
            $primary 30%,
        );
        @media screen and (max-width: 600px) {
            background: linear-gradient(
                0deg,
                $primary 58%,
                #fefefe 55%,
            );
        }
        // background: linear-gradient(
        //     -235deg,
        //     #fefefe 60%,
        //     $primary 60%,
        // );
    }
}
</style>
