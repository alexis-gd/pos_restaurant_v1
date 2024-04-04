<template>
    <div class="profile-view-container">
        <DashboardLayout>
            <h1>Tables</h1>
        </DashboardLayout>
        <FloatMenu :option="'tables'"></FloatMenu>
    </div>
</template>

<script>
import FloatMenu from '@/modules/FloatMenu.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

export default {
    name: 'TablesView',
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