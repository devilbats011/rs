<template>
<v-container class="ml-6 relative" style="width:90%;z-index:3;height:auto" id="alog-container" >
    <Boss/>
    <v-card class="accent3 of-hidden relative mt-6" style="width:100%;height:auto;background-color:transparent !important" >
        <div class="layer-mask accent3" style="height:540px;z-index:4" id="alog-mask"> </div>
        <v-row class="relative z-5  d-flex flex-wrap">
        <v-col class=" col-6 accent1">
          <Quest/>
        </v-col>
        <v-col class="col-6 accent1">
          <Treasurehunter/>
        </v-col>
        </v-row>
    </v-card>
</v-container>
</template>
<script>
import Treasurehunter from '@/components/Treasurehunter'
import Quest from '@/components/Quest'
import Boss from '@/components/Boss'
import { initSetHeightMask } from '@/vuex/util.js'

export default {
  components: {
    Treasurehunter,
    Quest,
    Boss
  },
  name: 'Alog',
  mounted () {
    initSetHeightMask()
  },
  data () {
    return {
      // ..
    }
  }
}
</script>
<style >
.container-bar{
  margin: .6rem 2rem 2rem 2rem
}
.bar-label{
  margin-left:5%;
  width:8%;
}
.bar-container{
  width:70%;
}
.bar-remark{
  width:30px;
  height:20px;
  position: absolute;
  right:-2.2rem;
}
.bar-data{
  height: 20px;
}
section.bar-graph > div
{
  width: 60%;
}

</style>
