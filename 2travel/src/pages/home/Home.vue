<template>
  <!--注意:template中只能暴露一组标签，所以要在所有内容de最外层用一个总的<div>包裹起来-->
  <div>
      <!--步骤1.3 使用引入的组件;(大写变小写且中间加-)-->
      <home-header></home-header>
      <!--步骤2.4 往各子组件传值-->
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons  :iconList="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend   :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
  //步骤1.1 引入外部各部分的组件(局部组件):
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  //import HomeIcons  from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'    //引入ajax
  import { mapState } from 'vuex' //引入vuex
  export default {
    name: 'Home',    //定义'页面名'【来表示这整个页面作为一个组件】【配置router路由路径是要使用】
//申明组件：
    components:{
      HomeHeader,  //步骤1.2 申明注册 外部局部组件
      HomeSwiper,
      HomeIcons: () => import('./components/Icons'), //异步加载此组件,所以上面不需要import HomeIcons了。
      HomeRecommend,
      HomeWeekend
    },
//步骤2.3 定义数据：
    data(){
      return{
         swiperList:[],
         iconList:[],
         recommendList:[],
         weekendList:[],
         lastCity:''   //用来记录最后一次访问的city
      }
    },
    //使用：store>index.js 定义的公有数据city
    computed:{
      ...mapState(['city'])
    },
//步骤2.2 ajax获取数据：
    methods:{
      //url路径请求：
      getHomeInfo(){  //优化：携带上city
          axios.get('./static/mock/index.json?city='+this.city)
              .then(this.getHomeInfoSucc)
      },
      //请求到json内容(且赋予2.3定义的):
      getHomeInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
             const data = res.data
             this.swiperList = data.swiperList
             this.iconList = data.iconList
             this.recommendList = data.recommendList
             this.weekendList = data.weekendList
          }
      }
    },
//步骤2.1 生命周期mounted:
    mounted (){
      this.getHomeInfo() //调用执行方法
      this.lastCity = this.city   //为lastCity赋值
    },
    //生命周期activated：
    activated (){
      if(this.lastCity !== this.city){  //城市改变了
          this.lastCity = this.city
          this.getHomeInfo()   //重新执行一次ajax请求
      }
    }
  }
</script>
<style>

</style>
