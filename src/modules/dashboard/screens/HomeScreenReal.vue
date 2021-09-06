<template>
  <div>
    <v-row>
      <v-col sm="11">
        <div>
          <span 
            class="title" >Hola <b style="color:#29307d">{{currentUser.fullNameComplete}}</b></span><br>
          <span 
            class="sub-title">Bienvenido de regreso.</span>
        </div>
      </v-col>
      <v-col>
        fecha
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" xl="8" md="12" lg="8" >
        <v-card style="border-radius: 0px" elevation="5" height="350">
            <v-row style="padding: 0px;margin: 0px;height: 100%;">
              <v-col sm="5">
                <div>
                  <br>
                  <v-row  style="padding: 0px;margin: 0px;">
                    <v-col>
                      <v-btn icon>
                        <v-icon size="35" color="#29307d">
                          mdi-file-document
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <br>
                  <br>

                  <v-row style="padding: 0px;margin: 0px;">
                    <v-col >
                      <span class="price">$2,328</span><br>
                      <span class="prince-title">Total earnings</span>
                    </v-col>
                    <v-col >
                      <span class="price">$2,328</span><br>
                      <span class="prince-title">Campaings cost</span>
                    </v-col>
                  </v-row>
                  <br>
                  <v-row style="padding: 0px;margin: 0px;">
                    <v-col >
                      <v-btn style="border-radius:0px" large class="white--text" color="#29307d">
                        View report
                        <v-icon class="ml-3">mdi-arrow-right</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col  style="background:#dadada">
                  <ChartsRounded />
              </v-col>
            </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" xl="4" lg="4" >
        <v-card height="350">
         <ChartsRounded />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name:'HomeScreen',
  components:{
    //DashboardLayout : () => import('@/modules/dashboard/layouts/DashboardLayout.vue'),
    ChartsRounded: () => import('../components/charts/ChartsRounded.vue'),
    //ChartsPie: () => import('../components/charts/ChartsPie.vue')
  },
  computed:{
    ...mapState('dashboard', ['currentUser'])
  }
}
</script>

<style scoped>
  .title{
    font-size: 23px;
  }

  .sub-title{
    font-size: 19px;
  }
  .price{
            font-size: 35px;
    font-weight: bolder;
    color: #29307d;
  }
  .prince-title{
        color: #929292;
    font-size: 15px;
  }
</style>