import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

// PrimeVUE
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Ripple from 'primevue/ripple';

//Boostrap
import "bootstrap/dist/css/bootstrap.min.css"

// Modulo para el manejo de idiomas
import { createI18n } from 'vue-i18n'
import { es_mx } from '@/assets/translates/es-mx'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

const messagesCopys = {
    'es-MX': es_mx
};

const currentLang = 'es-MX';

const i18n = createI18n({
    locale: currentLang,
    fasbackLocale: 'es-MX',
    messages: messagesCopys,
})

const app = createApp(App)

app.use(createPinia())
app.use(router);

// PrimeVUE
app.use(PrimeVue, {});
app.directive('ripple', Ripple);

// i18n
app.use(i18n);

//Axios
app.use(VueAxios, axios);

app.mount('#app')
