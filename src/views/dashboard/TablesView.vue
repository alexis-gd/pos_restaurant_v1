<template>
    <div class="profile-view-container">
        <DashboardLayout>
            <h1>Tables</h1>
            <TableList></TableList>
        </DashboardLayout>
        <FloatMenu :option="'tables'"></FloatMenu>
    </div>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import FloatMenu from '@/modules/FloatMenu.vue';
import TableList from '@/modules/TableList.vue';

export default {
    name: 'TablesView',
    components: {
        DashboardLayout,
        FloatMenu,
        TableList
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