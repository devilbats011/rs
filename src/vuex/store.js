import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

const myApi = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: { 'Access-Control-Allow-Origin': '*' }
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
    fecthTravelMerchant: state => {
      return myApi.get('travel-merchant')
    },
    test: (state) => { return null }
  },
  actions: {
  },
  modules: {
  }
})
