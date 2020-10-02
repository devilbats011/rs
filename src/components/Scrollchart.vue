<template>
    <v-card flat class="relative z-5 bg-transparent" height="100%" >
        <v-card-title class="primary--text relative z-5  ma-0 pa-0 mt-2" >Treasure Hunter Tracker </v-card-title>
                <!-- <svg height="200" width="200" viewBox="0 0 160 160" style="border:0px dashed transparent;margin:6px;" -->
        <svg height="260" width="260" viewBox="0 0 100 100" class="ma-0 relative z-5" >
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
            <text text-anchor="middle" x="50" y="52" style="font-size:8px;font-style: italic;" fill="white"> Elite </text>
        </svg>
    </v-card>
</template>

<script>
export default {
  name: 'Scrollchart',
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
