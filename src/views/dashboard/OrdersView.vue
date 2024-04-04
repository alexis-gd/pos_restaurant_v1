<template>
    <div class="profile-view-container">
        <DashboardLayout>
            <h1>Orders</h1>
        </DashboardLayout>
        <FloatMenu :option="'orders'"></FloatMenu>
    </div>
</template>

<script>
import FloatMenu from '@/modules/FloatMenu.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

export default {
    name: 'OrderView',
    components: {
        FloatMenu,
        DashboardLayout
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

.profile-view-container {
    padding: 20px;
    min-height: 100vh;
}
</style>