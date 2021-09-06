// import { http } from "../../../helpers/httpResquest";
import router from "../../../router";
import { saveMenu, saveRoutes } from "./localStorageHelper";
export const buildMenu = ( webRoutes = [] ) => {
    let buildingMenu = [];



    let parentScreen = []
    webRoutes.forEach(element => {
        parentScreen.push( element.ParentScreen )
    });

    const dataArr = new Set(parentScreen);
    let resultKeyParents = [...dataArr];

    resultKeyParents.forEach(element => {
        
        let childrens = webRoutes.filter( item => item.ParentScreen === element )

        if ( childrens.length > 1 ) {
            
            let moreChildparent = {
                icon: childrens[0].ParentIcon,
                title: childrens[0].ParentScreen,
                children: childrens.map( child => ({
                    id: child.ScreenId,
                    icon: child.Icon,
                    title: child.ScreenName,
                    to: `/${child.ScreenName.toLowerCase()}`
                }))
            }

            buildingMenu.push( moreChildparent )
        }else {
            // debugger
            // let onlyParent = {
            //     icon: childrens[0].Icon,
            //     title: childrens[0].ScreenName,
            //     to: 
            // }
            // console.log(onlyParent)
        }

    });

    saveMenu(buildingMenu)

}

export const buildRoutes = async ( webRoutes = [] ) => {
    //esta construccion de rutas solo trabaja con IDM
    let buildingRoutes = [];
    let buildindChilds = []
    let parentRoute = {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "LoginLayout" */ '@/modules/dashboard/layouts/DashboardLayout.vue'),
    }

    webRoutes.forEach(element => {
        
        let routeWeb = {
            // parent: element.ParentScreen,
            path: `/${element.ScreenName.toLowerCase()}`,
            name: element.ScreenName,
            component: () => import( /* webpackChunkName: "group" */ "@/modules/" + element.ActionUrl + ".vue"),
            import: "@/modules/" + element.ActionUrl + ".vue",
            meta:{
                requireAuth: true
            },
        }
        buildindChilds.push(routeWeb)
        //se setean las rutas en el router
    });
    //se asignas las rutas hijas al unico padre
    parentRoute.children = buildindChilds

    //se agrega el padre con las rutas hijas
    buildingRoutes.push( parentRoute )

    buildingRoutes.forEach(element => {
        //se agrega al router
        router.addRoute( element );
    });
    
    //se agregan al router
    router.options.routes = [...buildingRoutes, ...router.options.routes]
    
    saveRoutes( buildingRoutes );
}