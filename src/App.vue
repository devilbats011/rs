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
        <v-spacer></v-spacer>
        <v-toolbar-title>Dashboard</v-toolbar-title>
      </v-app-bar>
      <v-main class="accent1 mt-3">
        <!-- <v-row align="center" justify="center" class="accent2" >
          <v-col class="col-12">
          </v-col>
        </v-row>
         -->
          <v-row class="full-body accent1 ma-0" style="position:relative" >
            <v-col class="col-3 ma-0 pa-0 accent2" style="position:relative;" >
              <v-row class="accent1 ">
                <v-col class="mb-1">
              <v-card flat class="relative" style="width:70%;margin:0 15%;min-height:285px;">
                <div class="layer-mask accent3" style="height:285px;"></div>
                <section style="position:relative;z-index:3">
                <v-card-title class="white--text justify-center" style="position:relative;size:22px;top:0px" >Vis Wax</v-card-title>
                 <v-card-text class="text-center primary--text mb-0">
                  <div class="body-1">1 Slot</div>
                  <img :src="image" width="25px" height="25px" class="ma-1" />
                  <div class="caption">fire,air,water</div>
                </v-card-text>
                 <v-card-text class="text-center primary--text relative" style="top:-15px;" >
                  <div class="body-1">2 Slot</div>
                  <img v-for="n in 4" :key="n" :src="image" width="25px" height="25px" class="ma-1" />
                  <div class="caption mb-1">fire,air,water,earth</div>
                </v-card-text>
                </section>
              </v-card>
                </v-col>
              </v-row>
              <v-row class="mx-4 text-center primary--text accent2"  flat >
                <v-col class="d-flex flex-column">
                  <v-card
                    v-for="name in sidesmenu"
                    :key="name"
                    flat
                    class="pa-2 primary--text accent2 d-flex flex-row justify-start " style="font-size:14px;cursor:pointer;postion:relative;left:58px;overflow:hidden;height:4rem;"
                    tile >
                       <v-avatar tile class="" > <img :src="homeImg" style="height:25px;width:30px;" alt="sidemenus-icon" /></v-avatar>
                       <p class="py-4 px-1"> {{ name }} </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-9 accent2 ma-0 pa-0" style="position:relative;z-index:2;auto" >
                <div
                :style="{ backgroundImage: `url(${bgImg})`, zIndex:3 }"
                class="ma-0 pa-0 solak-overlayer"
                ></div>
                <v-container class="ml-6 relative" style="width:90%;z-index:3" >
                  <section class="d-flex flex-row my-6"  >
                    <v-card class="" style="width:40%;height:45px;background-color:transparent !important">
                      <div class="layer-mask accent3" style="height:50px;z-index:4"> </div>
                      <div class="relative" style="z-index:5">search</div>
                    </v-card>
                  </section>
                  <section class="d-flex flex-row my-6" >
                    <v-card style="width:32%;margin-right:6%;height:150px;background-color:transparent !important" >
                      <div class="layer-mask accent3" style="height:150px;z-index:4"> </div>
                      <div class="relative" style="z-index:5">warband</div>
                    </v-card>

                    <v-card style="width:66%;height:150px;background-color:transparent !important" >
                      <div class="layer-mask accent3" style="height:150px;z-index:4"> </div>
                      <div class="relative" style="z-index:5">warband table</div>
                    </v-card>
                  </section>
                  <section class="d-flex flex-row " >
                    <v-card class="accent3" style="width:100%;height:240px;background-color:transparent !important" >
                      <div class="layer-mask accent3" style="height:240px;z-index:4"> </div>
                      <div class="relative" style="z-index:5">travel merchant</div>
                    </v-card>
                  </section>
                </v-container>
            </v-col>
          </v-row>
      </v-main>
      <v-footer
        class="accent2"
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
import image from '@/assets/rs3/Air_rune_detail.png'
import bgImg from '@/assets/rs3/solak_crop2.jpg'
import homeImg from '@/assets/rs3/home.png'

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
    // this.visWaxHandler()
    // this.travelmerchantHandler()
    // this.resize()
  },
  data () {
    return {
      viswax: {},
      travelmerchant: [],
      drawer: false,
      image: image,
      bgImg: bgImg,
      sidemenu_height: '41%',
      homeImg: homeImg,
      sidesmenu: ['Dashboard', 'Overload', 'Price Check', 'Pvm Preset', 'Alog|Exp|Gainz!']
    }
  }
}

</script>
<style>

  p{
    color: #9BBCD1;
    background:transparent !important;
  }
  .relative{
    position:relative;
    z-index: 2;
  }
  .full-body{
    min-height: 100%;
    width: 100%;
  }
  .solak-overlayer{
    background-size: cover;
    width: 100%;
    height: 405px;
    position: absolute;
    top: 0px;
  }
  .sidemenu-overlay{
    position: relative;
    width: 100%;
    height: 100px;
  }
  .side-menu-container{
    position: relative;
    z-index: 3;
  }
  .resize-width-to-v-main
  {
    width: 100%;
  }
  .full-height{
    height: 100%;
  }
  .layer-mask{
    opacity:80%;
    margin:0px;
    padding:0px;
    position:absolute;
    top:0px;
    width:100%;
    z-index:2;
  }
</style>
