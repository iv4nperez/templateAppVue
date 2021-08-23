<template>
    <v-app style="background: #f4f8f9">
        <AppBar 
            title="Example"
            elevation="0"
            colorAppBar="white"
            outline
        >
            

            <AppBarProfile

            ></AppBarProfile>

            <AppModulesCotemar 
                labelModules="Spectrum Apps"
            />
        </AppBar>
        
        <NavigationDrawer 
            colorStyleBackground="#252f3e"
            colorStyleHeader="#1b2330"
            :breakPoint="this.$vuetify.breakpoint.name"
            :autoSize="true"
            colorFullName="white"
            colorEmail="#7e8c99"
            fullName="Armando Ivan Perez Chan"
            email="aiperezc@cotemar.com.mx"
        />

        <v-main class="ma-10">
            <slot />
        </v-main>


        <AppBarNotification />

    </v-app>
</template>
<script>
export default {
    components:{
        AppBar: () => import('../components/AppBar.vue'),
        NavigationDrawer: () => import('../components/NavigationDrawer.vue'),
        AppModulesCotemar: () => import('../components/AppModulesCotemar.vue'),
        AppBarNotification: () => import('../components/AppBarNotification.vue'),
        AppBarProfile: () => import('../components/AppBarProfile.vue')
    }
}
</script>