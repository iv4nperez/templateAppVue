import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from '../modules/dashboard/store/dashboard'
import login from "../modules/login/store/login";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    login
  }
})
