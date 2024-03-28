<template>
    <form>
        <div class="card d-flex justify-content-center gap-4 login-form lpb">

            <!-- Logo -->
            <GeneralLogo :brandLogo="brandLogo" :brandAlt="brandAlt" :width="'100'">
            </GeneralLogo>

            <!-- Title -->
            <GeneralTitle :title="$i18n.t('login-header-title')" :description="$i18n.t('login-header-description')">
            </GeneralTitle>

            <!-- AdviseMessage -->
            <AdviseMessage v-if="!!adviseMsg" :msg="$i18n.t(adviseMsg)" :adviseSuccess="adviseSuccess"></AdviseMessage>

            <!-- Input user -->
            <div :class="`d-flex flex-column gap-2 lpi ${userMeta.dirty ? !userMeta.valid
                ? 'login-error'
                : 'login-success'
                : ''
                }`">
                <label for="username" class="label-input">{{ $i18n.t('login-filed-user-label') }}</label>
                <InputText type="text" id="username" name="username" class=""
                    :placeholder="$i18n.t('login-input-user-placeholder')" v-model="user" maxlength="20" autofocus />
                <small v-show="userMeta.dirty || userMeta.invalid" id="username-help" class="login-small">{{
                userError ? $i18n.t(userError) : ""
            }}</small>
            </div>

            <!-- Input password -->
            <div :class="`d-flex flex-column gap-2 lpi ${passwordMeta.dirty ? !passwordMeta.valid
                    ? 'login-error'
                    : 'login-success'
                    : ''
                }`">
                <label for="password">{{ $i18n.t('login-filed-password-label') }}</label>
                <Password type="text" id="password" name="password" class=""
                    :placeholder="$i18n.t('login-input-password-placeholder')" v-model="password" toggleMask
                    :feedback="false" />
                <small v-show="passwordMeta.dirty || passwordMeta.invalid" id="password-help" class="login-small">{{
                passwordError ?
                    $i18n.t(passwordError) : "" }}</small>
            </div>

            <!-- Button form -->
            <div class="lpi">
                <Button type="submit" :disabled="!mainFormMeta.valid" label="Iniciar sesión" @click.prevent="onLogin()"
                    :loading="btnLoading" />
            </div>
        </div>
    </form>
</template>

<script>
import GeneralLogo from './GeneralLogo.vue';
import GeneralTitle from './GeneralTitle.vue';
import AdviseMessage from './AdviseMessage.vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

export default {
    name: 'LoginForm',
    components: {
        InputText,
        Password,
        // eslint-disable-next-line vue/no-reserved-component-names
        Button,
        GeneralLogo,
        GeneralTitle,
        AdviseMessage
    },
    setup() {
        // Define a validation schema
        const schema = yup.object({
            user: yup.string().min(2, "login-input-user-minError").required("login-input-user-requiredError"),
            password: yup.string().min(3, "login-input-password-minError").required("login-input-password-requiredError"),
        });
        // Create a form context with the validation schema
        const { meta: mainFormMeta } = useForm({
            validationSchema: schema,
        });
        // No need to define rules for fields
        const {
            value: user,
            errorMessage: userError,
            meta: userMeta,
        } = useField("user");
        const {
            value: password,
            errorMessage: passwordError,
            meta: passwordMeta,
        } = useField("password");

        // expose to template and other options API hooks
        return {
            user,
            userError,
            userMeta,
            password,
            passwordError,
            passwordMeta,
            mainFormMeta
        }
    },
    data() {
        return {
            brandLogo: 'vue-js.svg',
            brandAlt: 'vue js logo',
            adviseMsg: '',
            adviseSuccess: '',
            btnLoading: false
        }
    },
    mounted() { },
    methods: {
        onLogin() {
            this.btnLoading = true;

            const host = import.meta.env.VITE_APP_POS_SERVICE_HOST + import.meta.env.VITE_APP_POS_API_EP_LOGIN;

            let headersData = {
                "Content-Type": "application/json",
                "Authorization": `Bearer 12345`
            };

            const config = {
                headers: headersData
            };

            const bodyLogin = {
                usuario: this.user,
                password: this.password
            };

            this.axios
                .post(host, bodyLogin, config)
                .then((response) => {
                    const { action, data } = response.data;
                    this.btnLoading = false;

                    if (action === 'CONTINUE') {
                        localStorage.setItem('customerData', JSON.stringify(data.customer));
                        this.$router.push('/dashboard/home');
                    }
                })
                .catch((error) => {
                    this.user = '';
                    this.password = '';
                    this.btnLoading = false;
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
                });
        }
    }
};
</script>

<style lang="scss">
@import '@/assets/styles.scss';

.card {
    background: $surface-card;
    border: $card-border !important;
    border-radius: $border-radius;
}

.lpi {
    padding-inline: 3.5rem;
}

.lpb {
    padding-block: 3.5rem;
}

.login-form {

    .login-error {
        .p-inputtext {
            border-color: $error-form-field-color;
        }

        .p-inputtext:enabled:focus {
            outline: 1px solid $error-form-field-color;
            box-shadow: 0px 0px 4px $error-form-field-color;
        }
    }

    .login-success {
        .p-inputtext {
            border-color: $success-form-field-color;
        }

        .p-inputtext:enabled:focus {
            outline: 1px solid $success-form-field-color;
            box-shadow: 0px 0px 4px $success-form-field-color;
        }
    }

    .login-small {
        color: $error-form-field-color;
    }

    .p-button {
        height: 50px;
        width: 100%;
        border-radius: 6px;

        .p-button-label {
            font-weight: 600;
        }
    }

    .p-inputtext {
        height: 50px;
        width: 100%;
        font-family: Poppins, sans-serif;
    }

}

.warning {
    border-left: 5px solid $advise-warning-icon-color;
    background: $advise-warning-color;
}
</style>