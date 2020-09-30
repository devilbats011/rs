<template>
  <section class="d-flex flex-row my-6" >
    <v-card style="width:32%;margin-right:6%;height:150px;background-color:transparent !important" >
        <div class="layer-mask accent3" style="height:150px;z-index:4"> </div>
        <div class="relative" style="z-index:5">warband</div>
    </v-card>
    <v-card style="width:66%;height:150px;background-color:transparent !important" >
        <div class="layer-mask accent3" style="height:150px;z-index:4"> </div>
        <!-- <div class="relative" style="z-index:5">warband table</div> -->
        <v-tabs
          v-model="tab"
          background-color="transparent"
          center-active
          class="relative z-5"
        >
         <v-tab class="caption primary--text" >{{titles[0]}}</v-tab>
         <v-tab class="caption primary--text" >{{titles[1]}}</v-tab>
        </v-tabs>
         <v-tabs-items v-model="tab" color="transparent" >
         <v-tab-item
          v-for="item in titles"
          :key="item"
          >
          <v-card
            color="transparent"
            flat
            class="relative z-5"
          >
            <v-card-text class="py-2"  >
                <div v-if="tab == 0">
                  tables
                </div>
                <div v-else-if="tab == 1"  >
                  <v-chip
                  v-for="fc in fcs" :key="fc"
                  class="ma-1 white--text"
                  style="font-size:12px;"
                  :color="tabColorHandler()"
                >
                  {{ fc }}
                </v-chip>
                </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
    </v-tabs-items>
    </v-card>
  </section>
</template>
<script>
export default {
  name: 'Warband',
  data () {
    return {
      tab: null,
      titles: ['warband table', 'warband fc'],
      table: 'qweqwerteteryuyiuo',
      fcs: ['MasterBands', 'Moobands', 'Alpha WBS', 'Torment WBS'],
      text: 'no-text'
    }
  },
  methods: {
    tabColorHandler () {
      // eslint-disable-next-line no-unused-vars
      // let fc
      // eslint-disable-next-line prefer-const
      // [this.text, ...fc] = this.titles
      const color = this.randomColor()
      console.log(color)
      return color
    },
    randomColor () {
      const min = 0
      const max = 4
      const colors = ['fire1', 'fire2', 'fire3', 'fire4', 'fire5']
      var num = Math.floor(Math.random() * (max - min + 1)) + min
      // console.log(num)
      const color = colors[num]
      return color
    }

  }
}
</script>

<style>
.theme--dark.v-tabs-items {
    background-color: transparent !important;
}
</style>
