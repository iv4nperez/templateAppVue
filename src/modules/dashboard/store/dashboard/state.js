// El state es nuestra fuente de la verdad en donde almacenaremos nuestra informacion global y es reactivo
export default () => ({
    errorHttp: {
        isError: false,
        message: ''
    },
    drawer: false
})