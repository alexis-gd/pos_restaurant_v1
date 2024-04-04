import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            id_user: '',
            name: '',
            username: '',
            level: '',
            isAuthenticated: '',
        }
    },

    actions: {
        fill() {
            const userData = JSON.parse(localStorage.getItem('customerData'));
            if (userData) {
                this.id_user = userData.id_user;
                this.name = userData.name;
                this.username = userData.username;
                this.level = userData.level;
                this.isAuthenticated = true;
            } else {
                this.id_user = '';
                this.name = '';
                this.username = '';
                this.level = '';
                this.isAuthenticated = false;
            }
        }
    }

    // getters funciones calculadas con la data
})