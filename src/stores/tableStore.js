import { defineStore } from "pinia";
import axios from "axios";

export const useTableStore = defineStore("TableStore", {

    state: () => {
        return {
            tables: [],
        }
    },

    actions: {
        async fillOnce() {
            // Verificar si las mesas están vacías
            if (this.tables.length === 0) {
                await this.fill();
            }
        },
        async fill() {
            const host = `${import.meta.env.VITE_APP_POS_SERVICE_HOST}${import.meta.env.VITE_APP_POS_API_EP_TABLES}`;

            const headersData = {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": `Bearer 12345`
            };

            const config = { headers: headersData };

            try {
                const response = await axios.get(host, config);
                const { action, data } = response.data;

                if (action === 'CONTINUE') {
                    const tables = data.tables.map(table => ({
                        table_id: table.table_id,
                        total_amount: table.total_amount,
                        type: table.type,
                        is_active: table.is_active === '1',
                        customers: table.customers.map(customer => ({
                            customer_id: customer.customer_id,
                            amount: customer.amount,
                            products: customer.products.map(product => ({
                                id: product.id,
                                title: decodeURIComponent(product.title),
                                price: product.price,
                                product_id: product.product_id
                            })),
                        })),
                    }));
                    this.tables = tables;
                    console.log(this.tables)
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
        async updateTableDb(table_id) {
            // Encuentra la tabla que se va a actualizar en el arreglo de tablas
            const tableToUpdate = this.tables.find(table => table.table_id === table_id);

            if (!tableToUpdate) {
                // Si no se encuentra la tabla, no se puede actualizar
                return;
            }

            // Haz una copia de la tabla para no modificar el original
            const tableToUpdateCopy = JSON.parse(JSON.stringify(tableToUpdate));

            // Aplica encodeURIComponent() al título de cada producto en la tabla copiada
            tableToUpdateCopy.customers.forEach(customer => {
                customer.products.forEach(product => {
                    product.title = encodeURIComponent(product.title);
                });
            });

            // Realiza la petición PUT para actualizar la tabla en la base de datos
            const host = `${import.meta.env.VITE_APP_POS_SERVICE_HOST}${import.meta.env.VITE_APP_POS_API_EP_TABLES}`;

            const headersData = {
                "Content-Type": "application/json",
                "Authorization": `Bearer 12345`
            };

            const config = { headers: headersData };
            let bodyLogin = {
                table_id: table_id,
                table_content: tableToUpdateCopy
            };

            try {
                const response = await axios.put(host, bodyLogin, config);
                console.log(response.data); // Maneja la respuesta de la petición PUT como desees
            } catch (error) {
                console.error("Error updating table:", error);
                // Maneja el error de la petición PUT según sea necesario
            }
        },
        async addToCart(productItem, tableId, customerId) {
            // Encuentra la mesa en this.tables usando tableId
            const tableToUpdate = this.tables.find(table => table.table_id === tableId);

            // Verifica si se encontró la mesa
            if (tableToUpdate) {
                // Encuentra el cliente correspondiente por su id
                const customerToUpdate = tableToUpdate.customers.find(customer => customer.customer_id === customerId);

                // Verifica si se encontró el cliente
                if (customerToUpdate) {
                    const product_id = customerToUpdate.products.length + 1;
                    // Agrega el producto al cliente encontrado
                    const productToAdd = {
                        id: (product_id).toString(),
                        title: productItem.title,
                        price: productItem.price,
                        product_id: productItem.id
                    };
                    console.log(productToAdd)
                    customerToUpdate.products.push(productToAdd);
                } else {
                    // Si no se encuentra el cliente, puedes manejar este caso según sea necesario
                    console.error('Customer not found:', customerId);
                }

                // Actualiza la mesa en la base de datos
                await this.updateTableDb(tableId);

                // Log para verificar que se ha agregado el producto correctamente
                console.log(`Producto ${productItem} agregado a la mesa ${tableId}`);
            } else {
                // La mesa no fue encontrada, muestra un mensaje de error o maneja la situación según lo necesites
                console.error(`Error: Mesa ${tableId} no encontrada`);
            }
        },
        async deleteFromCart(productId, tableId, customerId) {
            // Encuentra la mesa en this.tables usando tableId
            const tableToUpdate = this.tables.find(table => table.table_id === tableId);
            // Verifica si se encontró la mesa
            if (tableToUpdate) {
                // Encuentra el cliente correspondiente por su id
                const customerToUpdate = tableToUpdate.customers.find(customer => customer.customer_id === customerId);
                // Verifica si se encontró el cliente
                if (customerToUpdate) {
                    // Encuentra el cliente correspondiente por su id
                    const productIndex = customerToUpdate.products.findIndex(product => product.id === productId);
                    // Verifica si se encontró el producto por su id
                    if (productIndex !== -1) {
                        // El producto fue encontrado, ahora lo eliminamos
                        customerToUpdate.products.splice(productIndex, 1);
                    } else {
                        // El producto no fue encontrado
                        console.error(`No se encontró un producto con ID ${productId}.`);
                    }
                }
            }
            // Actualiza la mesa en la base de datos
            await this.updateTableDb(tableId);
        },
        updateCustomersCount(table_id, customersCount) {
            const tableIndex = this.tables.findIndex(table => table.table_id === table_id);
            if (tableIndex !== -1) {
                if (customersCount > 0) {
                    this.tables[tableIndex].is_active = true;
                }
                const customers = Array.from({ length: customersCount }, (_, index) => ({
                    customer_id: (index + 1).toString(),
                    amount: 0,
                    products: []
                }));
                this.tables[tableIndex].customers = customers;
            }
        },
        cleanTable(table_id) {
            const tableIndex = this.tables.findIndex(table => table.table_id === table_id);
            if (tableIndex !== -1) {
                this.tables[tableIndex].is_active = false;
                this.tables[tableIndex].type = '';
                this.tables[tableIndex].total_amount = '0';
                this.tables[tableIndex].customers = [];
                this.updateTableDb(table_id)
            }
        }
    }
});
