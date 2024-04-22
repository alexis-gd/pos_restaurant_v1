<template>
    <div class="product-list-container">
        <CategoriesSwiper :categories="categories"></CategoriesSwiper>
        <div class="row">
            <div class="col-12 col-md-7 col-lg-8 col-xl-7 box-products">
                <template v-for="item in activeCategoryProducts" :key="item.id">
                    <ProductListItem :item="item"></ProductListItem>
                </template>
            </div>
            <div class="col-12 col-md-5 col-lg-4 col-xl-5">
                <OrderDetails></OrderDetails>
            </div>
        </div>
    </div>
</template>

<script>
import CategoriesSwiper from '@/modules/CategoriesSwiper.vue'
import OrderDetails from '@/modules/OrderDetails.vue'
import ProductListItem from '@/modules/ProductListItem.vue'
import { useProductStore } from '@/stores/productStore'
import { useTableStore } from '@/stores/tableStore';
import { storeToRefs } from "pinia"

export default {
    name: 'ProductList',
    components: {
        CategoriesSwiper,
        OrderDetails,
        ProductListItem
    },
    setup() {
        const productStore = useProductStore();
        // Variables productStore
        const { categories, activeCategory } = storeToRefs(productStore);
        // Functions productStore
        productStore.fillOnce();
        productStore.getClickedTableFromLocalStorage();
        productStore.initializeClickedCustomer();
        productStore.getClickedCustomerFromLocalStorage();

        const tableStore = useTableStore();
        // Functions tableStore
        tableStore.fillOnce();

        return {
            // Variables productStore
            categories,
            activeCategory,
        }
    },
    data() {
        return {}
    },
    computed: {
        activeCategoryProducts() {
            // Check if activeCategory exists and has products, then return them
            return this.activeCategory?.products || [];
        }
    },
    mounted() { },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.product-list-container {
    margin-bottom: 75px;

    .box-products {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 25px;
        padding-block: 30px;
    }
}
</style>