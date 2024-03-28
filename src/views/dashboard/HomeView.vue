<template>
    <div class="homeview-container">
        <MenuBar></MenuBar>
    </div>
</template>

<script>
import MenuBar from "@/views/MenuBar.vue";

export default {
    name: 'HomeView',
    components: {
        MenuBar
    },
    setup() {
        return {
        }
    },
    mounted() { },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.homeview-container {
    padding: 20px;
    min-height: 100vh;
}
</style>