<template>
    <LayoutLogin>
        <div class="style-container">
            <v-container fluid style="height: 100%;">
                <v-row 
                    style="height: 100%;"
                    class="full-height" justify="center" align="center">
                    <v-col sm="6" xl="2" lg="3" md="4" cols="9">
                        <v-card elevation="1" width="400" color="white">
                            <v-card-text>
                                <div class="pa-3">
                                    <div>
                                        <center>
                                            <v-img
                                                width="200"
                                                src="https://logos-world.net/wp-content/uploads/2021/02/Spectrum-Emblem.png"
                                            ></v-img>
                                        </center>
                                    </div>
                                    <div>
                                        <span style="    font-size: 24px;
                                        font-weight: bold;
                                        color: #252f3e;">Login to your account</span>
                                    </div>
                                    <br>
                                    <div >
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
                                        
                                        </v-row>
                                       <div>
                                            <v-btn
                                                color="primary"
                                                block
                                                rounded
                                                large
                                            >
                                                Login
                                            </v-btn>
                                            <center class="mt-4 mb-4">
                                                <span>OR</span>
                                            </center>
                                            <v-btn
                                                rounded
                                                color="primary"
                                                block
                                                large
                                            >
                                                Login
                                            </v-btn>
                                       </div>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </LayoutLogin>
</template>

<script>
export default {    
    components:{
        LayoutLogin: () => import('../layouts/LoginLayout.vue'),
    },
    data(){
        return{
             showPassword: false,
        }
    }
}
</script>

<style scoped>
.style-container{
    height: 100vh;
    margin: 0px;
    background-color: #192d3e;
}
.RCol-01 {
  padding-top: 0px;
}
.CbL-01 {
  padding: 0px;
  margin: 0px;
}
</style>