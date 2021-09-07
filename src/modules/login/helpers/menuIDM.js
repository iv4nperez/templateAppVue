// import { http } from "../../../helpers/httpResquest";
import router from "../../../router";
import { /* saveMenu,*/ getRoutes, saveRoutes 
} from "./localStorageHelper";
export const buildMenu = () => {
    
    let routesItems = getRoutes();
    if (routesItems === null) return;

    let itemsMenu = [];
    let contador = 0;
    routesItems.forEach(element => {
        if ( element.hasChild ) {
            contador += 1;
            let itemRoute = {
                id: contador,
                icon: element.icon,
                title: element.name,
            };

            if ( element.name != "404") {
                let itemsChild = [];
    
                element.children.forEach((childItem) => {
                    let itemSubModel = {
                        id:                 childItem.id,
                        title:              childItem.name,
                        icon:               childItem.icon,
                        to: element.path +  childItem.path,
                        tooltip:            childItem.tooltip
                    };
    
                    itemsChild.push(itemSubModel);
                });
    
                itemRoute.child = itemsChild;
                itemsMenu.push(itemRoute);
            }
        }

        
    });

    return itemsMenu;

}

export const buildRoutes = async ( webRoutes = [] ) => {

    let principalRoutes = [];
    webRoutes.forEach(element => {

        let route = {
            name: element.ParentScreen,
            icon: element.ParentIcon,
            order: element.ParentOrder,
            hasChild: true,
            meta:{requireAuth:true},
            component: () => import(/* webpackChunkName: "HomeScreen" */ '@/modules/dashboard/layouts/DashboardLayout.vue'),
        }   

        let existe = principalRoutes.filter(x => x.name === element.ParentScreen ).length;

        if ( existe === 0 ) {
            principalRoutes.push(route);
        }
        
    });

    //Agregamos la pagina de errores
    let noFoundNoPage = {
        icon:'',
        path: '/:pathMatch(.*)*',
        name: '404',
        order: 0 ,
        // hasChild: true,
        // props: true,
        component: () => import('@/modules/shared/screens/NoScreenNotFound.vue')
    }

    principalRoutes.push( noFoundNoPage );

    let childRoutes = [];
    principalRoutes.forEach( element => {

        let childRoute = webRoutes.filter( x => x.ParentScreen === element.name );
        
        let modelChild = childRoute.map((item) => ({
            id: item.ScreenId,
            name: item.ScreenName,
            icon:item.Icon,
            import:item.ActionUrl,
            path:`${item.ScreenName}`,
            tooltip:item.Tooltip        
        }));

        element.children = modelChild;
        
        if ( childRoute.length > 0 ) {
            element.path='/' + element.name + '/'
        }   
    
        childRoutes.push(element);
    });

    
    childRoutes.forEach(element => {
        element.children.forEach( item => {
            item.component = () => import('@/modules/' + item.import + '.vue');
        }); 
    });

    childRoutes.forEach(element => {
        router.addRoute( element );
    });


    router.options.routes = [/*...state.originalRoutes,*/ ...childRoutes]
    saveRoutes(router.options.routes)
}