<template>
    <template v-if="type != 'href'">
        <button :type="type" :class="`btn btn-primary ${classBtn}`" @click="$emit('click')">
            <slot></slot>
            <span class="btn-primary-span">{{ label }}</span>
        </button>
    </template>
    <template v-if="type == 'href'">
        <a href="#" :class="`btn btn-primary ${classBtn}`" @click="$emit('click')">
            <slot></slot>
            <span class="btn-primary-span">{{ label }}</span>
        </a>
    </template>
</template>

<script>
export default {
    name: 'AdviseMessage',
    components: {},
    props: {
        classBtn: String,
        label: String,
        type: {
            type: String,
            default: 'button',
        },
    },
    emits: ['click'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';


.btn-primary {
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 500;
    background-color: $background-color;
    color: $font-color-secondary;
    border-color: $background-color;
    border-radius: $border-radius;
    transition: all .3s ease-in-out;

    &.btn-float-bar {
        width: 25%;
    }

    &.btn-categories-swiper {
        height: 40px;
        font-size: 13px;
        font-weight: 400;

        @media screen and (max-width: 767px) {
            flex-direction: row;
            justify-content: center;
        }
    }

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

    &:active {
        background-color: $background-color;
        color: $font-color-secondary;
        border-color: $background-color;
    }

    &:focus-visible {
        box-shadow: none;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
}
</style>