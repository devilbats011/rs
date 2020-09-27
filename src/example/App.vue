/* eslint-disable vue/no-unused-vars */
/* eslint-disable no-unused-expressions */
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
        <br>
        <h3>Date : {{ viswax.date == null ? "No Date" : viswax.date }}   </h3>
        <h3>Slot 1 : {{ viswax.slot1 == null ? "No Data" : viswax.slot1 }} </h3>
        <h3>Slot 2 :</h3>
        <h3 v-for="slot2 in viswax.slot2  " :key="slot2" > {{ slot2 }} </h3>
        <br>
        <ul>
          <li v-for="(pack, index) in travelmerchant" :key="index">
            <p>--------------------------------------------</p>
            <div v-for="(item, i) in pack.items" :key="i">
              item <p>name: {{ item.name }}</p>
              <p>cost: {{ item.cost }} </p>
              <p>q: {{ item.quantity }} </p>
              <p>use: {{ item.use }} </p>
              ----------------------------
            </div>
          </li>
        </ul>
    </v-main>
  </v-app>
</template>

<script>
import visWaxInfos from '@/services/viswax'
import travelmerchant from '@/services/travelmerchant'

export default {
  name: 'App',
  components: {
  },
  methods: {
    async visWaxHandler () {
      this.viswax = await visWaxInfos()
    },
    async travelmerchantHandler () {
      this.travelmerchant = await travelmerchant()
      console.log(this.travelmerchant)
    }
  },
  mounted () {
    this.visWaxHandler()
    this.travelmerchantHandler()
  },
  data () {
    return {
      viswax: {},
      travelmerchant: []
    }
  }
}

</script>
<style>
  div,p{
    margin:0px !important;
    padding:0px !important;
  }
  p{
    color: #9BBCD1;
  }
</style>
