<template>
  <v-container class="ml-6 relative" style="width:90%;z-index:3" >
            <section class="d-flex flex-row my-5" >
                <v-card class="pa-1 ma-0" style="width:40%;background-color:transparent !important;border:0px solid red;overflow:hidden" :style="{height: maskHeight}" flat >
                      <div class="layer-mask accent3" style="z-index:4" :style="{height: '150px'}" > </div>
                      <v-container class="d-flex relative" style="z-index:5;top:2px;left:-6px " >
                        <v-text-field
                        prepend-icon="mdi-database-search"
                        class="accent3 pa-0 ma-0 mx-4"
                        label=" item price check"
                        hide-details="auto"
                      ></v-text-field>
                        <v-btn class=" mt-1 mr-4 accent2" small >enter</v-btn>
                      </v-container>
                      <v-card-actions class="relative z-5 mx-4 ">
                        <v-btn class=" ma-1 accent1 white--text" small >items</v-btn>
                        <v-btn class=" ma-1 blue white--text" small >Category</v-btn>
                      </v-card-actions>
                </v-card>
            </section>
            <section class="relative of-hidden pa-0 ma-0 accent1" id="alog-container-pc" >
            <v-row class="col-12 pa-0" >
              <div class="layer-mask accent1" style="z-index:4" :style="{height: '50px'}" id="alog-mask-pc" > </div>
              <v-col class="col-12 col-lg-6 col-xl-6 relative z-5" >
                    <v-data-table
                      height="auto"
                      class="elevation-3 accent3 white--text relative my-3 ml-4"
                      :headers="headers1"
                      :items="desserts"
                      hide-default-footer
                      >
                        <template v-slot:top>
                            <v-toolbar class="accent3" flat >
                            <v-toolbar-title class="white--text body-1" >Today 20/10/2020</v-toolbar-title>
                            </v-toolbar>
                        </template>
                    </v-data-table>
              </v-col>
              <v-col class="col-12 col-lg-6 col-xl-6 relative z-5" >
                <v-data-table
                height="auto"
                class="elevation-3 accent3 white--text relative my-3 ml-3"
                :headers="headers1"
                :items="desserts"
                hide-default-footer
                >
                  <template v-slot:top>
                      <v-toolbar class="accent3" flat >
                      <v-toolbar-title class="white--text body-1" >Today 20/10/2020</v-toolbar-title>
                      </v-toolbar>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
            <v-row class="col-12 pa-0" >
              <div class="layer-mask accent1" style="z-index:4" :style="{height: '50px'}" id="alog-mask-pc" > </div>
              <v-col class="col-12 col-lg-6 col-xl-6 relative z-5" >
                    <v-data-table
                      height="auto"
                      class="elevation-3 accent3 white--text relative my-3 ml-4"
                      :headers="headers1"
                      :items="desserts"
                      hide-default-footer
                      >
                        <template v-slot:top>
                            <v-toolbar class="accent3" flat >
                            <v-toolbar-title class="white--text body-1" >Today 20/10/2020</v-toolbar-title>
                            </v-toolbar>
                        </template>
                    </v-data-table>
              </v-col>
              <v-col class="col-12 col-lg-6 col-xl-6 relative z-5" >
                <v-data-table
                height="auto"
                class="elevation-3 accent3 white--text relative my-3 ml-3"
                :headers="headers1"
                :items="desserts"
                hide-default-footer
                >
                  <template v-slot:top>
                      <v-toolbar class="accent3" flat >
                      <v-toolbar-title class="white--text body-1" >Today 20/10/2020</v-toolbar-title>
                      </v-toolbar>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
            </section>
  </v-container>
</template>
<script>
import { setChildToParentHeight } from '@/vuex/util.js'
export default {
  name: 'Pricecheck',
  data () {
    return {
      headers1: [
        {
          text: 'Item',
          align: 'start',
          value: 'name'
        },
        { text: 'Image', value: 'protein' },
        { text: 'Cost ', value: 'fat' },
        { text: 'Quantity', value: 'carbs' }
      ],
      headers2: [
        {
          text: 'Item',
          align: 'start',
          value: 'name'
        },
        { text: 'Image', value: 'protein' },
        { text: 'Cost ', value: 'fat' },
        { text: 'Quantity', value: 'carbs' }
      ],
      desserts: [
        {
          name: 'livid plant',
          calories: '--',
          fat: '1m',
          carbs: 1,
          protein: '--',
          iron: '1%'
        },
        {
          name: ' repear\'s gift',
          calories: '--',
          fat: '1.5m',
          carbs: 1,
          protein: '--',
          iron: '1%'
        },
        {
          name: ' Menaphos\'s gift (small)',
          calories: '--',
          fat: '800k',
          carbs: 3,
          protein: '--',
          iron: '1%'
        }
      ]
    }
  },
  mounted () {
    setChildToParentHeight('alog-container-pc', 'alog-mask-pc')
  }
}
</script>
