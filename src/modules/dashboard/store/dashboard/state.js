// El state es nuestra fuente de la verdad en donde almacenaremos nuestra informacion global y es reactivo
export default () => ({
    currentUser: null,
    currentStyle: 'primary-white',
    errorHttp: {
        isError: false,
        message: ''
    },
    drawer: false
})