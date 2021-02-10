import Vue from 'vue'
import VueSwal from 'vue-swal'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import transactions from '../components/transactions.vue'

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
      path: '/transactions',
      name: 'transactions',
      component: transactions
    }
  ]
})

export default router
