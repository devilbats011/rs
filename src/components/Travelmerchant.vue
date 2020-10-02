<template>
  <section class="d-flex flex-row " >
    <v-card class="accent3" style="width:100%;min-height:240px;background-color:transparent !important" >
        <div class="layer-mask accent3" style="height:200px;z-index:4"> </div>
        <v-card-text class="relative" style="z-index:5" >
            <v-card-title>
                <div class="primary--text">Travel Merchant's Stock</div>
            </v-card-title>
        <!-- <div class="relative" style="z-index:5">travel merchant</div> -->
          <v-data-table
          height="auto"
          class="elevation-3 accent3 white--text relative my-3"
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

        <v-data-table
          height="auto"
          class="elevation-3 accent3 white--text relative mt-8 mb-3 caption"
          :headers="headers2"
          :items="desserts"
          hide-default-footer
          >
        <template v-slot:top>
        <v-toolbar class="accent3" flat >
          <v-toolbar-title class="primary--text body-1" elevation >Tomorrow 21/10/2020</v-toolbar-title>
        </v-toolbar>
      </template>
      </v-data-table>
        </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Travelmerchant',
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
  }
}
</script>

<style>
     tr:hover {
        background-color: #27343D !important;
     }
</style>
