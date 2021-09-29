import CryptoJS from 'crypto-js'
import { applicationName } from '../../../../helpers/applicationName';

import { http } from "../../../../helpers/httpResquest";
import { getCurrentUser } from '../../helpers/currentUser';
import { saveCurrentUser, saveToken } from '../../helpers/localStorageHelper';
import { /*buildMenu,*/ buildRoutes } from '../../helpers/menuIDM';
import router from "../../../../router";

// Las Actions son tareas asincronas que pueden llamar una mutacion

export const loginAuth = async (context , payload ) => {

    console.log(applicationName)
    debugger
    const key = CryptoJS.enc.Utf8.parse(applicationName.KeyIDM);
    const iv = CryptoJS.enc.Utf8.parse(applicationName.KeyIDM);

    const message = CryptoJS.enc.Utf8.parse(payload.Password);
    const encrypted = CryptoJS.AES.encrypt(message, key, {
      keySize: 16,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    let encryptedText = encrypted.toString();


    let paramModel = {  ...payload };

    
    delete paramModel.RemenberMe
    delete paramModel.DirectorioActivo

    if ( paramModel.TypeCredential === 0 ){
        paramModel.Password = encryptedText;
        paramModel.IsEncrypted = true;
    }

    paramModel.AppName = applicationName.AppNameIDM;
    paramModel.AppNameSecurity = applicationName.AppNameSecurity
    paramModel.Grant_type = applicationName.Grant_type
    debugger
    let { data } = await http.post('/Authenticate', paramModel, 'IDM');
    debugger
    if( data ){
        //save token
        saveToken(data);

        let { data:IDMInformation } = await http.post('/Security/Login', paramModel, 'IDM');

        if( IDMInformation.IsAuthenticated ){
            let resourceIMD = await getMenuIDM(IDMInformation);
            buildRoutes( resourceIMD )
           
            const currentUser = getCurrentUser( IDMInformation );
            saveCurrentUser( currentUser );
            
            router.push('/Home')
        }

    }   
}

const getMenuIDM = async (  payload ) => {
   
    let params = {
        UserId: payload.UserId,
        RoleId: payload.User.Roles[0].RoleId,
        ApplicationId: payload.ApplicationId
    }
    
    let { data } = await http.get('Screens/GetScreenRetrieveByUserRol/', params ,'IDM');
    return data;
}