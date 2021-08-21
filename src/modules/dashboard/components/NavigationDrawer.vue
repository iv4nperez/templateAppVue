<template>
    <v-navigation-drawer
        permanent
        :width="drawer ? '60' : '280'"
        app
        :color="colorStyleBackground"
    >
        <div 
            style="height: 64px"
            :style="`background: ${ colorStyleHeader }`"
        >
            <div v-if="drawer">
            <center>
                <v-row>
                <v-col>
                    <v-app-bar-nav-icon
                        style="margin-top: 13px"
                        @click="drawer = !drawer"
                        dark
                    ></v-app-bar-nav-icon>
                </v-col>
                </v-row>
            </center>
            </div>
            <div v-else>
            <v-row>
                <v-col>
                    <img
                        width="125"
                        style="margin-left: 11px; margin-top: 15px"
                        src="@/assets/Cotemar.png"
                    />
                </v-col>
                <v-col sm="3">
                <v-app-bar-nav-icon
                    style="margin-top: 13px"
                    @click="drawer = !drawer"
                    dark
                ></v-app-bar-nav-icon>
                </v-col>
            </v-row>
            </div>
        </div>

        <v-list style="padding-top: 0px" class="" dark :color="colorStyleBackground">
            <div 
                style="height: 139px;"
                :style="`background: ${ colorStyleHeader }`"    
            >
            <div v-if="!drawer">
                <br />
                <p :style="`color: ${ colorFullName }`" class="mb-1 name-principal">
                    {{ fullName }}
                </p>
                <p :style="`color: ${ colorEmail }`" class="name-subtitle">
                    {{ email }}
                </p>
                <br />
                <center>
                <div
                    :style="`background:${ colorStyleBackground }`"
                    class="circle-avatar-style"
                >
                    <v-card-text>
                    <v-avatar
                        style="margin-left: -7px; margin-top: -7px"
                        class="mr-2"
                        :color="colorStyleBackground"
                        left
                        size="72"
                    >
                        <img src="@/assets/user.png" />
                    </v-avatar>
                    </v-card-text>
                </div>
                </center>
            </div>
            <div v-else>
                <v-avatar class="ml-2 mt-4" size="42">
                <img src="@/assets/user.png" />
                </v-avatar>
            </div>
            </div>
            <br />
            <br />
            <v-subheader v-if="!drawer">APPLICATIONS</v-subheader>
            <v-subheader v-else>------</v-subheader>
            <template v-for="(item, i) in [1,2,3]">
            <v-list-item dense :key="i" >
                <v-list-item-action>
                <v-icon>mdi-folder-download</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title class="white--text">
                    Home
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props: {
        colorStyleBackground: {
            type: String,
            default: '#121212'
        },
        colorStyleHeader:{
            type: String,
            default: '#192d3e'
        },
        colorFullName:{
            type: String,
            default: 'white'
        },
        colorEmail:{
            type: String,
            default: '#7e8c99'
        },
        breakPoint:{
            type: String,
            required: true
        },
        autoSize:{
            type: Boolean,
            default: false
        },
        fullName:{
            type: String,
            default: ''
        },
        email:{
            type: String,
            default: ''
        }
    },
    data(){
        return {
            drawer: null
        }
    },
    methods:{
        setSizeScreen(){
            if( this.autoSize ){
                if( this.breakPoint === 'xs' || this.breakPoint === 'sm' || this.breakPoint === 'md' ){
                    this.drawer = true;
                }else{
                    this.drawer = false;
                }
            }
        }
    },
    computed:{

    },
    watch:{
        breakPoint(){
            this.setSizeScreen();
        }
    },
    created(){
        this.setSizeScreen();
    }
}
</script>
<style scoped>
.name-principal{
    margin-bottom: 7px;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
}
.name-subtitle{
    margin-bottom: 0px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
}
.circle-avatar-style{
    width: 90px;
    height: 90px;
    /* display: flex; */
    align-items: start;
    border-radius: 60px !important;
    margin-top: -4px;
}
</style>