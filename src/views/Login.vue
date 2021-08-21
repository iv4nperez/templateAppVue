<template>
    <LayoutLogin>
        <div class="imageCarousel" fluid>
            <v-row>
                <v-col style="background: red">
                    <Bienvenida
                        logoUri="https://wingunetworks.com/Caso-Exito/Diavaz/assets/img/Diavaz-logo.png"
                        :height="height"
                        :width="120"
                        text="PORTAL DE DESCARGAS NÓMINAS"
                        description=""
                        color="#000000"
                    />
                </v-col>
                <v-col  style="background: blue">
                    <!-- <div key="1">
                        <div class="ma-8">
                            <LogoCenterImage
                                url="https://admin.googleusercontent.com/logo-scs-key333195"
                                width="250"
                                :isText="false"
                                text="Orion"
                                color="#0e1924"
                            />
                            <p>Login con tu Cuenta</p>

                            <v-text-field
                                type="text"
                                outlined
                            >
                                <div slot="label">
                                Email <b style="color: red">*</b>
                                </div>
                            </v-text-field>

                            <v-text-field
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPassword ? 'text' : 'password'"
                                @click:append="showPassword = !showPassword"
                                outlined
                            >
                                <div slot="label">
                                Password <b style="color: red">*</b>
                                </div>
                            </v-text-field>

                            <v-row>
                                <v-col class="RCol-01">
                                    <v-checkbox
                                    color="#61dafb"
                                    class="CbL-01"
                                    label="Recordar cuenta"
                                    ></v-checkbox>
                                </v-col>
                                <v-col class="RCol-01">
                                    <a class="RCol-R-01">Recuperar contraseña</a>
                                </v-col>
                            </v-row>



                            <v-btn
                                type="submit"
                                style="font-weight: 600"
                                class="VBtn-L-01"
                                color="primary"
                            >
                                Login
                            </v-btn>
                            <v-btn
                                class="VBtn-L-01 mt-5"
                                color="white"
                            >
                                <img
                                    class="mr-3"
                                    src="@/assets/image/google.png"
                                    alt=""
                                />
                                <span 
                                    style="font-weight: 600; color: #5a5a5a"
                                >
                                    Google
                                </span>
    
                            </v-btn>
                            <br />
                            <br />
                            <center><span>¿No tienes cuenta?</span></center>
                            <v-btn
                                class="VBtn-L-01 mt-5"
                                color="white"
                            >
                                <span style="font-weight: 600; color: #5a5a5a"
                                    >Registrarse</span
                                >
                            </v-btn>
                        </div>
                    </div> -->
                </v-col>
            </v-row>
        </div>
    </LayoutLogin>
</template>
<script>
export default {
    components:{
        LayoutLogin: () => import('../modules/login/layouts/LoginLayout.vue'),
        Bienvenida: () => import('../modules/login/components/Bienvenida.vue'),
        // LogoCenterImage: () => import('../modules/login/components/LogoCenterImage.vue')
    },
    data(){
        return{
            showPassword: false,
        }
    },
    computed: {
        height () {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 220;
                case "sm":
                    return 1020;
                case "md":
                    return 1002;
                case "lg":
                    return 980;
                case "xl":
                    return 937;
            }

            return 500;
        }
    }
}
</script>
<style scoped>
.imageCarousel {
  /* background-color: #0e1924; */
  height: 100%;
  width: 100%;
}

.principal {
  /* background-color: #0e1924; */
  /* background-color: red; */
  width: 100%;
  height: 100%;
}
.Frm-L-01 {
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 20px;
}
.titulo {
  font-weight: 400;
  font-size: 19px;
  line-height: 1.6;
}
.CbL-01 {
  padding: 0px;
  margin: 0px;
}
.RCol-01 {
  padding-top: 0px;
}
.RCol-R-01 {
  float: right;
}
.VBtn-L-01 {
  width: 100%;
  height: 40px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>