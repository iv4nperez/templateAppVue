<template>
    <div>
        <v-expansion-panels v-model="panel" flat >
            <v-expansion-panel>
                <v-expansion-panel-header class="white--text" style="min-height: 48px;" :color="color">

                    <v-row style="height: 16px;">
                        <v-col sm="6" style="margin-top: -18px;margin-left: -5px;">
                            <v-row>
                                <v-col sm="1" style="max-width: 35px !important;">
                                    <v-icon color="white">{{ iconText }}</v-icon>
                                </v-col>
                                <v-col>
                                    <v-toolbar-title style="font-weight: 300;font-size: 17px;">{{title}}</v-toolbar-title>
                                </v-col>
                            </v-row>

                        </v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content style="border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; " :style="{ border: `1px solid ${colorBorde}` }">
                    <br />
                    <slot />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>
<script>

export default {
    name:'CPanelExpansion',
    props:{
        color:{
            type: String,
            default: '#002b4d'
        },
        title:{
            type: String,
            default: 'Example'
        },
        iconText: {
            type: String,
            default: 'mdi-checkbox-multiple-blank-outline'
        },
        colorBorde: {
            type: String,
            default: '#002b4d'
        },
        elevacion:{
            type: Number,
            default: 0
        }
    },
    data(){
        return{
            panel: 0,
        }
    }
}
</script>

<style>
    .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
        color: white !important;
    }
</style>