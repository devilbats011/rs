<template>
    <v-card class="accent3 of-hidden relative mt-3" style="width:100%;height:auto;background-color:transparent !important" >
        <div class="layer-mask accent3" style="height:240px;z-index:4" id="alog-mask"> </div>
        <v-card-title class="primary--text relative z-5 ml-5 mb-0">Boss Kill Tracker</v-card-title>
        <section class="relative z-5 container-bar">
          <div class="bar-component d-flex my-3"  v-for="(boss,i) in bosses" :key="i">
            <div class="bar-label caption">{{boss.bossName}}</div>
            <div class="bar-container">
              <div class="bar-data relative z-5 secondary" :style="{ width: boss.totalKill }">
              <div class="caption bar-remark"> {{ boss.totalKill }}  </div>
              </div>
            </div>
          </div>
        </section>
    </v-card>
</template>
<script>
import { initSetHeightMask } from '@/vuex/util.js'

export default {
  components: {
  },
  name: 'Boss',
  mounted () {
    initSetHeightMask()
  },
  data () {
    return {
      bosses: [
        { totalKill: '10%', bossName: 'Bandos' },
        { totalKill: '70%', bossName: 'Arma' },
        { totalKill: '60%', bossName: 'Zammy' },
        { totalKill: '40%', bossName: 'Sara' }
      ]
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
