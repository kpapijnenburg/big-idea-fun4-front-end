import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios

// Use this for local hosted API
Vue.prototype.$api = "http://localhost:8080/"

// Use this for seclab hosted API
//Vue.prototype.$api = "http:192.168.30.183:8082/fitnessapp/"

Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
