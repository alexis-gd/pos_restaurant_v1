<template>
    <div class="profile-view-container">
        <DashboardLayout>
            <h1>Tables</h1>
            <ProductList></ProductList>
        </DashboardLayout>
        <FloatMenu :option="'tables'"></FloatMenu>
    </div>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import FloatMenu from '@/modules/FloatMenu.vue';
import ProductList from '@/modules/ProductList.vue';

export default {
    name: 'TablesView',
    components: {
        DashboardLayout,
        FloatMenu,
        ProductList
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