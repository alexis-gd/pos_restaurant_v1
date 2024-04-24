<template>
    <template v-for="item in tables" :key="item.table_id">
        <div class="table-list-item-container">
            <div class="card-table">
                <div class="card-table-body" @click="goToProducts(item.table_id, item.is_active)">
                    <h5 :class="`card-table-title ${item.is_active ? 'active' : ''}`">Mesa #{{ item.table_id }}</h5>
                    <div class="card-table-img">
                        <img :src="`../src/assets/images/icons/table-icon${item.is_active ? '-active' : ''}.svg`"
                            class="card-img-top" alt="table svg">
                    </div>
                    <p :class="`card-table-price ${item.is_active ? 'active' : ''}`">${{ item.total_amount }}</p>
                    <p v-if="item.is_active" :class="`card-table-desc ${item.is_active ? 'active' : ''}`">{{ item.type
                        }}
                    </p>
                    <div v-if="item.is_active" class="d-flex">
                        <template v-for="customer in item.customers" :key="customer.customer_id">
                            <img :src="`../src/assets/images/icons/profile-icon-active.svg`" width="20px"
                                alt="profile svg">
                        </template>
                    </div>
                </div>
                <div class="box-table-button">
                    <ButtonGeneral :classBtn="`btn-table ${item.is_active ? 'active' : ''}`"
                        @click="setId(item.table_id, 'customer')" :label="'Personas'">
                        <IconPerson :class="'active'"></IconPerson>
                    </ButtonGeneral>
                    <ButtonGeneral :classBtn="`btn-table ${item.is_active ? 'active' : ''}`"
                        @click="setId(item.table_id, 'payment')" :label="'Cobrar'">
                        <IconTicket :class="'active'"></IconTicket>
                    </ButtonGeneral>
                    <ButtonGeneral :classBtn="`btn-table ${item.is_active ? 'active' : ''}`"
                        @click="setId(item.table_id, 'clean')" :label="'Limpiar'">
                        <IconClean :class="'active'"></IconClean>
                    </ButtonGeneral>
                </div>
            </div>
        </div>
    </template>

    <Dialog v-model:visible="visible" modal :header="titleModal" :style="{ width: '25rem' }">
        <template v-if="typeModal === 'customer'">
            <ModalCustomer @currentCustomerNumber="getCustomerNumber"></ModalCustomer>
        </template>
        <template v-if="typeModal === 'payment'">
            <ModalPayment></ModalPayment>
        </template>
        <template v-if="typeModal === 'clean'">
            <ModalClean></ModalClean>
        </template>
        <div class="d-flex justify-content-end gap-2">
            <ButtonGeneral :classBtn="`btn-modal-secondary`" label="Cerrar" @click="visible = false"></ButtonGeneral>
            <ButtonGeneral :classBtn="`btn-modal active`" label="Continuar" @click="setCustomers"></ButtonGeneral>
        </div>
    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import ButtonGeneral from '@/components/ButtonGeneral.vue'
import IconClean from '@/components/icons/IconClean.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
import IconTicket from '@/components/icons/IconTicket.vue'
import ModalCustomer from './ModalCustomer.vue'
import ModalPayment from './ModalPayment.vue'
import ModalClean from './ModalClean.vue'
import { useTableStore } from '@/stores/tableStore'
import { useProductStore } from '@/stores/productStore'

export default {
    name: 'TableListItem',
    props: {
        tables: {
            type: Object,
            required: true
        }
    },
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Dialog,
        ButtonGeneral,
        IconClean,
        IconPerson,
        IconTicket,
        ModalCustomer,
        ModalPayment,
        ModalClean
    },
    setup() {
        const tableStore = useTableStore();
        // Functions tableStore
        const updateCustomersCount = tableStore.updateCustomersCount;
        const cleanTable = tableStore.cleanTable;
        const updateTableDb = tableStore.updateTableDb;

        const productStore = useProductStore();
        // Functions productStore
        const setClickedTable = productStore.setClickedTable;

        return {
            // Functions tableStore
            updateCustomersCount,
            cleanTable,
            updateTableDb,

            // Functions productStore
            setClickedTable
        };
    },
    data() {
        return {
            visible: false,
            numberCustomer: 1,
            id_table: 0,
            typeModal: ''
        }
    },
    computed: {
        titleModal() {
            let type = '';
            if (this.typeModal === 'customer') {
                type = 'Clientes';
            }
            if (this.typeModal === 'payment') {
                type = 'Pagar';
            }
            if (this.typeModal === 'clean') {
                type = 'Cancelar Mesa';
            }
            return type;
        }
    },
    mounted() { },
    methods: {
        setId(table_id, type) {
            this.visible = true;
            this.id_table = table_id;
            this.typeModal = type;
        },
        setCustomers() {
            this.visible = false;
            if (this.typeModal === 'customer') {
                this.updateCustomersCount(this.id_table, this.numberCustomer);
            }
            if (this.typeModal === 'clean') {
                this.cleanTable(this.id_table)
            }
            this.numberCustomer = 1;
            this.updateTableDb(this.id_table)
        },
        doPayment() {
            console.log("doPayment", this.tables.table_id)
        },
        getCustomerNumber(valor) {
            this.numberCustomer = valor; // Capturar el valor emitido por el hijo
        },
        goToProducts(table_id, is_active) {
            this.setClickedTable(table_id);
            if (is_active) {
                this.$router.push('/dashboard/products');
            } else {
                this.setId(table_id, 'customer');
            }
        }
    }
};
</script>

<style lang="scss">
@import '@/assets/styles.scss';

.table-list-item-container {
    width: 100%;
    height: 100%;
    max-height: 150px;
    max-width: 350px;
    min-width: 300px;
    position: relative;
    cursor: pointer;

    .card-table {
        display: flex;
        background-color: $background-color;
        border-radius: 20px;
        width: 100%;
        height: 100%;

        .card-table-img {
            img {
                width: 30px;
            }
        }

        .card-table-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px;
            width: 80%;

            .card-table-title {
                font-size: 18px;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;

                &.active {
                    color: $font-color-primary;
                }
            }

            .card-table-desc {
                font-size: 13px;
                color: $font-color-secondary;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                margin-bottom: 0px;

                &.active {
                    color: $font-color-primary;
                }
            }

            .card-table-price {
                font-size: 15px;
                font-weight: 500;
                color: $font-color-secondary;
                margin-bottom: 0px;

                &.active {
                    color: $font-color-primary;
                }
            }
        }

        .box-table-button {
            position: relative;
            width: 20%;
            background-color: #ccc;
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
}

.p-inputnumber-input {
    text-align: center;
    height: 45px;
}

.p-inputnumber-button-down {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
}

.p-inputnumber-button-up {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
}

.p-dialog-header {
    border-bottom: $card-border;
}
</style>