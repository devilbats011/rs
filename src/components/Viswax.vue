<template>
              <v-row class="accent1 ">
                <v-col class="mb-2">
              <v-card flat class="relative" style="width:70%;margin:0 15%;overflow:hidden" @click="resizeMaskHeight('viswax')" :style="{height: viwaxHeight}">
                <div class="layer-mask accent3" :style="{height: viwaxHeight}" ></div>
                <section style="position:relative;z-index:3">
                <v-card-title class="primary--text justify-center" style="position:relative;size:22px;top:0px" >Vis Wax</v-card-title>
                 <v-card-text class="text-center white--text mb-0">
                  <div class="body-1">1 Slot</div>
                  <img :src="image" width="25px" height="25px" class="ma-1" />
                  <div class="caption">fire,air,water</div>
                </v-card-text>
                 <v-card-text class="text-center white--text relative" style="top:-15px;" >
                  <div class="body-1">2 Slot</div>
                  <img v-for="n in 4" :key="n" :src="image" width="25px" height="25px" class="ma-1" />
                  <div class="caption mb-1">fire,air,water,earth</div>
                </v-card-text>
                </section>
              </v-card>
                </v-col>
              </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { throttle } from 'lodash'

export default {
  name: 'Viswax',
  data () {
    return {
      image: null,
      viwaxHeight: '285px'
    }
  },
  methods: {
    resizeMaskHeight: throttle(function (val) {
      // console.log(val, 'this is val')
      const MINIMIZE_HEIGHT = '66px'
      if (val === 'viswax') {
        const NORMAL_SIZE_HEIGHT = '285px'
        if (this.viwaxHeight === MINIMIZE_HEIGHT) { this.viwaxHeight = NORMAL_SIZE_HEIGHT } else { this.viwaxHeight = MINIMIZE_HEIGHT }
      }
    }, 800)
  },
  mounted () {
    this.image = this.runesCollection[0]
  },
  computed: {
    ...mapGetters(['runesCollection'])
  }
}
</script>
