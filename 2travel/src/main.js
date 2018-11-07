import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import store from './store/index.js'

import 'styles/iconfont/iconfont.css'
import 'styles/reset.css'   //引入第三方css
import 'styles/border.css'
import 'styles/rem.js'      //引入自己写的rem.js
Vue.config.productionTip = false
//引入npm下载的依赖fastclick且启动：
import fastClick from 'fastclick'
fastClick.attach(document.body)     //启用
//swiper引入且启用:
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
