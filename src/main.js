/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
const VueFire = require('vuefire')
 
Vue.use(VueFire)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(user){
  new Vue({
    VueFire,
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
});
