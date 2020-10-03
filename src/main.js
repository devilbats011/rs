import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import router from './router'
import vuetify from './plugins/vuetify'
import Fragment from 'vue-fragment'
import _ from 'lodash'

Vue.use(Fragment.Plugin)
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$_', { value: _ })

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
