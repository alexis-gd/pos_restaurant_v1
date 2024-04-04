<template>
    <div class="float-bar-container">
        <div class="nav-container">
            <nav class="nav nav-pills shadow-sm">
                <button :class="`btn btn-primary ${option === 'orders' ? 'active' : ''}`" @click="goToPage('orders')">
                    <OrderIcon :class="`${option === 'orders' ? 'active' : ''}`" />
                    <span class="fb-span">Ordenes</span>
                </button>
                <button :class="`btn btn-primary ${option === 'tables' ? 'active' : ''}`" @click="goToPage('tables')">
                    <TableIcon :class="`${option === 'tables' ? 'active' : ''}`" />
                    <span class="fb-span">Mesas</span>
                </button>
                <button :class="`btn btn-primary ${option === 'products' ? 'active' : ''}`"
                    @click="goToPage('products')">
                    <ProductIcon :class="`${option === 'products' ? 'active' : ''}`" />
                    <span class="fb-span">Productos</span>
                </button>
                <button :class="`btn btn-primary ${option === 'profile' ? 'active' : ''}`" @click="goToPage('profile')">
                    <ProfileIcon :class="`${option === 'profile' ? 'active' : ''}`" />
                    <span class="fb-span">Perfil</span>
                </button>
            </nav>
        </div>
    </div>
</template>

<script>
import OrderIcon from '../components/icons/IconOrder.vue'
import TableIcon from '../components/icons/IconTable.vue'
import ProductIcon from '../components/icons/IconProduct.vue'
import ProfileIcon from '../components/icons/IconProfile.vue'

export default {
    name: 'FloatMenu',
    props: {
        option: String,
    },
    components: {
        OrderIcon,
        TableIcon,
        ProductIcon,
        ProfileIcon,
    },
    setup() {
        return {}
    },
    data() {
        return {}
    },
    mounted() { },
    methods: {
        goToPage(page) {
            this.$router.push('/dashboard/' + page);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.float-bar-container {

    .nav-container {
        padding: 20px;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1030;
    }

    .nav {
        background-color: $background-color;
        border-radius: $border-radius;
        justify-content: space-between;
    }

    .nav-link {
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $border-radius;
    }

    .btn-primary {
        width: 25%;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        background-color: $background-color;
        color: $font-color-secondary;
        border-color: $background-color;
        border-radius: $border-radius;
        transition: all .3s ease-in-out;

        @media screen and (max-width: 767px) {
            height: 55px;
            justify-content: space-around;
            text-align: center;
        }

        &.active {
            background-color: $button-primary-color;
            color: $background-color;
            border-color: $button-primary-color;

            &:hover {
                background-color: $button-primary-color-hover;
            }
        }

        &:not(.active):hover {
            background-color: $button-secondary-color;
        }

        .fb-span {
            padding-left: 5px;

            @media screen and (max-width: 767px) {
                font-size: 10px;
                padding-left: 0px;
            }
        }

        @media screen and (max-width: 767px) {
            flex-direction: column;
        }
    }

    .float-bar-img {
        width: 24px;
        height: 24px;
    }
}
</style>