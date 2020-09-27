/* eslint-disable vue/no-unused-vars */
/* eslint-disable no-unused-expressions */
<template>
<div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        flat
        height="84px"
        class="accent1"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Le Cult</v-toolbar-title>
      </v-app-bar>
      <v-main class="accent1">
        <!-- <v-row align="center" justify="center" class="accent2" >
          <v-col class="col-12">
          </v-col>
        </v-row>
         -->
          <v-row class="full-body accent1 ma-0" style="" >
            <v-col class="col-3 full-height ma-0 pa-0" style="" >
              <v-card class="accent3" flat style="width:70%;margin:0 15%">
                <v-card-title class="white--text justify-center" style="position:relative;size:22px;top:0px" >Vis Wax</v-card-title>
                 <v-card-text class="text-center primary--text mb-0">
                  <div class="body-1">1 Slot</div>
                  <img :src="image" width="30px" height="30px" class="ma-1" />
                  <div class="caption">fire,air,water</div>
                </v-card-text>
                 <v-card-text class="text-center primary--text" >
                  <div class="body-1">2 Slot</div>
                  <img v-for="n in 4" :key="n" :src="image" width="27px" height="27px" class="ma-1" />
                  <div class="caption mb-1">fire,air,water,earth</div>
                </v-card-text>
              </v-card>
              <v-card class="my-4 pa-0 mx-0 accent2 text-center" flat style="width:100%;">
                <div class="side-menu-overlayer"></div>
                <div>hello</div>
              </v-card>
            </v-col>
            <v-col class="col-9 full-height accent2 ma-0 pa-0" >
                <div
                :style="{ backgroundImage: `url(${bgImg})` }"
                class="ma-0 pa-0 solak-overlayer"
                ></div>
            </v-col>
          </v-row>
      </v-main>
      <v-footer
        class="accent2"
        app
      >
        <span class="white--text ">&copy; Power by Vuetify </span>
      </v-footer>
    </v-app>
  </v-app>
</div>
</template>

<script>
import visWaxInfos from '@/services/viswax'
import travelmerchant from '@/services/travelmerchant'
import image from './assets/rs3/Air_rune_detail.png'
import bgImg from './assets/rs3/solak_crop.jpg'

export default {
  name: 'App',
  components: {
  },
  methods: {
    async visWaxHandler () {
      this.viswax = await visWaxInfos()
    },
    resize () {
      // eslint-disable-next-line no-unused-vars
      const width = document.querySelector('div.v-main__wrap').offsetWidth
      console.log(width, 'width')
      // document.querySelector('.resize-width-to-v-main').style.width = width + 'px'
    },
    async travelmerchantHandler () {
      this.travelmerchant = await travelmerchant()
      console.log(this.travelmerchant)
    }
  },
  mounted () {
    this.visWaxHandler()
    this.travelmerchantHandler()
    this.resize()
  },
  data () {
    return {
      viswax: {},
      travelmerchant: [],
      drawer: false,
      image: image,
      bgImg: bgImg
    }
  }
}

</script>
<style>
  p{
    color: #9BBCD1;
  }
  .full-body{
    height: 100%;
    width: 100%;
  }
  .solak-overlayer{
    background-size: 84% 38rem;
    width: 100%;
    height: 425px;
    position: fixed;
    top: 77px;
  }
  .resize-width-to-v-main
  {
    width: 100%;
  }
  .full-height{
    height: 100%;
  }
</style>
