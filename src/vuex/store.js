import Vue from 'vue'
import Vuex from 'vuex'
import bgImg1 from '@/assets/rs3/solak_crop2.jpg'
import homeImg from '@/assets/rs3/home.png'
import coins from '@/assets/rs3/Coins_detail.png'
import overload from '@/assets/rs3/Overload_detail.png'
import zgs from '@/assets/rs3/Zaros_godsword_detail.png'
import gainz from '@/assets/rs3/exclamation-mark.png'
import air from '@/assets/rs3/Air_rune_detail.png'
const axios = require('axios')

Vue.use(Vuex)

const myApi = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: { 'Access-Control-Allow-Origin': '*' }
})

export default new Vuex.Store({
  state: {
    images: [bgImg1],
    runes: [air],
    menusImgs: [homeImg, coins, gainz, overload, zgs],
    hw: 'null-data'
  },
  mutations: {
    searchitemWithId: (state, id) => { return myApi.get(`pc/item/${id}`) },
    searchItemDetail: (state, name) => { return myApi.get(`pc/item-detail/${name}`) },
    searchItems: (state, name) => { return myApi.get(`pc/items/${name}`) },
    searchOverloadIngredient: (state, name) => { return myApi.get(`overload/${name}`) },
    searchGeneralRs: (state, name) => myApi.get(`general-rs/${name}`),
    hw: hw
  },
  getters: {
    fecthTravelMerchant: state => {
      return myApi.get('travel-merchant')
    },
    fecthVisWax: state => myApi.get('vis-wax'),
    imagesCollection: state => state.images,
    runesCollection: state => state.runes,
    menusCollection: state => state.menusImgs

  },
  actions: {
  },
  modules: {

  }
})

function hw (state, val) {
  console.log(val)
  state.hw = val
}
