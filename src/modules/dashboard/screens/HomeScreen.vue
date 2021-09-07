<template>
  <div>
    <v-row>
      <v-col sm="10">
        <div>
          <span 
            class="title" >Hola <b class="secondary--text">{{currentUser.fullNameComplete}}</b></span><br>
          <span 
            class="sub-title">Bienvenido de regreso.</span>
        </div>
      </v-col>
      <v-col>
        <v-select
          v-model="styleTemplate"
          label="style template"
          :items="styles"
        ></v-select>
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
                        <v-icon size="35" color="primary">
                          mdi-file-document
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <br>
                  <br>

                  <v-row style="padding: 0px;margin: 0px;">
                    <v-col >
                      <span class="price primary--text">$2,328</span><br>
                      <span class="prince-title">Total earnings</span>
                    </v-col>
                    <v-col >
                      <span class="price primary--text">$2,328</span><br>
                      <span class="prince-title">Campaings cost</span>
                    </v-col>
                  </v-row>
                  <br>
                  <v-row style="padding: 0px;margin: 0px;">
                    <v-col >
                      <!-- <v-btn style="border-radius:0px" large class="white--text" color="#29307d">
                        View report
                        <v-icon class="ml-3">mdi-arrow-right</v-icon>
                      </v-btn> -->
                      <c-button large >
                        View report
                        <v-icon class="ml-4">mdi-arrow-right</v-icon>
                      </c-button>
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
import { mapMutations, mapState } from "vuex";
import CButton from "../../../components/CButton/CButton.vue";

export default {
  name:'HomeScreen',
  components:{
    CButton,
    ChartsRounded: () => import('../components/charts/ChartsRounded.vue')
  },
  data(){
    return{
      styles:['primary-white','orange-white','primary-sky-white','gray-white','primary-full-white','blue-cotemar-dark']
    }
  },
  methods:{
    ...mapMutations('dashboard', ['setCurrentStyle'])
  },
  computed:{
    ...mapState('dashboard', ['currentUser','currentStyle']),
    styleTemplate:{
      get(){
        return this.currentStyle;
      },
      set( value ){
        this.setCurrentStyle( value )
      }
    }
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
  }
  .prince-title{
        color: #929292;
    font-size: 15px;
  }
</style>