<template>
    <svg :width="`${width ? width : '24'}`" :height="`${height ? height : '24'}`" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_39_232" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="1" width="18"
            height="22">
            <path
                d="M18.5 4H5.5C4.94772 4 4.5 4.44772 4.5 5V21C4.5 21.5523 4.94772 22 5.5 22H18.5C19.0523 22 19.5 21.5523 19.5 21V5C19.5 4.44772 19.0523 4 18.5 4Z"
                fill="white" stroke="white" stroke-width="2" stroke-linejoin="round" />
            <path d="M9 2V5M15 2V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 9.5H16M8 13.5H14M8 17.5H12" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </mask>
        <g mask="url(#mask0_39_232)">
            <path d="M0 0H24V24H0V0Z" fill="#00A88F" :style="`${fillStyle}`" />
        </g>
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