<template>
    <v-app>
        <div class="style-container">
            <v-container fluid>
                <v-row class="full-height" justify="center" align="center">
                    <div>
                        <center>
                            <span class="white--text title-error">404</span><br>
                            <span class="white--text subtitle-error">Pagina no encontrada</span>
                            <br>
                            <br>
                            <v-btn 
                                outlined 
                                color="white" 
                                @click="showRouter"
                            >
                                Regresar...
                            </v-btn>
                        </center>
                    </div>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>
<script>
export default {
    name:'NoScreenNotFound',
    methods:{
        showRouter(){
            console.log(this.$router.options.routes)
        }
    }
}
</script>

<style scoped>
.style-container{
    height: 100vh;
    background-color: #192d3e;
}

.title-error{
    font-size: 36px;
    font-weight: 700;
}

.subtitle-error{
    font-size: 25px;
    font-weight: 500;
}

.full-height{
    height: 100vh;
}

</style>