<template>
    <div>
        <v-snackbar
            v-model="snackbar"
            timeout="7000"
            right
            color="red lighten-1"
        >
        <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
        Test Prueba: Ha ocurrido un error intenta mas tarde o prueba en otro momento...
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    icon
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    name:'AppBarNotification',
    data(){
        return {
            snackbar: true
        }
    }
}
</script>