<template>
<main class=" fixed-z10 bottomRight"  >
    <v-card class="accent2 fixed-z10 bottomRight mx-0 mr-1 border-check"
     :style="{height: heigtSearched, width: widthSearched, right: rightSearched}"
      flat>
        <v-card-title class="body-1 accent2 ma-0 pb-2 primary--text pointer" @click="resizeHeightHandler('pc')" >Searched Result</v-card-title>
        <v-divider class="mx-4" ></v-divider>
        <v-card-text style="font-size:12px">
          <div class="pa-0 ma-0 " :style="{ height: '300px', overflowY: 'scroll' }">
            <div class="py-1 pl-1 mr-2 mb-1 accent3 "
            v-for="(num,i) in 10" :key="i"
            >
                    masterwork {{ num }}
            </div>
          </div>
        </v-card-text>
    </v-card>
</main>
</template>

<script>
import { throttle } from 'lodash'

export default {
  // style=" border: 1px dashed black !important"
  name: 'Model',
  data () {
    return {
      widthSearched: '160px',
      heigtSearched: '60px',
      rightSearched: '0%'
    }
  },
  methods: {
    resizeHeightHandler: throttle(function (val) {
      // console.log(val, 'this is val')
      const MINIMIZE_HEIGHT = '60px'
      if (val === 'pc') {
        const NORMAL_SIZE_HEIGHT = '380px'
        if (this.heigtSearched === MINIMIZE_HEIGHT) {
          this.heigtSearched = NORMAL_SIZE_HEIGHT
          this.widthSearched = '350px'
          this.rightSearched = '20%'
        } else {
          this.heigtSearched = MINIMIZE_HEIGHT
          this.widthSearched = '160px'
          this.rightSearched = '0%'
        }
      }
    }, 800)
  }
}
</script>

<style>

.fixed-z10{
    position: fixed;
    z-index: 10;
}
.bottomRight{
    bottom: 0px;
    Right:0%;
}
.bottomLeft{
    bottom: 0px;
    left: 0px;
}

</style>
