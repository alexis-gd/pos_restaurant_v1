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
        font-size: 18px;
        gap: 10px;

        @media screen and (max-width: 767px) {
            font-size: 10px;
            gap: 0px;
        }

        &:not(.active):hover {
            background-color: $button-secondary-color;
        }
    }

    &.btn-categories-swiper {
        height: 40px;
        font-size: 13px;
        font-weight: 400;

        @media screen and (max-width: 767px) {
            flex-direction: row;
            justify-content: center;
        }

        &:not(.active):hover {
            background-color: $button-secondary-color;
        }
    }

    &.btn-product {
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 20px 0px 20px 0px;
        width: 65px;
        height: 45px;
        gap: 0px;
        justify-content: center;

        &:not(.active):hover {
            background-color: $button-secondary-color;
        }


    }

    &.btn-product-delete {
        width: 50px;
        height: 45px;
        gap: 0px;
        background-color: $button-danger-color;
        border-color: $button-danger-color;
        border-radius: 0 $border-radius $border-radius 0;
        flex-direction: row;
        justify-content: center;

        &:not(.active):hover {
            background-color: $button-danger-color-hover;
        }

        &:active {
            border-color: $button-danger-color-hover;
        }
    }

    &.btn-order-details {
        font-size: 10px;
        flex-direction: column;
        gap: 0px;
        width: 85px;
        height: 45px;
        border-radius: 5px;
        padding: 0px;
        background-color: $button-disabled-color;
        color: $font-color-disable;
        border-color: $button-disabled-color;

        &:not(.active):hover {
            background-color: $button-disabled-color-hover;
        }

        &:active {
            background-color: $button-disabled-color;
            color: $font-color-disable;
            border-color: $button-disabled-color;
        }
    }

    &.btn-table {
        font-size: 10px;
        flex-direction: column;
        gap: 0px;
        width: 100%;
        height: 33.3%;
        border-radius: 0px;
        padding: 0px;
        background-color: $button-disabled-color;
        color: $font-color-disable;
        border-color: $button-disabled-color;

        &:first-child {
            border-top-right-radius: $border-radius;
        }

        &:last-child {
            border-bottom-right-radius: $border-radius;
        }

        &:not(.active):hover {
            background-color: $button-disabled-color-hover;
        }
    }

    &.btn-modal {
        height: 45px;
    }

    &.btn-modal-secondary {
        background-color: $button-disabled-color;
        color: $font-color-disable;
        height: 45px;

        &:not(.active):hover {
            background-color: $button-disabled-color-hover;
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