import { defineStore } from "pinia";
import axios from "axios";

export const useTableStore = defineStore("TableStore", {

    state: () => {
        return {
            tables: [],
        }
    },

    actions: {
        initializeFromLocalStorage() {
            const tablesData = localStorage.getItem('tablesData');
            if (tablesData) {
                this.tables = JSON.parse(tablesData);
            } else {
                this.generateEmptyTables(8);
            }
        },
        saveToLocalStorage() {
            localStorage.setItem('tablesData', JSON.stringify(this.tables));
        },
        async fillOnce() {
            // Verificar si las mesas están vacías
            if (this.tables.length === 0) {
                await this.generateEmptyTables(8);
            }
        },
        async fill() {
            const host = `${import.meta.env.VITE_APP_POS_SERVICE_HOST}${import.meta.env.VITE_APP_POS_API_EP_TABLES}`;

            const headersData = {
                "Content-Type": "application/json",
                "Authorization": `Bearer 12345`
            };

            const config = { headers: headersData };

            try {
                const response = await axios.get(host, {}, config);
                const { action, data } = response.data;

                if (action === 'CONTINUE') {
                    const tables = data.tables.map(table => ({
                        table_id: table.table_id, // 1
                        total_amount: table.total_amount, // 0
                        type: table.type, // ''
                        is_active: table.is_active, // false
                        customers: table.customers.map(customer => ({
                            customer_id: customer.customer_id, // 1
                            amount: customer.amount, // 0
                            products: customer.products, // []
                        })),
                    }));
                    this.tables = tables;
                    this.saveToLocalStorage(); // Guardar datos en localStorage
                }
            } catch (error) {
                const codeGeneric = 'UNKNOWN_ERROR';
                const code = error.response?.data?.code || codeGeneric;
                const action = error.response?.data?.action;

                if (action === 'SHOW_LOGIN') {
                    this.adviseMsg = 'advise-warning-login-invalidCredentials';
                    this.adviseSuccess = false;
                } else if (code === 'INVALID_TOKEN') {
                    this.adviseMsg = 'advise-warning-login-invalidToken';
                    this.adviseSuccess = false;
                } else {
                    this.adviseMsg = 'advise-warning-generalError';
                    this.adviseSuccess = false;
                }
            }
        },
        async generateEmptyTables(numTables = 8) {
            const emptyTables = [];
            for (let i = 1; i <= numTables; i++) {
                emptyTables.push({
                    table_id: i,
                    total_amount: 0,
                    type: '',
                    is_active: false,
                    customers: [],
                });
            }
            this.tables = emptyTables;
            this.saveToLocalStorage(); // Guardar datos en localStorage
        },
        updateCustomersCount(table_id, customersCount) {
            const tableIndex = this.tables.findIndex(table => table.table_id === table_id);
            if (tableIndex !== -1) {
                if (customersCount > 0) {
                    this.tables[tableIndex].is_active = true;
                }
                const customers = Array.from({ length: customersCount }, (_, index) => ({
                    customer_id: index + 1, // Incrementando desde 1
                    amount: 0,
                    products: []
                }));
                this.tables[tableIndex].customers = customers;
                this.saveToLocalStorage(); // Guardar datos actualizados en localStorage
            }
        },
        cleanTable(table_id) {
            const tableIndex = this.tables.findIndex(table => table.table_id === table_id);
            if (tableIndex !== -1) {
                this.tables[tableIndex].is_active = false;
                this.tables[tableIndex].customers = [];
                this.saveToLocalStorage(); // Guardar datos actualizados en localStorage
            }
        }
    }
});
