<template>
    <div :style="{ width: width, height: height }">
        <label for="check">
            <input type="checkbox" id="check" />
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: "40px"
        },
        height: {
            type: String,
            default: "40px"
        }
    }
};
</script>

<style scoped>
label {
    display: flex;
    width: 100%;
    flex-direction: column;
    cursor: pointer;
}

label span.line {
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

input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]:checked ~ span.line:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, -2px);
}

input[type="checkbox"]:checked ~ span.line:nth-of-type(2) {
    transform-origin: top;
    transform: translate(4px, 0px) rotatez(-45deg);
    width: 80%;
}

input[type="checkbox"]:checked ~ span.line:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(16px, -7px) rotatez(45deg);
}
</style>
