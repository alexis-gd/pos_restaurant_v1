<template>
    <svg :width="`${width ? width : '20'}`" :height="`${height ? height : '20'}`" viewBox="0 0 20 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.5714 7.85714H12.1429V1.42857C12.1429 0.639732 11.5031 0 10.7143 0H9.28571C8.49687 0 7.85714 0.639732 7.85714 1.42857V7.85714H1.42857C0.639732 7.85714 0 8.49687 0 9.28571V10.7143C0 11.5031 0.639732 12.1429 1.42857 12.1429H7.85714V18.5714C7.85714 19.3603 8.49687 20 9.28571 20H10.7143C11.5031 20 12.1429 19.3603 12.1429 18.5714V12.1429H18.5714C19.3603 12.1429 20 11.5031 20 10.7143V9.28571C20 8.49687 19.3603 7.85714 18.5714 7.85714Z"
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