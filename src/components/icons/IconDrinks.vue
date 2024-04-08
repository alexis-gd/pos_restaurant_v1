<template>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.4506 1.5268C14.0139 0.963262 13.615 0 12.8184 0H1.03875C0.242221 0 -0.156709 0.963262 0.406564 1.5268L6.08038 7.20035V12.2992H4.59599C4.01045 12.2992 3.53571 12.774 3.53571 13.3595C3.53571 13.4767 3.6306 13.5716 3.74776 13.5716H10.1094C10.2266 13.5716 10.3215 13.4767 10.3215 13.3595C10.3215 12.774 9.84675 12.2992 9.26121 12.2992H7.77682V7.20035L13.4506 1.5268ZM11.9058 1.27233L10.6335 2.54467H3.22399L1.95165 1.27233H11.9058Z"
            fill="#00A88F" :style="`${fillStyle}`" />
    </svg>
</template>

<script>
export default {
    props: {
        class: String
    },
    data() {
        const fillClass = `${this.class ? 'fill: #FFFFFF' : 'fill: #00A88F'}`;
        return {
            fillStyle: fillClass,
        }
    }
}
</script>