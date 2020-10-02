<template>
            <v-col class="col-3 ma-0 pa-0 accent2" style="position:relative;" >
              <Viswax />
              <v-row class="mx-4 text-center primary--text accent2"  flat >
                <v-col class="d-flex flex-column">
                  <v-card
                    v-for="(item,i) in sidesmenu"
                    :key="i"
                    flat
                    class="pa-2 primary--text accent2 d-flex flex-row justify-start " style="font-size:16px;cursor:pointer;postion:relative;left:36px;overflow:hidden;height:4rem;"
                    :to="item.route"
                    tile >
                       <v-avatar tile class="" > <img :src="menusCollectionLocal[i]" style="height:33px;width:30px;" alt="sidemenus-icon" /></v-avatar>
                       <p class="py-4 px-1"> {{ item.name }} </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
</template>

<script>
import visWaxInfos from '@/services/viswax'
import travelmerchant from '@/services/travelmerchant'
import Viswax from '@/components/Viswax'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidesmenu',
  components: {
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
    this.menusCollectionLocal = this.menusCollection
  },
  computed: {
    ...mapGetters([
      'menusCollection'
      // ...
    ])
  },
  data () {
    return {
      viswax: {},
      travelmerchant: [],
      sidemenu_height: '41%',
      sidesmenu: [
        { name: 'Dashboard', route: '/Dashboard' },
        { name: 'Price Check', route: '/Price-Check' },
        { name: 'Overload', route: '/Overload' },
        { name: 'Pvm Preset', route: '/Pvm-Preset' },
        { name: 'Alog|Exp|Gainz!', route: '/Alog' }
      ],
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

</style>
