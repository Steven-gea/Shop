// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './tailwind.css'
// import currencyFilter from './filters/currency.js'

import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VeeValidate from 'vee-validate'
// import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
// import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
// import TW from 'vee-validate/dist/locale/zh_TW.json'
// import * as rules from 'vee-validate/dist/rules'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// import 'vue-loading-overlay/dist/vue-loading.min.css'
import Vuex from 'vuex'

// const $ = require('jquery')
// window.$ = $
// import $ from 'jquery'
// createApp(App).prototype.$ = $;
// VeeValidate.Validator.localize('zh_TW', zhTWValidate);
// localize('zh_TW', TW);
import data from './conponments/data.vue'
import nineteen from './conponments/nineteen.vue'
import twenty from './conponments/twenty.vue'
import twentyOne from './conponments/twentyOne.vue'

const app = createApp(App)

app.component('Loading', Loading)
    .component('Data', data)
    .component('Nineteen', nineteen)
    .component('Twenty', twenty)
    .component('Twenty-one', twentyOne)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .use(Vuex)
    .mount('#app')

app.config.globalProperties.$filters = {
    currencyUSD(value) {
        return '$' + value
    }
}
// Object.keys(rules).forEach((rule) => {
//     extend(rule, rules[rule]);
//   });

//   configure({
//     classes: {
//       valid: 'is-valid',
//       invalid: 'is-invalid'
//     }
//   });
//       .component('ValidationProvider', ValidationProvider).component('ValidationObserver', ValidationObserver)
//.use(VeeValidate).filter('currency', currencyFilter)
