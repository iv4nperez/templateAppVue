import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#001c33',
            secondary: '#002b4d',
            activeDrawer: '#193d59'
          },
        },
    },
});
