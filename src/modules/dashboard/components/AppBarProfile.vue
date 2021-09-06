<template>
    <div class="text-center mr-3">
    <v-menu offset-y rounded="lg">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          large
          text
          style="padding: 8px; border-radius: 8px"
        >
          <v-row>
              <v-col class="text-end">
                  <span class="role-user-name">{{ fullName }}</span><br>
                  <span class="role-user">{{ role }}</span>
              </v-col>
              <v-col style="padding-left: 0px;">
                    <v-avatar
                        size="35"
                    >
                        <img color="teal" left size="40" :src="imgUser" />
                    </v-avatar>
              </v-col>
          </v-row>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.eventClick"
          dense
        >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon> 
            </v-list-item-icon>
            <v-list-item-title>
              <span style="font-size: 13px">{{ item.title }}</span>
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import router from "../../../router";

export default {
    name:'AppBarProfile',
    props:{
      fullName: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      imgUser: {
        type: String,
        required: true
      }
    },
    data(){
        return{
            items: [
                { title: 'My Profile', icon:'mdi-account-outline', eventClick: () => {} },
                { title: 'Logout',icon: 'mdi-logout-variant', eventClick: () => this.logout() },
            ]

        }
    },
    methods:{
      logout(){
        localStorage.clear();
        router.push('/login')
      }
    }
}
</script>

<style  scoped>
    .role-user{
        font-size: 11px;
        color: #868585;
    }
    .role-user-name{
        font-size: 13px;
        color: #424344;
        font-weight: bold;
    }
</style>