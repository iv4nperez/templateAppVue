<template>
  <DashboardLayout>
    <div>
      here content
        <!-- <v-container fluid>
            <v-row class="full-height" justify="center" align="center">
                <div>
                    <center>
                        <v-img
                            width="180"
                            src="//ssl.gstatic.com/docs/doclist/images/empty_state_trash_v2.svg"
                        ></v-img>
                        <br>
                        <span style="font-size: 18px">No hay elementos</span>
                    </center>
                </div>
            </v-row>
        </v-container> -->
    </div>
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
