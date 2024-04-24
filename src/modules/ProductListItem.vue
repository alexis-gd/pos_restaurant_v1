<template>
    <div class="product-list-item-container">
        <div class="card-product">
            <div class="card-product-img">
                <img :src="`../src/assets/images/${item.image}`" class="card-img-top" :alt="`${item.title}`">
            </div>
            <div class="card-product-body">
                <h5 class="card-product-title">{{ item.title }}</h5>
                <p class="card-product-desc">{{ item.description }}</p>
                <p class="card-product-price">${{ item.price }}</p>
                <ButtonGeneral :classBtn="`btn-product active`" @click="addToCart()">
                    <IconPlus :class="'active'"></IconPlus>
                </ButtonGeneral>
            </div>
        </div>
    </div>
</template>

<script>
import IconPlus from '@/components/icons/IconPlus.vue';
import ButtonGeneral from '@/components/ButtonGeneral.vue';
import { useProductStore } from '@/stores/productStore'
import { useTableStore } from '@/stores/tableStore';
import { storeToRefs } from "pinia"

export default {
    name: 'ProductListItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    components: { ButtonGeneral, IconPlus },
    setup() {
        const tableStore = useTableStore();
        // Functions tableStore
        const storeAddToCart = tableStore.addToCart;

        const productStore = useProductStore();
        // Variables productStore
        const { clickedTable, clickedCustomer } = storeToRefs(productStore);
        return {
            // Variables productStore
            clickedTable,
            clickedCustomer,
            // Functions tableStore
            storeAddToCart
        }
    },
    data() {
        return {}
    },
    mounted() { },
    methods: {
        addToCart() {
            // Llama a la función addToCart del store de la mesa con los parámetros productId y tableId
            this.storeAddToCart(this.item, this.clickedTable, this.clickedCustomer);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.product-list-item-container {
    width: 100%;
    height: 100%;
    max-height: 150px;
    max-width: 400px;
    min-width: 300px;
    position: relative;

    .card-product {
        display: flex;
        background-color: $background-color;
        border-radius: 20px;

        .card-product-img {
            img {
                width: 150px;
                border-radius: 20px;
            }
        }

        .card-product-body {
            padding: 15px;

            .card-product-title {
                font-size: 18px;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                line-height: 22px;
            }

            .card-product-desc {
                font-size: 13px;
                color: $font-color-secondary;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .card-product-price {
                font-size: 15px;
                font-weight: 500;
                color: $font-color-base;
                margin-bottom: 0px;
            }
        }
    }
}
</style>