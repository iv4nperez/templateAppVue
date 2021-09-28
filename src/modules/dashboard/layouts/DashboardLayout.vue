<template>
    <v-app style="background: #f4f8f9">
        <AppBar 
            title="Example"
            elevation="0"
            colorAppBar="white"
            outline
        >
            <AppBarProfile
                :fullName="currentUser.fullNameComplete"
                :role="currentRole"
                :imgUser="currentUser.urlImagePerson"
            ></AppBarProfile>

            <AppModulesCotemar 
                labelModules="Spectrum Apps"
            />
        </AppBar>
        
        <!-- estilos predefinidos de laylout -->
            <!-- primary-white -->
            <!-- orange-white -->
            <!-- primary-sky-white -->
            <!-- gray-white -->
            <!-- primary-full-white -->
        <NavigationDrawer 
            :items="menu"
            :styleBackground="currentStyle"
            :breakPoint="this.$vuetify.breakpoint.name"
            :autoSize="true"
            colorFullName="white"
            colorEmail="#7e8c99"
            :fullName="currentUser.fullNameComplete"
            :email="currentUser.email"
            :imgUser="currentUser.urlImagePerson"
        />

        <v-main class="ma-10">
            <router-view v-slot="{ Component }">
                <transition>
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>
            <!-- <router-view></router-view> -->
        </v-main>


        <AppBarNotification />

    </v-app>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { getTokenInformation, getCurrentUser } from "../../login/helpers/localStorageHelper";
import { buildMenu } from '../../login/helpers/menuIDM'

export default {
    components:{
        AppBar: () => import('../components/AppBar.vue'),
        NavigationDrawer: () => import('../components/NavigationDrawer.vue'),
        AppModulesCotemar: () => import('../components/AppModulesCotemar.vue'),
        AppBarNotification: () => import('../components/AppBarNotification.vue'),
        AppBarProfile: () => import('../components/AppBarProfile.vue')
    },
    data(){
        return{
            menu: null
        }
    },
    methods:{
        ...mapMutations('dashboard', ['setCurrentUser']),
    },
    computed:{
        ...mapState('dashboard', ['currentUser','currentStyle']),
        currentRole(){
            return this.currentUser.roles[0].NameRole || 'sin rol'
        }
    },
    created(){
    
        const credentials = getTokenInformation();
        const currentUser = getCurrentUser();
        if( credentials && currentUser) {
            
            this.setCurrentUser( currentUser );
           
            this.menu = buildMenu();
        }
    }
}
</script>
