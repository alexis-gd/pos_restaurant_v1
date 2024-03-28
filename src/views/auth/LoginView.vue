<template>
    <div class="body">
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
.body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>