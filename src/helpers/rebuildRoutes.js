import { getRoutes } from "../modules/login/helpers/localStorageHelper"
import router from "../router";


export const rebuildRoutes = () => {
    
    //se obtienen todas las rutas
    let routerLocal = getRoutes();

    if( routerLocal === null ) return;

    // let routers = []

    routerLocal.forEach(element => {
        if( element.path === "/" && element.name === "Home" ){
            element.component = () => import(/* webpackChunkName: "LoginLayout" */ '@/modules/dashboard/layouts/DashboardLayout.vue');
        }

        element?.children.forEach(elementChild => {
            elementChild.component = () => import( elementChild.import )
        }); 

        router.addRoute( element )
    });
    
    router.options.routes = [ ...routerLocal,  ...router.options.routes];  
}
