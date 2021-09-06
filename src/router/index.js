import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "HomeScreen" */ '@/modules/dashboard/screens/HomeScreen.vue'),
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "HomeScreen" */ '../modules/dashboard/screens/HomeScreen.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "LoginScreen" */ '@/modules/login/screens/LoginScreen.vue')
  },
  // {
  //   path: '/loginv2',
  //   name: 'Loginv2',
  //   component: () => import(/* webpackChunkName: "LoginScreen" */ '../modules/login/screens/LoginScreen-2.vue')
  // },
  // {
  //   path: '/calendar',
  //   name: 'Calendar',
  //   component: () => import(/* webpackChunkName: "CalendarScreen" */ '../modules/calendar/screens/CalendarScreen.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import(/* webpackChunkName: "NoScreenNotFound" */ '@/modules/shared/screens/NoScreenNotFound.vue')
  // },
]


const router = new VueRouter({
  routes
})


export default router
