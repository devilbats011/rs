import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      },
      dark: {
        white: '#FFFFFF',
        primary: '#A1BED1',
        secondary: '#9BBCD1',
        accent1: '#1E2A31',
        accent2: '#27343D',
        accent3: '#354A56'

      }
    }
  }
})
