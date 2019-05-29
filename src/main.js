import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Vuetify from "vuetify";
import moment from "moment";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import UserServiceInstaller from "./installers/UserServiceInstaller.js";
import WorkOutServiceInstaller from "./installers/WorkOutServiceInstaller.js";
import SetServiceInstaller from "./installers/SetServiceInstaller.js";
import CategoryServiceInstaller from "./installers/CategoryServiceInstaller";
import ExerciseServiceInstaller from "./installers/ExerciseServiceInstaller";
import store from './store'

// Vue use icons
Vue.use(Vuetify, {
  iconfont: "fa"
});

// Define localhost baseUrl
// const baseUrl = "http://localhost:9000/";

// Define VPN baseUrl
const baseUrl = "http://192.168.30.183:8082/fitnessapp/"

// Vue use service installers
Vue.use(UserServiceInstaller, {
  baseUrl: baseUrl
});
Vue.use(WorkOutServiceInstaller, {
  baseUrl: baseUrl
});
Vue.use(SetServiceInstaller, {
  baseUrl: baseUrl
});
Vue.use(CategoryServiceInstaller, {
  baseUrl: baseUrl
});
Vue.use(ExerciseServiceInstaller, {
  baseUrl: baseUrl
});

// Filtering dates with the moment package
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
