import { getRoutes } from "../modules/login/helpers/localStorageHelper"
import router from "../router";

export const rebuildRoutes = () => {
    
    const itemMenu = getRoutes();

    if( itemMenu !== null ){
        router.options.routes = [];
        
        itemMenu.forEach(element => {
            element.component= () => import(/* webpackChunkName: "HomeScreen" */ '@/modules/dashboard/layouts/DashboardLayout.vue');
            
            if(element.hasChild) {

                if(element.name=="404") {
                    element.component=() => import('@/modules/shared/screens/NoScreenNotFound.vue')
                }
                
                element.children.forEach(hijo => {
                  hijo.component = () => import('@/modules/' + hijo.import + '.vue');
                }); 
        
            }     
        });

        itemMenu.forEach(element => {
            router.addRoute( element );
        });

        router.options.routes = [...itemMenu]

    }
}
