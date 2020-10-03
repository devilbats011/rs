<template>
<div id="app">
  <v-app id="inspire">
    <Model />
    <Navbar />
    <v-main class="accent1 mt-3" >
        <v-row class="full-body accent1 ma-0" style="position:relative" >
          <Sidesmenu />
          <v-col class="col-9 accent2 ma-0 pa-0 " style="position:relative;z-index:2;auto;height:auto" >
            <div
             :style="{ backgroundImage: `url(${imagesCollection[0]})`, zIndex:3 }"
             class="ma-0 pa-0 solak-overlayer"
             ></div>
            <transition
             name="block"
             mode="out-in"
             >
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
    </v-main>
    <Footer />
  </v-app>
</div>
</template>

<script>
import visWaxInfos from '@/services/viswax'
import travelmerchant from '@/services/travelmerchant'
import { mapGetters } from 'vuex'
import Navbar from '@/views/Navbar'
import Sidesmenu from '@/views/Sidesmenu'
import Footer from '@/views/Footer'
import Model from '@/views/Model'

export default {
  name: 'App',
  components: {
    Sidesmenu,
    Navbar,
    Footer,
    Model
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
    this.$store.commit('footerText', ' Black Lives Matter ')
  },
  computed: {
    ...mapGetters([
      'imagesCollection',
      'menusCollection'
      // ...
    ])
  },
  data () {
    return {
      toolbarFontSize: '1.5rem',
      viswax: {},
      travelmerchant: [],
      drawer: false,
      data: 0,
      maskHeight: '70px',
      menusCollectionLocal: null
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

.block-enter {
  Opacity: 0;
  transform: translateX(22px);
}
.block-enter-active {
  /* transition : opacity 0.8s; */
  transition: all .3s ease;
}
.block-leave {
  z-index: 2;
}
.block-leave-active {
  /* transition: opacity 0.8s; */
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  Opacity: 0;
}

</style>
