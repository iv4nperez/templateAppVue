export const urlImage = 'https://serverimagen.cotemar.com.mx/AuthService.svc/getImageUser/min/';

export const getCurrentUser = ( payload ) => {

    let { UserName, FirstName, LastName, LastNameSecond, Email, Roles, UserId, IdPersona, IdCompany} = payload.User;
    return {
        userName: UserName,
        firstName: FirstName,
        lastName: LastName,
        lastNameSecond: LastNameSecond,
        email: Email,
        roles: Roles,
        userId: UserId,
        fullNameComplete: `${ FirstName } ${ LastName } ${ LastNameSecond }`,
        urlImagePerson: urlImage + (IdPersona === null ? "0" :  IdPersona) + "/" + ( IdCompany === null ? "0" : IdCompany )
    }
}