<template>
  <DashboardLayout>
    <v-row>
      <v-col>
        <span>Aqui graficas</span>
      </v-col>
      <v-col>
        <span>Aqui graficas</span>
      </v-col>
    </v-row>
  </DashboardLayout>
</template>
<script>
export default {
  name:'HomeScreen',
  components:{
    DashboardLayout : () => import('@/modules/dashboard/layouts/DashboardLayout.vue')
  }
}
</script>
