import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Store({
	state: {
		availableshares: 0,
		user: {
			email: '',
            username: '',
            phoneNumber: '',
            balance: '',
            shares: ''
		}
	},
	mutations: {},
	action: {},
	getters: {
		availableshares (state) {
			return state.availableshares()
		}
	},
})