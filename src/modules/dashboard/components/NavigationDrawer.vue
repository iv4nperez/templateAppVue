<template>
    <!-- otra opcion es usar 60px para el drawer minimizado -->
    <v-navigation-drawer
        permanent
        :width="showDrawer ? '60' : '280'"
        app
        :color="settingColor.colorStyleBackground"
        class="elevation-8"
    >
        <div 
            style="height: 64px"
            :style="`background: ${ settingColor.colorStyleHeader }`"
        >
            <div v-if="showDrawer">
            <center>
                <v-row>
                <v-col>
                    <v-app-bar-nav-icon
                        style="margin-top: 13px"
                        @click="showDrawer = !showDrawer"
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
                    @click="showDrawer = !showDrawer"
                    dark
                ></v-app-bar-nav-icon>
                </v-col>
            </v-row>
            </div>
        </div>

        <div>
            <div 
                style="height: 139px;"
                :style="`background: ${ settingColor.colorStyleHeader }`"    
            >
            <div v-if="!showDrawer">
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
                    :style="`background:${ settingColor.colorStyleBackground }`"
                    class="circle-avatar-style"
                >
                    <v-card-text>
                    <v-avatar
                        style="margin-left: -7px; margin-top: -7px"
                        class="mr-2"
                        :color="settingColor.colorStyleBackground"
                        left
                        size="72"
                    >
                        <img :src="imgUser" />
                    </v-avatar>
                    </v-card-text>
                </div>
                </center>
            </div>
            <div v-else>
                <v-avatar class="ml-2 mt-4" size="42">
                <img :src="imgUser" />
                </v-avatar>
            </div>
            </div>
            <br />
            <br />
            <v-subheader class="text-drawer" 
                style="font-size: 13px;" 
                :style="`color: ${ settingColor.colorTextBackground }`"
                v-if="!showDrawer">APPLICATIONS</v-subheader>
            <v-subheader v-else style="color:rgb(190, 193, 197)">------</v-subheader>
  

            <v-list 
                style="padding-top: 0px" 
                nav 
                dense 
                :color="settingColor.colorStyleBackground"
            >
                <template v-for="(item) in items">
                    <template v-if="item.children">

                        <v-list-group
                            color="gray"
                            :key="item.id"
                            no-action
                        >
                       
                            <template v-slot:prependIcon >
                                <v-icon :color="settingColor.colorTextBackground" v-text="item.icon" ></v-icon>
                            </template>

                            <template v-slot:activator  >
                                <v-list-item-content>
                                    <v-list-item-title 
                                        :style="`color: ${ settingColor.colorTextBackground }`"
                                        class="text-drawer-menu" v-text="item.title"></v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item
                                v-for="( child) in item.children"
                                dark
                                link
                                :key="child.id"
                                :to="child.to"
                                @click.stop="navigateTo(child.to)"
                            >
                                <v-list-item-content>
                                    <v-list-item-title 
                                        :style="`color: ${ settingColor.colorTextBackground }`"
                                        class="text-drawer-menu" v-text="child.title" ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>

                    </template>
                    <template v-else>

                        <v-list-item
                                color="red"
                                :key="item.title" 
                                link 
                                :to="item.to" 
                            >
                                <v-list-item-icon>
                                    <v-icon :color="settingColor.colorTextBackground">{{ item.icon }}</v-icon> 
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>
                                        <span 
                                            :style="`color: ${ settingColor.colorTextBackground }`"
                                            class="text-drawer-menu" >{{ item.title }}</span>
                                    </v-list-item-title>
                                </v-list-item-content>     
                            </v-list-item>
                    </template>


                </template>
                
            </v-list>
        </div>
    </v-navigation-drawer>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    props: {
        // colorStyleBackground: {
        //     type: String,
        //     default: '#121212'
        // },
        // colorStyleHeader:{
        //     type: String,
        //     default: '#192d3e'
        // },
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
        },
        imgUser:{
            type: String,
            required: true
        },
        textDark:{
            type: Boolean,
            default: false
        },
        styleBackground:{
            type: String,
            default: 'primary-white'
        },
        items:{
            type: Array,
            required: true
        }
    },
    data(){
        return {
            value: false,
            // items: [
            //     {
            //         id: 1,
            //         icon: 'mdi-view-dashboard-outline',
            //         title: 'Dashboard',
            //         to: '/inicio'
            //     },
            //     {
            //         id: 2,
            //         icon: 'mdi-view-dashboard-outline',
            //         title: 'Components',
            //         child: [
            //             { 
            //                 id: 4,
            //                 title: 'Calendar',
            //                 to: '/calendar' 
            //             },
            //             { 
            //                 id: 5,
            //                 title: 'Login v1',
            //                 to: '/login' 
            //             },
            //             { 
            //                 id: 6,
            //                 title: 'Login v2',
            //                 to: '/loginv2' 
            //             }
            //         ],
            //     },
            //     {
            //         id: 3,
            //         icon: 'mdi-checkbox-multiple-blank-outline',
            //         title: 'Example Screen',
            //         child: [
            //             { 
            //                 id: 7,
            //                 title: 'About',
            //                 to: 'About' 
            //             },
            //         ],
            //     },
                
            // ],
        }
    },
    methods:{
        ...mapMutations('dashboard', ['setValueDrawer']),
        navigateTo(to){
            this.$router.push({path: to});
        },
        setSizeScreen(){
            if( this.autoSize ){
                if( this.breakPoint === 'xs' || this.breakPoint === 'sm' || this.breakPoint === 'md' ){
                    this.showDrawer = true;
                }else{
                    this.showDrawer = false;
                }
            }
        }
    },
    computed:{
        ...mapState('dashboard', ['drawer']),
        showDrawer:{
            get () {
                return this.drawer;
            },
            set (value) {
                this.setValueDrawer( value );
            }
        },
        settingColor(){

            switch( this.styleBackground ){
                case 'primary-white': 
                    return {
                        colorStyleHeader:'#29307d',
                        colorStyleBackground:'#ffffff',
                        colorTextBackground: '#5e5c5b'
                    };
                case 'primary-full-white': 
                    return {
                        colorStyleHeader:'#1b2330',
                        colorStyleBackground:'#252f3e',
                        colorTextBackground: '#c9ccd0'
                    };
                case 'orange-white': 
                    return {
                        colorStyleHeader:'#ff5000',
                        colorStyleBackground:'#ffffff',
                        colorTextBackground: '#5e5c5b'
                    }
                case 'primary-sky-white': 
                    return {
                        colorStyleHeader:'#1d99d6',
                        colorStyleBackground:'#ffffff',
                        colorTextBackground: '#5e5c5b'
                    }
                case 'gray-white': 
                    return {
                        colorStyleHeader:'#405565',
                        colorStyleBackground:'#ffffff',
                        colorTextBackground: '#5e5c5b'
                    }
               
                default:
                    return {
                        colorStyleHeader:'#252f3e',
                        colorStyleBackground:'#1b2330',
                    }
            }
        }
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

.text-drawer{
    color: rgb(190, 193, 197);
    font-weight: bold;
}
.text-drawer-menu{
    font-size:13px;
}
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