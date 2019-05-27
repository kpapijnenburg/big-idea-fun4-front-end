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
import CategoryServiceInstaller from './installers/CategoryServiceInstaller'

// Vue use icons
Vue.use(Vuetify, {
  iconfont: "fa"
});

// Vue use service installers
const baseUrl = "http://localhost:9000/";

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
})
// Filtering dates with the moment package
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
