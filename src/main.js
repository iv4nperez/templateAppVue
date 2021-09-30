console.log("%c ¡Detente!", "color: red; font-weight: bold; font-size:40px;");
console.log("%c Esta función del navegador está pensada para desarrolladores. Si alguien te indico que copiaras y pegaras ¡No lo hagas!.","font-weight: 600; font-size:18px;");

import Vue from 'vue'
import './plugins/axios'
import '../src/css/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "../src/modules/login/middleware/axiosMiddleware"
import VueProgressBar from 'vue-progressbar'

import { setConnection } from "./helpers/connection";
import { rebuildRoutes } from './helpers/rebuildRoutes'
import { options } from './constans/progressBarRouterOptions'

import '../src/assets/fonts/ProductSans-Black.woff'
import '../src/assets/fonts/ProductSans-BlackItalic.woff'
import '../src/assets/fonts/ProductSans-Bold.woff'
import '../src/assets/fonts/ProductSans-BoldItalic.woff'
import '../src/assets/fonts/ProductSans-Italic.woff'
import '../src/assets/fonts/ProductSans-Medium.woff'
import '../src/assets/fonts/ProductSans-Regular.woff'
import '../src/assets/fonts/ProductSans-Thin.woff'

setConnection();



rebuildRoutes()

Vue.config.productionTip = false;

Vue.use(VueProgressBar, options)

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
