<template>
        <v-container class="ml-6 relative" style="width:90%;z-index:3" >
            <section class="d-flex flex-row my-5" >
                <v-card class="pa-1 ma-0" style="width:40%;background-color:transparent !important;border:0px solid red;overflow:hidden" :style="{height: maskHeight}" >
                      <div class="layer-mask accent3" style="z-index:4" :style="{height: '80px'}" > </div>
                      <v-container class="d-flex relative" style="z-index:5;top:2px;left:-6px " >
                        <v-text-field
                        prepend-icon="mdi-database-search"
                        class="accent3 pa-0 ma-0 mx-4"
                        label=" item price check"
                        hide-details="auto"
                      ></v-text-field>
                        <v-btn class=" mt-1 mr-4 accent2" small >enter</v-btn>
                      </v-container>
                </v-card>
            </section>
                        <h1 class="relative z-5" >PRICE CHECK</h1>
        </v-container>
</template>
<script>
export default {
  name: 'Pricecheck'
}
</script>
