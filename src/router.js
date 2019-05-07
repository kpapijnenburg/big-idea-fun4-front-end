import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/Details.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/details',
            name: 'details',
            component: Details
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})