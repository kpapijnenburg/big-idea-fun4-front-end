import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Details from "./views/Details.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: (next) => {
        let value = "; " + document.cookie;
        let parts = value.split("; " + "userId" + "=");

        if (parts.length == 2) {
          next();
        } else {
          next(false);
        }
      }
    },
    {
      path: "/details",
      name: "details",
      component: Details
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
