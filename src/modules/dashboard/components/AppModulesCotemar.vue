<template>
    <div class="text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          offset-y
          offset-x
          rounded="lg"
        >
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  class="mr-2"
                  icon
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon>mdi-apps</v-icon>
                </v-btn>
              </template>
              <span>{{ labelModules }}</span>
            </v-tooltip>
          </template>

          <v-card>
            <v-card-text style="height: 300px">
              <v-row style="width: 300px">
                <div v-for="(item, index) in icons" :key="index">
                  <v-col >
                  <div
                    class="selectionhover"
                    style="width: 75px; border-radius: 6px"
                  >
                    <a
                      :href="item.url"
                      target="_blank"
                      style="text-decoration: none"
                    >
                      <center>
                        <img class="mt-2" width="60" :src="item.src" :alt="item.name" />
                        <p style="margin-bottom: 0px; color: #888888">
                          {{ item.name }}
                        </p>
                      </center>
                    </a>
                  </div>
                </v-col>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-menu>
      </div>
</template>
<script>

export default {
    name:'AppModulesCotemar',
    props:{
      labelModules:{
        type: String,
        required: true
      }
    },
    data(){
        return{
            menu: false,
            icons: [
                {
                    src: require('@/assets/logosystems/Cotplay.png'),
                    name: "Cotplay",
                    url: "https://templateappvue.netlify.app/#/Home/Dashboard",
                },
                {
                    src: require('@/assets/logosystems/PermisosTrabajo.png'),
                    name: "P. Trabajo",
                    url: "https://templateappvue.netlify.app/#/Home/Dashboard",
                },
                {
                    src: require('@/assets/logosystems/Taakin.png'),
                    name: "Taakin",
                    url: "https://templateappvue.netlify.app/#/Home/Dashboard",
                },
                {
                    src: require('@/assets/logosystems/SGM.png'),
                    name: "SGM",
                    url: "https://templateappvue.netlify.app/#/Home/Dashboard",
                },
                {
                    src: require('@/assets/logosystems/Spectrum.png'),
                    name: "Spectrum",
                    url: "https://templateappvue.netlify.app/#/Home/Dashboard",
                },
            ],
        }
    }
}
</script>

<style scoped>
  .selectionhover:hover {
    background: #eaeaea;
    cursor: pointer;
  }
</style>