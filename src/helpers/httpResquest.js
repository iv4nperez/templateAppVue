import axios from "axios";
import store from '../store/index';

const headerConfig = {
    Accept: "application/json, text/plain, /",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
}


export const http = {
    /**
     * Http realiza pecitiones de tipo GET a cualquier end-point
     * @param {String} endPoint recibe en end-point de la ruta
     * @param {Object} [params] Parametros que se envian atra vez de la petición
     * @param {String} [nameUlrBase] Nombre del edn-point a usar
     * @returns {Object}
     */
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
    urlBase: []
}


const getUrlBaseByName = ( nameUlrBase = "" ) => {
    return settingHttp.urlBase.filter( item => item.name === nameUlrBase )[0].url || '';
}