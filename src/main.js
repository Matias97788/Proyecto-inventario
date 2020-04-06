/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBqTHBPtsF8Aik15Gham3aadgK_0rQZAc8",
  authDomain: "sitema-inventario.firebaseapp.com",
  databaseURL: "https://sitema-inventario.firebaseio.com",
  projectId: "sitema-inventario",
  storageBucket: "sitema-inventario.appspot.com",
  messagingSenderId: "280306894193",
  appId: "1:280306894193:web:e716030e384c7a948de2d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(user){
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
});
