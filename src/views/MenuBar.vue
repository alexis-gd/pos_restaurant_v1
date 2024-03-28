<template>
    <div class="menu-bar-container">
        <Menubar :model="items">
            <template #start>
                <div>
                    <Avatar image="/src/assets/images/vue-js.svg"
                        class="flex align-items-center justify-content-center mx-2" size="large" />
                </div>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ms-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ms-auto': !root, 'ms-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ms-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                        }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down', { 'pi-angle-down ms-2': root, 'pi-angle-right ms-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <button v-ripple
                    class="position-relative overflow-hidden w-full p-link flex align-items-center p-2 text-color hover:surface-200 border-noround">
                    <Avatar image="/src/assets/images/avatar-default.svg" class="me-2" shape="circle" />
                    <span class="d-inline-flex flex-column">
                        <span class="fw-bold text-capitalize">{{ userStore.name }}</span>
                        <span class="text-sm">Admin</span>
                    </span>
                </button>
            </template>
        </Menubar>
    </div>
    <FloatBar></FloatBar>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Menubar from 'primevue/menubar';
import FloatBar from './FloatBar.vue';

export default {
    name: 'MenuBar',
    components: {
        Menubar,
        Badge,
        Avatar,
        FloatBar
    },
    setup() {
        const items = ref([
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            // {
            //     label: 'Features',
            //     icon: 'pi pi-star'
            // },
            // {
            //     label: 'Projects',
            //     icon: 'pi pi-search',
            //     items: [
            //         {
            //             label: 'Core',
            //             icon: 'pi pi-bolt',
            //             shortcut: '⌘+S'
            //         },
            //         {
            //             label: 'Blocks',
            //             icon: 'pi pi-server',
            //             shortcut: '⌘+B'
            //         },
            //         {
            //             label: 'UI Kit',
            //             icon: 'pi pi-pencil',
            //             shortcut: '⌘+U'
            //         },
            //         {
            //             separator: true
            //         },
            //         {
            //             label: 'Templates',
            //             icon: 'pi pi-palette',
            //             items: [
            //                 {
            //                     label: 'Apollo',
            //                     icon: 'pi pi-palette',
            //                     badge: 2
            //                 },
            //                 {
            //                     label: 'Ultima',
            //                     icon: 'pi pi-palette',
            //                     badge: 3
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Contact',
            //     icon: 'pi pi-envelope',
            //     badge: 3
            // }
        ]);
        const userStore = useUserStore();
        userStore.fill();

        return {
            items,
            userStore
        }
    },
    mounted() { this.$primevue.config.ripple = true; },
};
</script>

<style lang="scss">
@import '@/assets/styles.scss';

.flex {
    display: flex !important;
}

.p-menuitem-link,
.p-menubar-button {
    text-decoration: none;
    color: #334155;
}

.p-menubar {
    border-radius: $border-radius;
}

.p-menubar-root-list {
    margin-bottom: 0px;
    padding-left: 0px;
}

// avatar zone button
.text-sm {
    font-size: .875rem;
}

.w-full {
    width: 100% !important;
}

.border-noround {
    border-radius: 0 !important;
}

.text-color {
    color: var(--text-color) !important;
}
</style>