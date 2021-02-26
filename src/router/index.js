import Vue from 'vue'
import VueSwal from 'vue-swal'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import DialogLoader from '../components/DialogLoader'
import resetpassword from '../components/resetpassword'
import resetpass from '../components/resetpass'
import sharesdash from '../components/sharesdash'
import sell from '../components/sell'
import Admin from '../components/admin'
import auth from '../components/auth'
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
      path: '/admin',
      name: 'admin',
      component: Admin
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
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resetpassword
    },
    {
      path: '/resetpass',
      name: 'resetpass',
      component: resetpass
    },
    {
      path: '/sharesdash',
      name: 'sharesdash',
      component: sharesdash
    },
    {
      path: '/sell',
      name: 'sell',
      component: sell
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    }
  ]
})

export default router
