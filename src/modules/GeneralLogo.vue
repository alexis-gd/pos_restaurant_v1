<template>
    <div class="logo-container">
        <img :src="pathBrandLogo" :alt="brandAlt" :width="width">
    </div>
</template>

<script>
export default {
    name: 'GeneralLogo',
    props: {
        brandLogo: String,
        brandAlt: String,
        width: String,
    },
    data() {
        const logo = `/src/assets/images/${this.brandLogo}`;
        return {
            pathBrandLogo: logo,
        }
    }
}
</script>

<style lang="scss" scoped>
.logo-container {
    text-align: center;
}
</style>