// Las mutations son funciones sincronas y son las unicas que pueden modificar el state

export const setErrorHttp =  ( state, payload ) => {
    state.errorHttp = payload;
}