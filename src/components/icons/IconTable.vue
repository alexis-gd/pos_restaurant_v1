<template>
    <svg :width="`${width ? width : '24'}`" :height="`${height ? height : '24'}`" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 20L7.5 16.25C7.65 15.8667 7.89167 15.5623 8.225 15.337C8.55833 15.1117 8.93333 14.9993 9.35 15H11V10.975C8.45 10.8917 6.31233 10.5167 4.587 9.85C2.86167 9.18333 1.99933 8.4 2 7.5C2 6.53333 2.975 5.70833 4.925 5.025C6.875 4.34167 9.23333 4 12 4C14.7833 4 17.146 4.34167 19.088 5.025C21.03 5.70833 22.0007 6.53333 22 7.5C22 8.4 21.1373 9.18333 19.412 9.85C17.6867 10.5167 15.5493 10.8917 13 10.975V15H14.65C15.05 15 15.421 15.1127 15.763 15.338C16.105 15.5633 16.3507 15.8673 16.5 16.25L18 20H16L14.8 17H9.2L8 20H6Z"
            :fill="`${fillStyle}`" />
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
        let fillClass;
        if (this.class) {
            fillClass = this.class === 'active' ? '#FFFFFF' : this.class;
        } else {
            fillClass = '#00A88F';
        }
        return {
            fillStyle: fillClass,
        }
    }
}
</script>