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
    searchitemWithId: (state, id) => { return myApi.get(`pc/item/${id}`) },
    searchItemDetail: (state, name) => { return myApi.get(`pc/item-detail/${name}`) },
    searchItems: (state, name) => { return myApi.get(`pc/items/${name}`) },
    searchOverloadIngredient: (state, name) => { return myApi.get(`overload/${name}`) },
    searchGeneralRs: (state, name) => myApi.get(`general-rs/${name}`)
  },
  getters: {
    fecthTravelMerchant: state => {
      return myApi.get('travel-merchant')
    },
    fecthVisWax: state => myApi.get('vis-wax')
  },
  actions: {
  },
  modules: {

  }
})
