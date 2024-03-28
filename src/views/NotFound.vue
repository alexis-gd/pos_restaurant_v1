<template>
    <div class="body">
        <DialogLayout>
            <div class="card d-flex justify-content-center gap-4 login-form lpb">
                <!-- Logo -->
                <div class="lpi">
                    <GeneralLogo :brandLogo="brandLogo" :brandAlt="brandAlt" :width="'100'">
                    </GeneralLogo>
                </div>

                <!-- Logo2 -->
                <div class="lpi">
                    <GeneralLogo :brandLogo="brandLogo2" :brandAlt="brandAlt2">
                    </GeneralLogo>
                </div>

                <!-- Title -->
                <div class="lpi">
                    <GeneralTitle :title="$t('notFound-header-title')" :description="$t('notFound-header-description')">
                    </GeneralTitle>
                </div>

                <!-- Return -->
                <div class="box-action-btn">
                    <Button label="Regresar al login" @click.prevent="goToLogin()" :loading="btnLoading" />
                </div>

                <!-- Go to login -->
                <div class="box-back-btn">
                    <Button label="Regresar" @click.prevent="goBack()" link />
                </div>
            </div>
        </DialogLayout>
    </div>
</template>

<script>
import DialogLayout from '@/layouts/DialogLayout.vue';
import GeneralLogo from '@/modules/GeneralLogo.vue';
import GeneralTitle from '@/modules/GeneralTitle.vue';
import Button from 'primevue/button';

export default {
    name: 'LoginForm',
    components: {
        DialogLayout,
        GeneralLogo,
        GeneralTitle,
        // eslint-disable-next-line vue/no-reserved-component-names
        Button
    },
    data() {
        return {
            brandLogo: 'vue-js.svg',
            brandAlt: 'vue js logo',
            brandLogo2: '/not-found.svg',
            brandAlt2: 'not found logo',
            adviseMsg: '',
            adviseSuccess: '',
            btnLoading: false
        }
    },
    methods: {
        goToLogin() {
            this.btnLoading = true;
            this.$router.push('/auth/login');
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    max-width: 500px;
}

.card {
    background: $surface-card;
    border: $card-border !important;
    border-radius: $border-radius;
}

.box-action-btn {
    padding-inline: 3rem;

    .p-button {
        height: 50px;
        width: 100%;
        border-radius: 6px;

        .p-button-label {
            font-weight: 600;
        }
    }
}

.box-back-btn {
    padding-inline: 3rem;
    text-align: center;

    .p-button-link {
        color: $font-color-default;
        background: unset;
        border: none;
        font-weight: 600;

        .p-button {
            text-decoration: none;

        }

        .p-button-label {
            font-weight: 600;
            text-decoration: none;

            &:hover {
                text-decoration: none;
            }
        }

        &:hover {
            color: $button-primary-color;
            text-decoration: none;
        }
    }
}

.lpi {
    padding-inline: 3rem;
}

.lpb {
    padding-block: 3rem;
}
</style>