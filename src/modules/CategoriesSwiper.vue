<template>
    <swiper :modules="modules" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
        :loop="false" :grabCursor="true" :breakpoints="breakpoints" class="categories-swiper">
        <swiper-slide>
            <ButtonGeneral :classBtn="'btn-categories-swiper active'" :label="'Comida'" :type="'href'">
                <IconFood :class="`${active === 'Comida' ? 'active' : 'active'}`" />
            </ButtonGeneral>
        </swiper-slide>
        <swiper-slide>
            <ButtonGeneral :classBtn="'btn-categories-swiper'" :label="'Bebidas'" :type="'href'">
                <IconDrinks :class="`${active === 'Bebidas' ? 'active' : ''}`" />
            </ButtonGeneral>
        </swiper-slide>
        <swiper-slide>
            <ButtonGeneral :classBtn="'btn-categories-swiper'" :label="'Postres'" :type="'href'">
                <IconDessert :class="`${active === 'Postres' ? 'active' : ''}`" />
            </ButtonGeneral>
        </swiper-slide>
        <swiper-slide>
            <ButtonGeneral :classBtn="'btn-categories-swiper'" :label="'Snacks'" :type="'href'">
                <IconSnacks :class="`${active === 'Snacks' ? 'active' : ''}`" />
            </ButtonGeneral>
        </swiper-slide>
        <swiper-slide>
            <ButtonGeneral :classBtn="'btn-categories-swiper'" :label="'Otros'" :type="'href'">
                <IconOther :class="`${active === 'Otros' ? 'active' : ''}`" />
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
// Import Icons components
import IconFood from '../components/icons/IconFood.vue';
import IconDessert from '../components/icons/IconDessert.vue';
import IconDrinks from '../components/icons/IconDrinks.vue';
import IconSnacks from '../components/icons/IconSnacks.vue';
import IconOther from '../components/icons/IconOther.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    components: {
        ButtonGeneral,
        IconFood,
        IconDessert,
        IconDrinks,
        IconSnacks,
        IconOther,
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
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
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
            }
        }
    }
};
</script>

<style>
.categories-swiper {
    padding: 0 15px 15px 0px;
}
</style>