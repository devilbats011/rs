<template>
    <v-card flat class="relative z-5 bg-transparent" height="100%" >
        <v-card-title class="primary--text relative z-5  ma-0 pa-0 mt-2" >Treasure Hunter Tracker </v-card-title>
          <v-row class="col-12 relative ma-0 pa-0 mt-7" style="height:100%;width:100%">
          <v-col class="ma-0 pa-0 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <svg height="220" width="220" viewBox="0 0 100 100" class="ma-0 relative z-5" >
            <g v-for="(rd,i) in radius" :key="i"
             >
              <circle
               style=""
              :stroke="'#354A56'"
              fill="transparent"
              :cy="cx"
              :cx="cy"
              :stroke-width="strokeWidth+2"
              :r='rd'
              :stroke-dasharray="calculateStrokeDashArray(100,rd)"
              transform="rotate(-90) translate(-100)"
              ></circle>
              <circle
              :stroke="colors[i]"
              fill="transparent"
              :cy="cx"
              :cx="cy"
              :stroke-width="strokeWidth"
              :r='rd'
              :stroke-dasharray="calculateStrokeDashArray(percents[i],rd)"
              transform="rotate(-90) translate(-100)"
              ></circle>
            </g>
            <text text-anchor="middle" x="50" y="52" style="font-size:7px;font-style: italic;" fill="white"> Master </text>
        </svg>
         </v-col>
          <v-col class="ma-0 pa-1 px-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
         <v-list class="accent1 pa-0 ma-0 border-check" >
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon class="pa-0 ma-auto mr-1">
             <div class="round-icon" :style='{backgroundColor: colors[i]}' ></div>
            </v-list-item-icon>
            <v-list-item-content class="ma-auto pa-0 primary--text" style="font-size:12px;text-align:left" >
             {{ item.text }}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
            </v-col>
      </v-row>
    </v-card>
</template>

<script>
export default {
  name: 'Treasurehunter',
  data () {
    return {
      radius: [18, 30, 42],
      percents: [30, 58, 70],
      chartData: [],
      strokeWidth: 5,
      colors: [
        // this.$vuetify.theme.themes.dark.fire1
        '#AB0000',
        '#0066D1',
        '#00B372',
        '#845EC2'
      ],
      items: [
        {
          text: 'Master'
        },
        {
          text: 'Elite'
        },
        {
          text: 'Hard'
        },
        {
          text: 'Medium'
        }
      ],
      cx: 50,
      cy: 50,
      angleOffset: -90
    }
  },
  methods: {
    calculateStrokeDashArray (percentage, r) {
      // console.warn(percentage, r)
      const c = this.circumference(r)
      const num = (percentage * c) / 100
      const values = num + ` ${c}`
      return values
    },
    circumference (r) {
      return 2 * Math.PI * r
    }
    // sortedValue () {
    //   this.sortedValue = this.values.sort((a, b) => a - b)
    // }
  },
  computed: {
    // expected to return value
    // must be non-argument function
  },
  mounted () {
    // this.sortedValue()
  }
}
</script>

<style>

</style>
