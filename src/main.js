import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper,)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
