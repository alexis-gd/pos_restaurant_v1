<template>
    <Menu :model="items" class="w-full md:w-15rem">
        <template #start>
            <div class="d-flex align-items-center gap-2 px-2 py-2">
                <Avatar image="/src/assets/images/vue-js.svg"
                    class="flex align-items-center justify-content-center mx-2" size="" />
                <span class="title-span">Perfil</span>
            </div>
        </template>
        <template #submenuheader="{ item }">
            <span class="text-primary font-bold">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
            <a v-ripple class="flex align-items-center" v-bind="props.action">
                <span class="title-span">{{ item.label }}</span>
            </a>
        </template>
        <template #end>
            <div class="d-flex align-items-center gap-2 p-2">
                <Avatar image="/src/assets/images/avatar-default.svg" class="me-2" shape="circle" />
                <span class="d-inline-flex flex-column">
                    <span class="fw-bold text-capitalize">{{ name }}</span>
                    <span class="text-sm text-capitalize">{{ username }}</span>
                </span>
            </div>
        </template>
    </Menu>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';

export default {
    name: 'ProfilePanel2',
    components: {
        Avatar,
        // eslint-disable-next-line vue/no-reserved-component-names
        Menu,
    },
    methods: {},
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
        return {
            items: [
                {
                    separator: true
                },
                {
                    label: 'Acciones',
                    items: [
                        {
                            label: 'Configuración',
                        },
                        {
                            label: 'Otro',
                        },
                        {
                            label: 'Salir',
                        }
                    ]
                },
                {
                    separator: true
                }
            ]
        };
    },
    mounted() { }
}
</script>

<style lang="scss">
@import '@/assets/styles.scss';

.title-span {
    font-size: 18px;
    font-weight: 500;
    color: $font-color-secondary;
}

.p-menu {
    border: unset;
    padding: 0px;
}

.p-menuitem-link {
    text-decoration: none;
}

ul {
    padding-left: 0px;
}
</style>