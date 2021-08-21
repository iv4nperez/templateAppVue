<template>
    <v-app style="background: #f4f8f9">
        <AppBar 
            title="Example"
            elevation="0"
            colorAppBar="white"
            outline
        >
            <AppModulesCotemar 
                labelModules="Spectrum Apps"
            />
        </AppBar>
        
        <NavigationDrawer 
            colorStyleBackground="#121212"
            colorStyleHeader="#192d3e"
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

    </v-app>
</template>
<script>
export default {
    components:{
        AppBar: () => import('../components/AppBar.vue'),
        NavigationDrawer: () => import('../components/NavigationDrawer.vue'),
        AppModulesCotemar: () => import('../components/AppModulesCotemar.vue')
    }
}
</script>