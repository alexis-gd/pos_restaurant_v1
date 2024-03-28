import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            id_user: '',
            name: '',
            username: '',
            level: ''
        }
    },

    actions: {
        fill() {
            const userData = JSON.parse(localStorage.getItem('customerData'));
            this.id_user = userData.id_user;
            this.name = userData.name;
            this.username = userData.id_user;
            this.level = userData.level;
        }
    }

    // getters funciones calculadas con la data
})