<template>
    <div class="d-flex-auto pt-3 pb-4">
        <label for="horizontal-buttons" class="font-bold block mb-2 text-center">¿Deseas cancelar los pedidos y liberar
            la mesa?</label>
    </div>
</template>

<script>
export default {
    name: 'ModalClean',
    components: {},
    setup() {
        return {}
    },
    data() {
        return {
            visible: false,
        }
    },
    computed: {},
    mounted() { },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>