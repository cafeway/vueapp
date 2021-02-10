// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import { firestorePlugin } from 'vuefire'
import App from './App'
import firebase from 'firebase'
import router from './router'
import 'bootstrap'
import VueSwal from 'vue-swal'
import 'bootstrap/dist/css/bootstrap.min.css'
import vuetify from '@/plugins/vuetify'
import VueFirestore from 'vue-firestore'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueSwal)
Vue.use(Vuex)
Vue.use(firestorePlugin)
Vue.use(VueFirestore)
/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */
const configOptions = {
  apiKey: 'AIzaSyCOV7DEnom-HdWz3mO-CGtSX_at2rBZBtU',
  authDomain: 'hustlebidders.firebaseapp.com',
  projectId: 'hustlebidders',
  storageBucket: 'hustlebidders.appspot.com',
  messagingSenderId: '1045831540548',
  appId: '1:1045831540548:web:e9be5fd96b6240c3fe4111',
  measurementId: 'G-EQC5JY6CQ7'
}
firebase.initializeApp(configOptions)
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: {App},
  template: '<App/>'
})
