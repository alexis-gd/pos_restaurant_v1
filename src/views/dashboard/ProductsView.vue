<template>
    <div class="profile-view-container">
        <DashboardLayout>
            <h1>Products</h1>
            <ProductList></ProductList>
        </DashboardLayout>
        <FloatMenu :option="'products'"></FloatMenu>
    </div>
</template>

<script>
import FloatMenu from '@/modules/FloatMenu.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import ProductList from '@/modules/ProductList.vue';

export default {
    name: 'ProductsView',
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