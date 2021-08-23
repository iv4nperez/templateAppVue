<template>
    <v-app-bar 
        :style="outline ? 'border-bottom: 1px solid #d2d2d2 !important' : ''" 
        app 
        :color="colorAppBar" 
        :elevation="elevation" 
    >
        <!-- <v-app-bar-nav-icon
            v-if="showDrawer === true"
            @click="showDrawer = !showDrawer"
        ></v-app-bar-nav-icon> -->
        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <slot />
        <v-divider inset vertical></v-divider>
    </v-app-bar>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
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
    },
    data(){
        return{
            
        };
    },
    methods:{
        ...mapMutations('dashboard', ['setValueDrawer']),
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
        }
    }
}
</script>