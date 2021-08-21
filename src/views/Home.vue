<template>
  <DashboardLayout>
    
      <v-container style="height: 90vh">
        <v-row justify="center" align="center" >
        <v-col>
         
              <center>
                <br>
                <br>
                <br>
                <v-img
                    width="180"
                    src="//ssl.gstatic.com/docs/doclist/images/empty_state_trash_v2.svg"
                ></v-img>
                <br>
                <span style="font-size: 18px">No hay elementos</span>
              </center>
         
        </v-col>
      </v-row>
      </v-container>


  </DashboardLayout>
</template>
<script>
export default {
  components:{
    DashboardLayout : () => import('../modules/dashboard/layouts/DashboardLayout.vue')
  }
}
</script>