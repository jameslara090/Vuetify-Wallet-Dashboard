import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
     // light: {
     //   primary: '#007BFF',
     //   secondary: '#424242',
    //    accent: '#82B1FF',
    //    info: '#2196F3',
     //   success: '#4CAF50',
      //  warning: '#FFC107'
     // },
      dark: {
        background: '#000000'
      }
    },
  },
  icons: {
    iconfont: 'fa' || 'md'
  }
});
