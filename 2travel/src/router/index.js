import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'  //引入Home.vue


Vue.use(Router)

export default new Router({

  routes: [
    //此路由配置说明：访问根目录'/'的时候，加载Home这个组件
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
