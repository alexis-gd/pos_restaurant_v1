<template>
    <div class="login-view-container">
        <DialogLayout>
            <LoginForm></LoginForm>
        </DialogLayout>
    </div>
</template>

<script setup>
import DialogLayout from '@/layouts/DialogLayout.vue';
import LoginForm from '@/modules/LoginForm.vue';

</script>

<style lang="scss" scoped>
.login-view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>