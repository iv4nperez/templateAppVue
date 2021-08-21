<template>
    <v-app-bar 
        :style="outline ? 'border-bottom: 1px solid #d2d2d2 !important' : ''" 
        app 
        :color="colorAppBar" 
        :elevation="elevation" 
    >
        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <slot />
        <v-divider inset vertical></v-divider>
    </v-app-bar>
</template>
<script>
export default {
    name:'AppBar',
    props:{
        title: {
            type: String,
            default: ''
        },
        colorAppBar:{
            type: String,
            default: 'white'
        },
        elevation:{
            type: String,
            default: '1'
        },
        outline:{
            type: Boolean,
            default: false
        }
    }
}
</script>