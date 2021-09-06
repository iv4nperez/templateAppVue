import { applicationName } from "../../../helpers/applicationName";

export const saveToken = ( value = '' ) => {
    localStorage.setItem( `${applicationName.AppNameSecurity}-token-information`, JSON.stringify(value) );
}

export const getTokenInformation = () => {
    return JSON.parse( localStorage.getItem(`${applicationName.AppNameSecurity}-token-information`));
}

export const saveRoutes = ( value ) => {
    localStorage.setItem( `${applicationName.AppNameSecurity}-routes`, JSON.stringify(value) );
}

export const getRoutes = () => {
    return JSON.parse( localStorage.getItem(`${applicationName.AppNameSecurity}-routes`));
}
export const saveMenu = ( value ) => {
    localStorage.setItem( `${applicationName.AppNameSecurity}-menu`, JSON.stringify(value) );
}

export const getMenu = () => {
    return JSON.parse( localStorage.getItem(`${applicationName.AppNameSecurity}-menu`));
}

export const saveCurrentUser = ( value ) => {
    localStorage.setItem( `${applicationName.AppNameSecurity}-user-information`, JSON.stringify(value) );
}

export const getCurrentUser = () => {
    return JSON.parse( localStorage.getItem(`${applicationName.AppNameSecurity}-user-information`));
}