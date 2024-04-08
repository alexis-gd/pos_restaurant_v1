<template>
    <div class="card" style="width: 18rem;">
        <!-- <img :src="item.image" class="card-img-top" alt="Product Image"> -->
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">Precio: ${{ item.price }}</p>
            <button class="btn btn-primary" @click="addToCart">{{ item.cta }}</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductListItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    components: {},
    setup() {
        return {}
    },
    data() {
        return {}
    },
    mounted() { },
    methods: {
        addToCart() {
            // Implementa la lógica para agregar el producto al carrito
            console.log('Agregado al carrito:', this.item.title);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>