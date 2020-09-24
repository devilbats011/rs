/* eslint-disable no-unused-expressions */
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
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
    <v-main><h3>  </h3>
        <h3>Date : {{ visWax.date == null ? "No Date" : visWax.date }}   </h3>
        <h3>Slot 1 : {{ visWax.slot1 == null ? "No Data" : visWax.slot1 }} </h3>
        <h3>Slot 2 :</h3>
        <h3 v-for="slot2 in visWax.slot2  " :key="slot2" > {{ slot2 }} </h3>
    </v-main>
  </v-app>
</template>

<script>
import visWaxInfos from './services/viswax'

export default {
  name: 'App',
  components: {
  },
  methods: {
    async visWaxHandler () {
      this.visWax = await visWaxInfos()
    }
  },
  mounted () {
    this.visWaxHandler()
    // this.$store.getters.fecthTravelMerchant.then((result) => {
    //  console.log(result.data, 'tm')
    // }).catch((err) => console.warn(err))
  },
  data () {
    return {
      visWax: {}
    }
  }
}

</script>
<style>
  div,p{
    margin:0px;
    padding:0px;
  }
</style>
