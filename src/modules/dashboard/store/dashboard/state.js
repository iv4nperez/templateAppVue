// El state es nuestra fuente de la verdad en donde almacenaremos nuestra informacion global y es reactivo
export default () => ({
    currentUser: null,
    errorHttp: {
        isError: false,
        message: ''
    },
    drawer: false
})