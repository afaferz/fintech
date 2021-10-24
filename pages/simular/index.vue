<template>
    <section title="WhyInvesting">
        <SimulateTypes />
    </section>
</template>

<script>
import SimulateTypes from "@/components/Simulations/SimulateTypes.vue";

export default {
    layout: "principal-page",
    components: {
        SimulateTypes
    }
};
</script>

<style lang="scss" scoped>
section {
    min-height: 100vh;
    &[title="WhyInvesting"] {
        background-image: url("/img/patterns/montains-pattern.svg");
        background-position: 0% 0%;
        background-size: cover;
        background-repeat: no-repeat;
    }
}
</style>
