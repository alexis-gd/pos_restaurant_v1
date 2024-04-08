<template>
    <div class="product-list-container">
        <p>Categorías</p>
        <CategoriesSwiper></CategoriesSwiper>
    </div>
    <template v-for="item in items" :key="item.id">
        <ProductListItem :item="item"></ProductListItem>
    </template>
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
        return {
            items: [
                {
                    id: 1,
                    image: 'url_de_la_imagen_1',
                    title: 'Producto 1',
                    description: 'Descripción del producto 1',
                    price: 10.99,
                    cta: 'Comprar ahora'
                },
                {
                    id: 2,
                    image: 'url_de_la_imagen_2',
                    title: 'Producto 2',
                    description: 'Descripción del producto 2',
                    price: 19.99,
                    cta: 'Agregar al carrito'
                },
                {
                    id: 3,
                    image: 'url_de_la_imagen_3',
                    title: 'Producto 3',
                    description: 'Descripción del producto 3',
                    price: 15.99,
                    cta: 'Ver detalles'
                }
            ]
        }
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