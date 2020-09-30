<template>
<div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <!-- <v-navigation-drawer
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
      </v-navigation-drawer> -->
      <v-app-bar
        app
        flat
        height="84px"
        class="accent1"
        centered
        style="padding-top:0.2rem"
      >
      <!-- <template class="relative" style="top:6px"> -->
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="relative" :style="{ fontSize: toolbarFontSize, left:'2.4rem' }" >Le Cult</v-toolbar-title>
        <v-toolbar-title :style="{ marginLeft:'19%', fontSize: toolbarFontSize }">Dashboard</v-toolbar-title>
        <p class="ma-6 ml-5" style="font-size:0.9rem;font-style: italic;" >Welcome to Le Cult, leveraging your rs3 experience!</p>
        <v-spacer></v-spacer>
        <v-icon color="primary relative" size="2.2rem" style="right:2.2rem;">{{ mdiCogs }}</v-icon>
      <!-- </template> -->
      </v-app-bar>
      <v-main class="accent1 mt-3" >
        <!-- <v-row align="center" justify="center" class="accent2" >
          <v-col class="col-12">
          </v-col>
        </v-row>
         -->
          <v-row class="full-body accent1 ma-0" style="position:relative" >
            <v-col class="col-3 ma-0 pa-0 accent2" style="position:relative;" >
              <Viswax />
              <v-row class="mx-4 text-center primary--text accent2"  flat >
                <v-col class="d-flex flex-column">
                  <v-card
                    v-for="name in sidesmenu"
                    :key="name"
                    flat
                    class="pa-2 primary--text accent2 d-flex flex-row justify-start " style="font-size:14px;cursor:pointer;postion:relative;left:36px;overflow:hidden;height:4rem;"
                    tile >
                       <v-avatar tile class="" > <img :src="homeImg" style="height:25px;width:30px;" alt="sidemenus-icon" /></v-avatar>
                       <p class="py-4 px-1"> {{ name }} </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-9 accent2 ma-0 pa-0 " style="position:relative;z-index:2;auto;height:auto" >
                <div
                :style="{ backgroundImage: `url(${bgImg})`, zIndex:3 }"
                class="ma-0 pa-0 solak-overlayer"
                ></div>
                <v-container class="ml-6 relative" style="width:90%;z-index:3" >
                  <section class="d-flex flex-row my-6" >
                    <v-card class="" style="width:40%;background-color:transparent !important;border:0px solid red" :style="{height: maskHeight}" >
                      <div class="layer-mask accent3" style="z-index:4" :style="{height: maskHeight}" > </div>
                      <v-container class="d-flex relative" style="z-index:5;top:6px " >
                        <!-- <v-icon>
                          {{ mdiDatabaseSearch }}
                        </v-icon> -->
                        <v-text-field
                        prepend-icon="mdi-database-search"
                        class="accent3 pa-0 ma-0 mx-4"
                        label=" item price check"
                        hide-details="auto"
                      ></v-text-field>
                        <v-btn class=" mt-1 mr-4 accent2" small >enter</v-btn>
                      </v-container>
                    </v-card>
                  </section>
                  <Warband />
                  <Travelmerchant />
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
import bgImg from '@/assets/rs3/solak_crop2.jpg'
import homeImg from '@/assets/rs3/home.png'
import Viswax from '@/components/Viswax'
import Warband from '@/components/Warband'
import Travelmerchant from '@/components/Travelmerchant'
import { mdiCogs } from '@mdi/js'

export default {
  name: 'App',
  components: {
    Warband,
    Travelmerchant,
    Viswax
  },
  methods: {
    async visWaxHandler () {
      this.viswax = await visWaxInfos()
    },
    async travelmerchantHandler () {
      this.travelmerchant = await travelmerchant()
      console.log(this.travelmerchant)
    }
  },
  mounted () {
  },
  data () {
    return {
      mdiCogs: mdiCogs,
      toolbarFontSize: '1.5rem',
      viswax: {},
      travelmerchant: [],
      drawer: false,
      bgImg: bgImg,
      sidemenu_height: '41%',
      homeImg: homeImg,
      sidesmenu: ['Dashboard', 'Overload', 'Price Check', 'Pvm Preset', 'Alog|Exp|Gainz!'],
      data: 0,
      maskHeight: '70px'
      // mdiDatabaseSearch: mdiDatabaseSearch
    }
  }
}

</script>
<style>
  p{
    color: #9BBCD1;
    background:transparent !important;
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

</style>
