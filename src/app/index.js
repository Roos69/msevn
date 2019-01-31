import Vue from 'vue';
import App from './App.vue';
import router from './router';
import  Vuetify  from 'vuetify';
// import Vuetify, {
//    VApp
//    VContainer,
//    VLayout,
//    VNavigationDrawer,
//    VFooter,
//    VToolbar,
//    VFadeTransition
// } from 'vuetify/lib';
// import { Ripple } from 'vuetify/lib/directives';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify);

// Vue.use(Vuetify, {
   // components:{
   //    VApp,
   //    VContainer,
   //    VLayout,
   //    VNavigationDrawer,
   //    VFooter,
   //    VToolbar,
   //    VFadeTransition
   // },
   // directives:{
   //    Ripple
   // }
// });

new Vue({
   router,
   render: h => h(App)
}).$mount('#app');
