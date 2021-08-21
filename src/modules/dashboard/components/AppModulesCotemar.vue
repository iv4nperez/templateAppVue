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
                <v-col v-for="(item, index) in icons" :key="index">
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
                        <img class="mt-2" width="35" :src="item.src" alt="" />
                        <p style="margin-bottom: 0px; color: #888888">
                          {{ item.name }}
                        </p>
                      </center>
                    </a>
                  </div>
                </v-col>
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
                    src: "https://image.flaticon.com/icons/svg/2111/2111436.svg",
                    name: "Drive",
                    url: "https://drive.google.com/drive/u/0/my-drive",
                },
                {
                    src: "https://image.flaticon.com/icons/svg/281/281769.svg",
                    name: "Gmail",
                    url: "https://mail.google.com/mail/u/0/?tab=cm",
                },
                {
                    src: "https://image.flaticon.com/icons/svg/2991/2991108.svg",
                    name: "Docs",
                    url: "https://docs.google.com/document/u/0/?tgif=d",
                },
                {
                    src: "https://image.flaticon.com/icons/svg/2991/2991211.svg",
                    name: "Calendar",
                    url: "https://calendar.google.com/calendar/r?tab=Cc",
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