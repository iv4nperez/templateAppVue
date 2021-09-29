<template>
    <div>
        <v-snackbar
            v-model="showError"
            timeout="7000"
            right
            top
            color="red lighten-1"
        >
        <v-icon class="mr-2">mdi-alert-circle-outline</v-icon>
        {{ errorHttp.message }}
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    icon
                    v-bind="attrs"
                    @click="showError = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'AppBarNotification',
    data(){
        return {
            snackbar: true
        }
    },
    methods:{
        ...mapMutations('dashboard', ['setErrorHttp'])
    },
    computed:{
        ...mapState('dashboard', ['errorHttp']),
        showError:{
            get () {
                return this.errorHttp.isError;
            },
            set (value) {
                this.setErrorHttp({
                    isError: value,
                    message: ''
                });
            }
        }
    }
}
</script>