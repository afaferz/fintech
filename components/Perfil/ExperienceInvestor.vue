<template>
    <div>
        <section title="ExperienceInvestorEducational">
            <ExperienceInvestorEducational />
        </section>
    </div>
</template>

<script>
import ExperienceInvestorEducational from "@/components/Index/Section/ExperienceInvestorEducational";
export default {
    components: {
        ExperienceInvestorEducational
    }
};
</script>

<style lang="scss" scoped>
section {
    min-height: 85vh;
    &[title="ExperienceInvestorEducational"] {
        background: linear-gradient(-55deg, #fefefe 40%, $primary 30%);
        @media screen and (max-width: 600px) {
            background: linear-gradient(0deg, $primary 58%, #fefefe 55%);
        }
    }
}
</style>
