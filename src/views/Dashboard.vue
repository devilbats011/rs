<template>
        <v-container class="ml-6 relative" style="width:90%;z-index:3" >
            <section class="d-flex flex-row my-6" >
                <v-card class="" style="width:40%;background-color:transparent !important;border:0px solid red" :style="{height: maskHeight}" >
                      <div class="layer-mask accent3" style="z-index:4" :style="{height: maskHeight}" > </div>
                      <v-container class="d-flex relative" style="z-index:5;top:7px;left:-7px " >
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
</template>

<script>
import visWaxInfos from '@/services/viswax'
import travelmerchant from '@/services/travelmerchant'
import Warband from '@/components/Warband'
import Travelmerchant from '@/components/Travelmerchant'
import { mdiCogs } from '@mdi/js'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    Warband,
    Travelmerchant
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
    // console.log(this.imagesCollection[0])
    // this.bgImg = this.imagesCollection[0]
    // this.menusCollectionLocal = this.menusCollection
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
      mdiCogs: mdiCogs,
      toolbarFontSize: '1.5rem',
      viswax: {},
      travelmerchant: [],
      drawer: false,
      sidemenu_height: '41%',
      sidesmenu: ['Dashboard', 'Overload', 'Price Check', 'Pvm Preset', 'Alog|Exp|Gainz!'],
      data: 0,
      maskHeight: '70px'
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
