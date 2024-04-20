<template>
    <svg :width="`${width ? width : '20'}`" :height="`${height ? height : '5'}`" viewBox="0 0 20 5" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.5714 0.500008H12.1429L11.5 0.5C10.6873 0.499995 10.7888 0.500009 10 0.500009L9.33979 0.500008C8.55095 0.500008 8.83594 0.500008 8.56157 0.500008H7.85714H1.42857C0.639732 0.500008 0 1.13974 0 1.92858V3.35715C0 4.14599 0.639732 4.78572 1.42857 4.78572H7.85714C7.85714 4.78572 7.07872 4.78572 8.26556 4.78572C9.45241 4.78572 9.33979 4.78572 9.33979 4.78572L10.1818 4.78572C10.9706 4.78572 10.5969 4.78572 11.3416 4.78572L12.1429 4.78572H18.5714C19.3603 4.78572 20 4.14599 20 3.35715V1.92858C20 1.13974 19.3603 0.500008 18.5714 0.500008Z"
            fill="white" :style="`${fillStyle}`" />
    </svg>
</template>

<script>
export default {
    props: {
        class: String,
        width: String,
        height: String,
    },
    data() {
        const fillClass = `${this.class ? 'fill: #FFFFFF' : 'fill: #00A88F'}`;
        return {
            fillStyle: fillClass,
        }
    }
}
</script>