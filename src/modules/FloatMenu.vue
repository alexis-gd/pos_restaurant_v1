<template>
    <div class="float-bar-container">
        <div class="nav-container">
            <nav class="nav nav-pills shadow-sm">
                <ButtonGeneral :classBtn="`btn-float-bar ${option === 'orders' ? 'active' : ''}`" :label="'Ordenes'"
                    @click="goToPage('orders')">
                    <IconOrder :class="`${option === 'orders' ? 'active' : ''}`" />
                </ButtonGeneral>
                <ButtonGeneral :classBtn="`btn-float-bar ${option === 'tables' ? 'active' : ''}`" :label="'Mesas'"
                    @click="goToPage('tables')">
                    <IconTable :class="`${option === 'tables' ? 'active' : ''}`" />
                </ButtonGeneral>
                <ButtonGeneral :classBtn="`btn-float-bar ${option === 'products' ? 'active' : ''}`" :label="'Productos'"
                    @click="goToPage('products')">
                    <IconProduct :class="`${option === 'products' ? 'active' : ''}`" />
                </ButtonGeneral>
                <ButtonGeneral :classBtn="`btn-float-bar ${option === 'profile' ? 'active' : ''}`" :label="'Perfil'"
                    @click="goToPage('profile')">
                    <IconProfile :class="`${option === 'profile' ? 'active' : ''}`" />
                </ButtonGeneral>
            </nav>
        </div>
    </div>
</template>

<script>
import IconOrder from '../components/icons/IconOrder.vue'
import IconTable from '../components/icons/IconTable.vue'
import IconProduct from '../components/icons/IconProduct.vue'
import IconProfile from '../components/icons/IconProfile.vue'
import ButtonGeneral from '@/components/ButtonGeneral.vue'

export default {
    name: 'FloatMenu',
    props: {
        option: String,
    },
    components: {
        IconOrder,
        IconTable,
        IconProduct,
        IconProfile,
        ButtonGeneral
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
        width: 100%;
        max-width: 800px;
        padding: 20px;
        position: fixed;
        right: 50%;
        bottom: 0;
        z-index: 1030;
        transform: translateX(50%);
    }

    .nav {
        background-color: $background-color;
        border-radius: $border-radius;
        justify-content: space-between;
        min-width: 300px;
    }
}
</style>