<template>
    <div class="d-flex-auto pt-4 pb-5">
        <label for="horizontal-buttons" class="font-bold block mb-2 text-center">Clientes en la mesa</label>
        <InputNumber v-model="numberCustomer" class="text-center" inputId="horizontal-buttons" showButtons
            buttonLayout="horizontal" :step="1" mode="decimal" :min="1" :max="6" @input="setCustomerNumber">
            <template #incrementbuttonicon>
                <IconPlus :class="''"></IconPlus>
            </template>
            <template #decrementbuttonicon>
                <IconLess :class="''"></IconLess>
            </template>
        </InputNumber>
    </div>
</template>

<script>
import InputNumber from 'primevue/InputNumber';
import IconLess from '@/components/icons/IconLess.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

export default {
    name: 'ModalCustomer',
    components: {
        InputNumber,
        IconLess,
        IconPlus,
    },
    setup() {
        return {}
    },
    data() {
        return {
            visible: false,
            numberCustomer: 1
        }
    },
    computed: {},
    mounted() { },
    methods: {
        setCustomerNumber() {
            this.$emit('currentCustomerNumber', this.numberCustomer);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>