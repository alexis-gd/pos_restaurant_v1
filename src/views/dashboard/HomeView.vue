<template>
    <div class="home-view-container">
        <DashboardLayout>
            <DashboardProfile></DashboardProfile>
        </DashboardLayout>
    </div>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import DashboardProfile from '@/modules/DashboardProfile.vue';

export default {
    name: 'HomeView',
    components: {
        DashboardLayout,
        DashboardProfile
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

.home-view-container {
    padding: 20px;
    min-height: 100vh;
}
</style>