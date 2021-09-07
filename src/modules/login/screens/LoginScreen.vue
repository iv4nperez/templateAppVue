<template>
    <LayoutLogin>
        <div>
            <v-row class="style-container">
                <v-col 
                    class="animate__animated animate__fadeIn"
                    style="background-color: #f6f7f9;border-left: 1px solid #e2e2e2;"
                    v-if="breakPoint !== 'xs' && breakPoint !== 'sm'"
                    xl="8"      
                    lg="7" 
                    md="7"  
                    sm="0"
                    cols="0"
                >
                    <Bienvenida
                        logoUri="https://cdnlogos.blob.core.windows.net/logos/General/LogoCotemarHorizontalFB.png"
                        :height="height"
                        :width="250"
                        text="Takin"
                        description="Cotemar con 23 años trabajando costa afuera y preparando la mejor empresa"
                        color="#757575"
                    />
                </v-col>
                <v-col
                    class="animate__animated animate__fadeIn"
                    style="border-left: 1px solid #dadada;"
                    xl="4"
                    lg="5"
                    md="5"
                    sm="12"
                    cols="12"
                >
                    <div key="1">
                        <div class="ma-8" style="padding: 30px;">
                            <LogoCenterImage
                                url="https://logos-world.net/wp-content/uploads/2021/02/Spectrum-Emblem.png"
                                width="250"
                                :isText="false"
                                text="Orion"
                                color="#0e1924"
                            />
                            <br>
                            <br>
                            <p>Login con tu cuenta</p>

                            <v-text-field
                                type="text"
                                outlined
                                v-model="user.UserName"
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
                                v-model="user.Password"
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
                                    <!-- <a class="RCol-R-01">Recuperar contraseña</a> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-btn
                                        type="submit"
                                        style="font-weight: 600"
                                        class="VBtn-L-01"
                                        color="primary"
                                        @click="login"
                                    >
                                        Login
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <center class="mt-5 mb-5">
                                <span>OR</span>
                            </center>

                            <v-row>
                                <v-col>
                                    <v-btn
                                        class="VBtn-L-01"
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
                                </v-col>
                            </v-row>
                            
                            
                            <br />
                            <br />
                            
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </LayoutLogin>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:'LoginScreen',
    components:{
        LayoutLogin: () => import('../layouts/LoginLayout.vue'),
        Bienvenida: () => import('../components/Bienvenida.vue'),
        LogoCenterImage: () => import('../components/LogoCenterImage.vue')
    },
    data(){
        return{
            showPassword: false,
            user: {
                UserName: 'aiperezc',
                Password: `ivpech12327!"#$`,
                DirectorioActivo: true,
                RemenberMe: false,
                TypeCredential: 0,
            },
        }
    },
    methods:{
        ...mapActions('login', ['loginAuth']),
        login(){
            this.user.TypeCredential = 1;
            this.loginAuth( this.user )
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
        },
        breakPoint(){
            return this.$vuetify.breakpoint.name;
        }
    }   

}
</script>
<style scoped>
.style-container{
    height: 100vh;
    margin: 0px;
    /* background-color: #f6f7f9; */
    
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