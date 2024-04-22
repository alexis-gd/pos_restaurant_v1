<template>
    <div class="order-details-container">
        <div class="box-text-title">
            <p class="text-title">Mesa #{{ clickedTable }}</p>
        </div>
        <div class="box-detail-content">
            <div class="box-text-subtitle">
                <p class="text-subtitle">Detalles de la orden</p>
                <span>Orden #57</span>
            </div>

            <div class="box-btn-customer row">
                <div class="col-3">
                    <ButtonGeneral :classBtn="`btn-order-details active`" :label="'Agregar'">
                        <IconPlus :class="'active'" />
                    </ButtonGeneral>
                </div>
                <div class="col-3">
                    <ButtonGeneral :classBtn="`btn-order-details active`" :label="'Agregar'">
                        <IconPlus :class="'active'" />
                    </ButtonGeneral>
                </div>
                <div class="col-3">
                    <ButtonGeneral :classBtn="`btn-order-details active`" :label="'Agregar'">
                        <IconPlus :class="'active'" />
                    </ButtonGeneral>
                </div>
                <div class="col-3">
                    <ButtonGeneral :classBtn="`btn-order-details active`" :label="'Agregar'">
                        <IconPlus :class="'active'" />
                    </ButtonGeneral>
                </div>
                <div class="col-3">
                    <ButtonGeneral :classBtn="`btn-order-details active`" :label="'Agregar'">
                        <IconPlus :class="'active'" />
                    </ButtonGeneral>
                </div>
            </div>

            <div>
                <div>chilaquiles x2 $ 152.00</div>
                <div>chilaquiles x2 $ 152.00</div>
                <div>chilaquiles x2 $ 152.00</div>
                <div>chilaquiles x2 $ 152.00</div>
            </div>

            <div>
                payment details
            </div>

        </div>
    </div>
</template>

<script>
import ButtonGeneral from '@/components/ButtonGeneral.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from "pinia"

export default {
    name: 'OrderDetails',
    components: {
        ButtonGeneral,
        IconPlus
    },
    setup() {
        const productStore = useProductStore();
        // Variables productStore
        const { clickedTable } = storeToRefs(productStore);
        // Functions productStore
        productStore.getClickedTableFromLocalStorage();
        return {
            // Variables productStore
            clickedTable
        }
    },
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.order-details-container {

    .box-text-title {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $background-primary-color;
        color: $background-color;
        height: 50px;
        border-radius: 10px 10px 0px 0px;
    }

    .text-title {
        font-size: 20px;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 0px;
    }

    .box-detail-content {
        background-color: $background-color;
        padding-inline: 16px;
    }

    .box-text-subtitle {
        padding-top: 35px;
        padding-bottom: 10px;
    }

    .text-subtitle {
        font-size: 18px;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 0px;
    }

    .box-btn-customer {
        padding-block: 10px;
    }
}
</style>