<template>
    <div class="profile-view-container">
        <DialogLayout>
            <ProfilePanel></ProfilePanel>
        </DialogLayout>
        <FloatMenu :option="'profile'"></FloatMenu>
    </div>
</template>

<script>
import FloatMenu from '@/modules/FloatMenu.vue';
import DialogLayout from '@/layouts/DialogLayout.vue';
import ProfilePanel from '@/modules/ProfilePanel.vue';

export default {
    name: 'ProfileView',
    components: {
        DialogLayout,
        FloatMenu,
        ProfilePanel
    },
    setup() {
        return {}
    },
    data() {
        return {}
    },
    mounted() { },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.profile-view-container {
    padding: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>