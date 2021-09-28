import axios from "axios";
// import jwt_decode from "jwt-decode";
import { getTokenInformation } from "../helpers/localStorageHelper";

axios.interceptors.request.use(
    async function(config) {
      let tokenInformation = getTokenInformation();
      if(  tokenInformation ){

        config.headers.Authorization = `${ tokenInformation.token_type } ` + tokenInformation.access_token;
      }
      return config;
    },
    function(error) {
      // debugger;
      // console.log(error.toString())
      // Do something with request error
      return Promise.reject(error);
    }
);
