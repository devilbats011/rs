<template>
<v-container class="ml-6 relative" style="width:90%;z-index:3;height:auto" id="alog-container" >
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
    <v-card class="accent3 of-hidden relative mt-6" style="width:100%;height:auto;background-color:transparent !important" >
        <div class="layer-mask accent3" style="height:540px;z-index:4" id="alog-mask"> </div>
        <v-row class="relative z-5  d-flex flex-wrap">
        <v-col class=" col-6 accent1">

        <v-card-title class="primary--text relative z-5 ml-3 mb-0">Quest Tracker</v-card-title>
          <svg height="220" width="220" viewBox="0 0 160 160" class="ml-5" style="border:0px dashed transparent;"
          >
          <text text-anchor="middle" x="80" y="84" style="font-size:14px;font-style: italic;" fill="white"> Quest% </text>
            <g v-for="(value, index) in sortedValues" :key="index" >
              <circle
               :cx="cx"
               :cy="cy"
               :r="radius"
               fill="transparent"
               :stroke="colors[index]"
               :stroke-width="strokeWidth"
               :stroke-dasharray="adjustedCircumference"
               :stroke-dashoffset="calculateStrokeDashOffset(value)"
               :transform="returnCircleTransformValue(index)"
              />
              <text v-if="segmentBigEnough(value)" fill="white" style="font-size:10px" text-anchor="middle" dy="3px" :x="chartData[index].textX" :y="chartData[index].textY">{{ percentageLabel(value) }}</text>
            </g>
          </svg>
        </v-col>
        <v-col class="col-6 accent1">
          <Scrollchart/>
        </v-col>
        </v-row>
    </v-card>
</v-container>
</template>
<script>
import Scrollchart from '@/components/Scrollchart'
import { initSetHeightMask } from '@/vuex/util.js'

export default {
  components: {
    Scrollchart
  },
  //  transform="rotate(-90) translate(-160)"
  //  :stroke-dasharray="circumference"
  name: 'Alog',
  methods: {
    segmentBigEnough (dataVal) {
      return Math.round(this.dataPercentage(dataVal) * 100) > 5
    },
    percentageLabel (dataVal) {
      return `${Math.round(this.dataPercentage(dataVal) * 100)}%`
    },
    degreesToRadians (angle) {
      return angle * (Math.PI / 180)
    },
    calculateTextCoords (dataVal, angleOffset) {
      const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset
      const radians = this.degreesToRadians(angle)

      const textCoords = {
        x: (this.radius * Math.cos(radians) + this.cx),
        y: (this.radius * Math.sin(radians) + this.cy)
      }
      return textCoords
    },
    // initSetHeight () {
    //   const section = window.document.querySelector('#alog-container')
    //   // eslint-disable-next-line prefer-const
    //   let sectionHeight = section.offsetHeight
    //   const mask = window.document.querySelector('#alog-mask')
    //   mask.style.height = sectionHeight + 'px'
    // },
    calculateStrokeDashOffset (valuePortion) {
      // const num = (this.dataPercentage(valuePortion) * this.circumference) / 100
      // const str = num + ` ${this.circumference}`
      // return str
      const strokeDiff = this.dataPercentage(valuePortion) * this.circumference
      return this.circumference - strokeDiff
    },
    dataPercentage (value) {
      return value / this.dataTotal
    },
    initSortValuesAndCalculateChartData () {
      this.sortedValues = this.values.sort((a, b) => a - b)
      this.calculateChartData()
    },
    returnCircleTransformValue (index) {
      try {
        return `rotate (${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`
      } catch (error) {
        console.log(error, 'error in returnCircleTransformValue')
        return null
      }
    },
    calculateChartData () {
      this.sortedValues.forEach((dataVal, index) => {
        // console.warn(dataVal, 'dttdtdtd')
        const { x, y } = this.calculateTextCoords(dataVal, this.angleOffset)
        const data = {
          degrees: this.angleOffset,
          textX: x,
          textY: y
        }
        this.chartData.push(data)
        this.angleOffset = this.dataPercentage(dataVal) * 360 + this.angleOffset
      })
    }
  },
  computed: {
    circumference () {
      return 2 * Math.PI * this.radius
    },
    adjustedCircumference () {
      return this.circumference - 3
    },
    dataTotal () {
      return this.sortedValues.reduce((acc, val) => acc + val)
    }
    // ...mapGetters([
    //   'init'
    //   // ...
    // ])
  },
  mounted () {
    // console.log(this.$vuetify.theme.themes.dark)
    // hw('hello')
    initSetHeightMask()
    this.initSortValuesAndCalculateChartData()
  },
  data () {
    return {
      bosses: [
        { totalKill: '10%', bossName: 'Bandos' },
        { totalKill: '70%', bossName: 'Arma' },
        { totalKill: '60%', bossName: 'Zammy' },
        { totalKill: '40%', bossName: 'Sara' }
      ],
      values: [20, 40, 80, 80],
      chartData: [],
      colors: [
        // this.$vuetify.theme.themes.dark.fire1,
        '#deba04', // yellow
        '#67b0ea',
        '#B00020',
        '#0336FF'
      ],
      cx: 80,
      cy: 80,
      radius: 60,
      sortedValues: [],
      strokeWidth: 30,
      angleOffset: -90
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
