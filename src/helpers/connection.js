
import { settingHttp } from "../helpers/httpResquest";
export const setConnection = () => {
    const server = process.env.NODE_ENV;

    if ( server === 'develoment') {
        settingHttp.urlBase = [
            //se pueden agregar las url bases que se necesite, es necesario que todas lleven url y name
            {
                url: 'https://jsonplaceholder.typicode.com', name:'apiac'
            },
            {
                url: 'https://appsdev.cotemar.com.mx/IDMApi/api', name:'IDM'
            }
        ]
    }else{
        //agregar url base de productivo
        settingHttp.urlBase = [
            //se pueden agregar las url bases que se necesite, es necesario que todas lleven url y name
            {
                url: 'https://jsonplaceholder.typicode.com', name:'apiac'
            },
            {
                url: 'https://appsdev.cotemar.com.mx/IDMApi/api', name:'IDM'
            }
        ]
    }

}

