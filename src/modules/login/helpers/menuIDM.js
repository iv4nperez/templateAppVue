import { http } from "../../../helpers/httpResquest";

export const getMenuIDM = ( payload ) => {
    
    let params = {
        UserId: payload.UserId,
        RoleId: payload.User.Roles[0].RoleId,
        ApplicationId: payload.ApplicationId
    }

    let resourceMenu = await http.get()
}

export const getRoutesIDM = () => {

}