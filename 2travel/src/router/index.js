import Vue from 'vue'
import Router from 'vue-router'
//引入自己开发的组件：
import Home from '@/pages/home/Home.vue'
//import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { //此路由配置说明：访问根目录'/'的时候，加载Home这个组件页面
      path: '/',
      name: 'Home',
      component: Home
    },
    { //城市选择页面：
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City.vue')  //此页面做了 异步加载【上面不需要import了】
    },
    { //详情页面：
      path: '/detail/:id', //动态路由
      name: 'Detail',
      component: Detail
    }
  ],
  //页面切换时：滚动条始终回到顶部。
  scrollBehavior(to,from,savedPosition){
     return {x:0,y:0}
  }
})
