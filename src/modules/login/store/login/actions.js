import CryptoJS from 'crypto-js'
import { applicationName } from '../../../../helpers/applicationName';

import { http } from "../../../../helpers/httpResquest";
import { getCurrentUser } from '../../helpers/currentUser';
import { saveCurrentUser, saveToken } from '../../helpers/localStorageHelper';
import { /*buildMenu,*/ buildRoutes } from '../../helpers/menuIDM';
import router from "../../../../router";
// Las Actions son tareas asincronas que pueden llamar una mutacion

export const loginAuth = async (context , payload ) => {

    let encryptedText = await CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(payload.password), "S1VualhoYVhxYlE9");
    let passEncript = encryptedText.toString();
    let paramModel = {  ...payload };

    delete paramModel.RemenberMe
    
    if ( paramModel.TypeCredential === 2 ){
        paramModel.Password = passEncript;
        paramModel.IsEncrypted = true;
    }

    paramModel.AppName = applicationName.AppNameIDM;
    paramModel.AppNameSecurity = applicationName.AppNameSecurity
    paramModel.Grant_type = applicationName.Grant_type

    let { data } = await http.post('/Authenticate', paramModel, 'IDM');

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