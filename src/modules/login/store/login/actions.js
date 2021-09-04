import { http } from "../../../../helpers/httpResquest";

// Las Actions son tareas asincronas que pueden llamar una mutacion

// export const myAction = async ({ commit }) => {

// }

export const loginAuth = async () => {

    // let params = {
    //     "Username": "",
    //     "Password": "",
    //     "Gran_type": "",
    //     "TypeCredential": "1",
    //     "AppName": "IMD",
    //     "AppNameSecurity": ""
    // }

    let result = await http.get('/todos/1');

    console.log(result)

}