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
      beforeEnter: checkUserId
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details,
      beforeEnter: checkUserId,
      props: true
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

// This function checks if there is a cookie with the name userId.
// If this is the case pages that need a logged in user will be accesible.
function checkUserId(to, from, next) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + "userId" + "=");

  if (parts.length == 2) {
    next(true);
  } else {
    next(false);
  }
}
