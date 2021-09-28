<template>
    <v-app>
        <slot />
          <AppBarNotification />
    </v-app>
</template>

<script>
export default {
    name:'AuthLayout',
    components:{
        AppBarNotification: () => import('@/modules/dashboard/components/AppBarNotification.vue')
    }
}
</script>