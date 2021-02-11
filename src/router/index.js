import Vue from 'vue'
import VueSwal from 'vue-swal'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import DialogLoader from '../components/DialogLoader'

Vue.use(Router)
Vue.use(VueSwal)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/DialogLoader',
      name: 'DialogLoader',
      component: DialogLoader
    }
  ]
})

export default router
