<template>
    <div class="product-list-container">
        <p>Categorías</p>
        <CategoriesSwiper></CategoriesSwiper>
    </div>
    <ProductListItem></ProductListItem>
</template>

<script>
import CategoriesSwiper from '@/modules/CategoriesSwiper.vue'
import ProductListItem from '@/modules/ProductListItem.vue'

export default {
    name: 'ProductList',
    components: {
        CategoriesSwiper,
        ProductListItem
    },
    setup() {
        return {}
    },
    data() {
        return {}
    },
    mounted() { },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.product-list-container {
    p {
        margin-bottom: 8px;
    }
}
</style>