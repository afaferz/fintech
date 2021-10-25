<template>
    <div>
        <section title="InvestorEducational">
            <InvestorEducational />
        </section>
    </div>
</template>

<script>
import InvestorEducational from "@/components/Index/Section/InvestorEducational";
export default {
    components: {
        InvestorEducational
    }
};
</script>

<style lang="scss" scoped>
section {
    min-height: 85vh;
    &[title="InvestorEducational"] {
        background: linear-gradient(-55deg, #fefefe 40%, $primary 30%);
        @media screen and (max-width: 600px) {
            background: linear-gradient(0deg, $primary 58%, #fefefe 55%);
        }
    }
}
</style>
