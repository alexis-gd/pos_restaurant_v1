<template>
    <div class="order-details-container">
        <div class="box-details-container">
            <div class="box-text-title">
                <p class="text-title">Mesa #{{ clickedTable }}</p>
            </div>
            <div class="box-detail-content">
                <div class="box-text-subtitle">
                    <p class="text-subtitle">Detalles de la orden</p>
                    <span>Orden #57</span>
                </div>
                <div class="box-btn-customer">
                    <div class="row gap-0 row-gap-2">
                        <template v-for="table in tables" :key="table.id">
                            <template v-if="table.table_id === clickedTable">
                                <template v-for="customer in table.customers" :key="customer.id">
                                    <div class="col-4">
                                        <ButtonGeneral
                                            :classBtn="`btn-order-details ${customer.customer_id === clickedCustomer ? 'active' : ''} w-100`"
                                            :label="`Persona #${customer.customer_id}`"
                                            @click="setCustomer(customer.customer_id)">
                                            <IconProfile :class="'active'" />
                                        </ButtonGeneral>
                                    </div>
                                </template>
                            </template>
                        </template>
                    </div>
                </div>

                <div class="box-btn-customer">
                    <div class="row gap-0 row-gap-2">
                        <template v-for="table in tables" :key="table.id">
                            <template v-if="table.table_id === clickedTable">
                                <template v-for="customer in table.customers" :key="customer.id">
                                    <p class="text-subtitle">Persona #{{ customer.customer_id }}</p>
                                    <template v-for="product in customer.products" :key="product.id">
                                        <div class="col-12">
                                            <div class="d-flex justify-content-between">
                                                <span>{{ product.title }}</span>
                                                <span>{{ product.price }}</span>
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </template>
                        </template>
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
    </div>
</template>

<script>
import ButtonGeneral from '@/components/ButtonGeneral.vue';
import IconProfile from '@/components/icons/IconProfile.vue';
import { useProductStore } from '@/stores/productStore';
import { useTableStore } from '@/stores/tableStore';
import { storeToRefs } from "pinia";

export default {
    name: 'OrderDetails',
    components: {
        ButtonGeneral,
        IconProfile
    },
    setup() {
        const productStore = useProductStore();
        const { clickedTable, clickedCustomer } = storeToRefs(productStore);
        productStore.getClickedTableFromLocalStorage();
        const setClickedCustomer = productStore.setClickedCustomer;

        const tableStore = useTableStore();
        const { tables } = storeToRefs(tableStore);

        return {
            clickedTable,
            clickedCustomer,
            setClickedCustomer,
            tables
        }
    },
    methods: {
        setCustomer(customer_id) {
            this.setClickedCustomer(customer_id);
        }
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.order-details-container {
    display: flex;
    justify-content: center;
    min-width: 300px;

    .box-details-container {
        max-width: 350px;
        width: 100%;
    }

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