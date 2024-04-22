<template>
    <div class="table-list-container">
        <div class="row justify-content-center">
            <div class="box-table">
                <TableListItem :tables="tables"></TableListItem>
            </div>
        </div>
    </div>
</template>

<script>
import TableListItem from '@/modules/TableListItem.vue'
import { useTableStore } from '@/stores/tableStore'
import { storeToRefs } from "pinia"

export default {
    name: 'TableList',
    components: {
        TableListItem
    },
    setup() {
        const tableStore = useTableStore();
        // Variables tableStore
        const { tables } = storeToRefs(tableStore);
        // Functions tableStore
        tableStore.fillOnce();
        return {
            // Variables tableStore
            tables
        }
    },
    data() {
        return {}
    },
    computed: {},
    mounted() { },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.table-list-container {
    margin-bottom: 75px;

    .box-table {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 25px;
        padding-block: 30px;
        max-width: 800px;
    }
}
</style>