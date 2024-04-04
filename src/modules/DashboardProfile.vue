<template>
    <div>
        <h1>profilew</h1>
        <FloatMenu></FloatMenu>
    </div>
</template>

<script>
import FloatMenu from "./FloatMenu.vue";

export default {
    name: 'DashboardProfile',
    components: {
        FloatMenu
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>