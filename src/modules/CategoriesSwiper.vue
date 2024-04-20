<template>
    <p>Categorías</p>
    <swiper :modules="modules" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
        :loop="false" :grabCursor="true" :breakpoints="breakpoints" class="categories-swiper">
        <swiper-slide v-for="category in categories" :key="category">
            <ButtonGeneral :classBtn="`btn-categories-swiper ${category.is_active ? 'active' : ''}`"
                :label="category.name" :type="'href'" @click="selectCategory(category.name)">
                <img :src="`../src/assets/images/icons/${category.is_active ? category.imageActive : category.image}`"
                    :alt="`icono ${category.name.toLowerCase()}`">
            </ButtonGeneral>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Custom components
import ButtonGeneral from '@/components/ButtonGeneral.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Pinia
import { useProductStore } from '@/stores/productStore';

export default {
    name: 'CategoriesSwiper',
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    components: {
        ButtonGeneral,
        Swiper,
        SwiperSlide
    },
    setup() {
        const onSwiper = (swiper) => {
            console.debug(swiper);
        };
        const onSlideChange = () => {
            console.debug('slide change');
        };
        const productStore = useProductStore();

        // Define la función para seleccionar una categoría
        const selectCategory = (categoryName) => {
            productStore.selectCategory(categoryName);
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
            selectCategory
        };
    },
    data() {
        return {
            active: false,
            breakpoints: {
                '@0.00': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '@0.50': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                '@1.25': {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
            },
        }
    },
    mounted() { },
    methods: {}
};
</script>

<style>
.categories-swiper {
    padding: 0 15px 15px 0px;
}

p {
    margin-bottom: 8px;
}
</style>