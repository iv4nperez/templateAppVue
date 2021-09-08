import Vue from 'vue'
import VueRouter from 'vue-router'
import { getTokenInformation } from '../modules/login/helpers/localStorageHelper'

Vue.use(VueRouter)


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "LoginScreen" */ '@/modules/login/screens/LoginScreen.vue'),
    meta:{
      requireAuth: false
    }
  }
]


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const routeProtected = to.matched.some((record) => record.meta.requireAuth);
  const informationToken = getTokenInformation();

  if(to.name !== 'Login' && router.options.routes.length === 1){
    next({ name: 'Login' })
  }else if ( routeProtected && informationToken === null ) {
    next({  name: "Login" });
  }else if (  informationToken && to.name === "Login" ){

    if ( router.options.routes.length > 0 ){
      if(router.options.routes[0].children){
        let route = router.options.routes[0].children[0];
        next({  name: route.name })
      }else{
        next({  name: "Home" });
      }
    }else{
      next({  name: "Home" });
    }

  }else{
    next();
  }
  


});

export default router
