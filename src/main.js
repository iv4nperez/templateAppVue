import Vue from 'vue'
import './plugins/axios'
import '../src/css/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { setConnection } from "./helpers/connection";


import '../src/assets/fonts/ProductSans-Black.woff'
import '../src/assets/fonts/ProductSans-BlackItalic.woff'
import '../src/assets/fonts/ProductSans-Bold.woff'
import '../src/assets/fonts/ProductSans-BoldItalic.woff'
import '../src/assets/fonts/ProductSans-Italic.woff'
import '../src/assets/fonts/ProductSans-Medium.woff'
import '../src/assets/fonts/ProductSans-Regular.woff'
import '../src/assets/fonts/ProductSans-Thin.woff'


setConnection();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
