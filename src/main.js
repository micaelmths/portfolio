import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTilt from 'vue-tilt.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueTilt)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
