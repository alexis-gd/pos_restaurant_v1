import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("ProductStore", {

    state: () => {
        return {
            categories: [], // Array de categorías
            products: [],   // Array de productos
            activeCategory: null, // Variable para almacenar la categoría activa
            clickedTable: null, // Variable para almacenar la mesa a la que se le dio click
            clickedCustomer: null, // Variable para almacenar el cliente al que se le dio click
        }
    },

    actions: {
        async fillOnce(category = 'comida') {
            // Verificar si las categorías o los productos están vacíos
            if (this.categories.length === 0 || this.products.length === 0) {
                await this.fill(category);
            }
        },
        async fill(category = 'comida') {
            const host = import.meta.env.VITE_APP_POS_API_HOST_MOCKOON;
            let endpoint = import.meta.env.VITE_APP_POS_API_EP_PRODUCTS;

            endpoint = endpoint.replace("{type}", category.toLowerCase());
            const apiEndpointWithParams = `${host}${endpoint}`;

            let headersData = {
                "Content-Type": "application/json",
                "Authorization": `Bearer 12345`
            };

            const config = {
                headers: headersData
            };

            const bodyLogin = {};

            try {
                const response = await axios.get(apiEndpointWithParams, bodyLogin, config);
                const { action, data } = response.data;

                if (action === 'CONTINUE') {
                    // Fill the `this.categories` variable with the categories
                    const categories = data.categories.map(category => ({
                        name: category.name,
                        iconComponent: category.iconComponent,
                        image: category.image,
                        imageActive: category.imageActive,
                        isActive: category.isActive,
                        products: category.products,
                    }));
                    this.categories = categories;

                    // Populate the `this.products` variable with the products
                    const products = categories.flatMap(category => category.products);
                    this.products = products;

                    // Establecer la categoría activa la primera vez
                    this.setInitialActiveCategory();

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
        // Acción para seleccionar una categoría activa
        selectCategory(categoryName) {
            // Itera sobre las categorías para encontrar la categoría seleccionada
            this.categories.forEach(category => {
                // Si el nombre de la categoría coincide, la marca como activa
                category.isActive = category.name === categoryName;
            });
            // Actualiza la categoría activa en el estado
            this.activeCategory = this.categories.find(category => category.isActive);
        },
        // Función para establecer la categoría activa la primera vez
        setInitialActiveCategory() {
            // Encontrar la primera categoría activa y establecerla como activa
            const activeCategory = this.categories.find(category => category.isActive);
            // Actualizar la categoría activa en el store
            this.activeCategory = activeCategory;
        },
        // Función para establecer la mesa a la que se le dio click
        setClickedTable(tableId) {
            this.clickedTable = tableId;
            // Guardar la mesa a la que se le dio click en localStorage
            localStorage.setItem('clickedTableId', JSON.stringify(this.clickedTable));
        },
        // Función para recuperar el cliente al que se le dio click del localStorage
        getClickedTableFromLocalStorage() {
            const clickedTable = JSON.parse(localStorage.getItem('clickedTableId'));
            if (clickedTable) {
                this.clickedTable = clickedTable;
            }
        },
        initializeClickedCustomer() {
            this.getClickedCustomerFromLocalStorage();
            if (!this.clickedCustomer) {
                this.clickedCustomer = '1';
                // Guardar el cliente al que se le dio click en localStorage
                localStorage.setItem('clickedCustomerId', JSON.stringify(this.clickedCustomer));
            }
        },
        // Función para establecer el cliente al que se le dio click
        setClickedCustomer(customerId = null) {
            if (customerId) {
                this.clickedCustomer = customerId;
                // Guardar el cliente al que se le dio click en localStorage
                localStorage.setItem('clickedCustomerId', JSON.stringify(this.clickedCustomer));
            }
        },
        // Función para recuperar el cliente al que se le dio click del localStorage
        getClickedCustomerFromLocalStorage() {
            const clickedCustomer = JSON.parse(localStorage.getItem('clickedCustomerId'));
            if (clickedCustomer) {
                this.clickedCustomer = clickedCustomer;
            }
        },
    },
});
