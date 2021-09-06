import axios from "axios";
// import { getToken } from "../modules/login/helpers/localStorageHelper";
import store from '../store/index';

// let tokenConfig = getToken();

const headerConfig = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    // 'Authorization': `${tokenConfig?.token_type} ${tokenConfig?.access_token}`
}


export const http = {
    
    get: function ( endPoint = "", params = {}, nameUlrBase = settingHttp.urlBase[0].name ) {
        let urlBase = getUrlBaseByName( nameUlrBase );
        return new Promise(( resolve, reject ) => {
                axios({
                    baseURL: urlBase,
                    method: 'GET',
                    url: endPoint,
                    params: params,
                    headers: headerConfig
                }).then( result => {
                    resolve(result)
                }).catch(error => {
                    store.commit('dashboard/setErrorHttp',{
                        isError: true,
                        message: error.toString(),
                    });
                    reject( error )
                });

        });
    },
    
    post: function ( endPoint = "", params = {} ,nameUlrBase = settingHttp.urlBase[0].name ) {

        let urlBase = getUrlBaseByName( nameUlrBase );

        return new Promise(( resolve, reject ) => {
                axios({
                    baseURL: urlBase,
                    method: 'POST',
                    url: endPoint,
                    data: JSON.stringify( params ),
                    headers: headerConfig 
                }).then( result => {
                   
                    resolve(result)
                }).catch(error => {
                    
                    store.commit('dashboard/setErrorHttp',{
                        isError: true,
                        message: error.toString(),
                    });
                    reject( error )
                });

        });
    },
    
    put: function ( endPoint = '', params = {} ,nameUlrBase = settingHttp.urlBase[0].name ) {
        let urlBase = getUrlBaseByName( nameUlrBase );

        return new Promise(( resolve, reject ) => {
                axios({
                    baseURL: urlBase,
                    method: 'PUT',
                    url: endPoint,
                    data: JSON.stringify( params ),
                    headers: headerConfig
                }).then( result => {
                    resolve(result)
                }).catch(error => {
                    store.commit('dashboard/setErrorHttp',{
                        isError: true,
                        message: error.toString(),
                    });
                    reject( error )
                });

        });
    },
    
    del: function ( endPoint = '', params = {}, nameUlrBase = settingHttp.urlBase[0].name  ) {
        let urlBase = getUrlBaseByName( nameUlrBase );

        return new Promise(( resolve, reject ) => {
                axios({
                    baseURL: urlBase,
                    method: 'DELETE',
                    url: endPoint,
                    data: JSON.stringify( params ),
                    headers: headerConfig
                }).then( result => {
                    resolve(result)
                }).catch(error => {
                    store.commit('dashboard/setErrorHttp',{
                        isError: true,
                        message: error.toString(),
                    });
                    reject( error )
                });

        });
    }
}

export const settingHttp = {
    urlBase: [
        {
            url: 'https://jsonplaceholder.typicode.com', name:'apiac'
        }
    ]
}


const getUrlBaseByName = ( nameUlrBase = "" ) => {
    return settingHttp.urlBase.filter( item => item.name === nameUlrBase )[0].url || '';
}