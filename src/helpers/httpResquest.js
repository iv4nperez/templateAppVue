import axios from "axios";
import store from '../store/index';

export const http = async (method = 'GET', endPoint = '', params = {}) => {
    let result = '';
    try {
        response = await axios({
            method: method,
            url: endPoint,
            params: params,
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            }
        });
    } catch (error) {
        store.commit('dashboard/setErrorHttp',{
            isError: true,
            message: error.toString(),
        });
    }

    return result;
}