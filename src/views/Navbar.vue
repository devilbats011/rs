<template>
      <!-- <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
      <v-app-bar
        app
        flat
        height="84px"
        class="accent1"
        centered
        style="padding-top:0.2rem"
      >
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="relative" :style="{ fontSize: toolbarFontSize, left:'2.4rem' }" >Le Cult</v-toolbar-title>
        <v-toolbar-title :style="{ marginLeft:'19%', fontSize: toolbarFontSize }">Dashboard</v-toolbar-title>
        <p class="ma-6 ml-5" style="font-size:0.9rem;font-style: italic;" >Welcome to Le Cult, leveraging your rs3 experience!</p>
        <v-spacer></v-spacer>
        <v-icon color="primary relative" size="2.2rem" style="right:2.2rem;">{{ mdiCogs }}</v-icon>
      </v-app-bar>
</template>

<script>
import { mdiCogs } from '@mdi/js'

export default {
  name: 'Navbar',
  components: {
  },
  methods: {
  },
  data () {
    return {
      toolbarFontSize: '1.5rem',
      mdiCogs: mdiCogs,
      drawer: false,
      data: 0
    }
  }
}

</script>
