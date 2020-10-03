<template>
<fragment>
    <v-col class=" col-12 relative">

        <v-card-title class="primary--text relative z-5 ml-3 mb-0" style="top:-16px">Quest Tracker</v-card-title>
          <v-row class="col-12 relative ma-0 pa-0" style="height:100%;width:100%">
          <v-col class="ma-0 pa-0 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <svg height="210" width="220" viewBox="0 0 160 160" class="" style="border:0px dashed red;"
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
            <v-list-item-content class="ma-auto pa-0 primary--text" >
             <v-list-item-subtitle v-text="item.text" style="font-size:12px;text-align:left" class="primary--text" ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
            </v-col>
          </v-row>
    </v-col>
  </fragment>
</template>
<script>
import { initSetHeightMask } from '@/vuex/util.js'

export default {
  components: {
  },
  //  transform="rotate(-90) translate(-160)"
  //  :stroke-dasharray="circumference"
  name: 'Quest',
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
    initSetHeightMask()
    this.initSortValuesAndCalculateChartData()
  },
  data () {
    return {
      values: [20, 40, 80, 80],
      chartData: [],
      colors: [
        // this.$vuetify.theme.themes.dark.fire1,
        '#deba04', // yellow
        '#67b0ea',
        '#B00020',
        '#0336FF'
      ],
      items: [
        {
          text: 'Recommanded'
        },
        {
          text: 'On Going'
        },
        {
          text: 'Not Start'
        },
        {
          text: 'Completed'
        }
      ],
      model: 1,
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

/* split round-icon */
.round-icon{
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50px;
}

</style>
