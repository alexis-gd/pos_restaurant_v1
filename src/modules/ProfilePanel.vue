<template>
    <div class="profile-panel-container">
        <div class="card d-flex justify-content-center gap-4 lpb">
            <div class="lpi">
                <h4>Detalles de cuenta</h4>
                <p>Maneja los datos de tu cuenta</p>
                <Divider />
                <div class="d-flex align-items-center gap-2">
                    <Avatar image="/src/assets/images/avatar-default.svg" class="me-2" size="large" shape="circle" />
                    <span class="d-inline-flex flex-column">
                        <span class="fw-bold text-capitalize">{{ name }}</span>
                        <span class="text-sm text-capitalize">{{ username }}</span>
                    </span>
                </div>
                <Divider />
                <Button class="ppc-btn-danger" severity="danger" outlined @click="logout">
                    <img src="/src/assets/images/icons/exit-icon.svg" width="20px" alt="icon exit">
                    <span>Salir</span>
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

export default {
    name: 'ProfilePanel',
    components: {
        Avatar,
        // eslint-disable-next-line vue/no-reserved-component-names
        Button,
        Divider
    },
    methods: {
        logout() {
            localStorage.removeItem('customerData');
            this.$router.push('/auth/login');
        }
    },
    setup() {
        const userStore = useUserStore();
        const { name, username } = storeToRefs(userStore);
        userStore.fill();
        return {
            userStore,
            name,
            username
        }
    },
    data() {
        return {};
    },
    mounted() { }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.profile-panel-container {
    margin-bottom: 75px;

    .card {
        background: $surface-card;
        border: $card-border !important;
        border-radius: $border-radius;
    }

    .lpi {
        padding-inline: 2rem;
    }

    .lpb {
        padding-block: 2rem;
    }

    .ppc-btn-danger {
        border-radius: 10px;
        padding: 0.3rem 1rem;
    }
}
</style>