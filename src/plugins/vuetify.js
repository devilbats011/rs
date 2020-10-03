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
        blacky: '#2c2c2e',
        white: '#FFFFFF',
        primary: '#A1BED1',
        secondary: '#9BBCD1',
        accent1: '#1E2A31',
        accent2: '#27343D',
        accent3: '#354A56',
        fire1: '#FF0000',
        fire2: '#FF5159',
        fire3: '#EE005F',
        fire4: '#B62A8F',
        fire5: '#6D4B9A',
        green: '#803C80',
        blue: '#1F306F'
      }
    }
  }
})
