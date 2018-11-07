<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
      <!--轮播项-->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <img :src="item.imgUrl" >
      </swiper-slide>
      <!--轮播小点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',    //定义'组件名',
    //1.接收父home.vue用ajax获取并传过来的数据
    props:{swiperList:Array},
    data () {
      return{
          //轮播设置:
          swiperOption:{
              autoplay:3000,
              pagination:'.swiper-pagination',
              loop:true
          },
//          swiperList:[
//            {"imgUrl":"http://img1.qunarzz.com/piao/fusion/1808/8a/1957a0fb58ad0402.jpg_750x200_e72b8c0f.jpg"},
//            {"imgUrl":"http://img1.qunarzz.com/piao/fusion/1807/40/1d7be74ed1584002.jpg_750x200_c41233c9.jpg"},
//            {"imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg"}
//          ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff !important
    //此写法是使得class穿透scoped限制，优先级提高。（轮播点颜色）
  .wrapper
    width:100%
    height:1rem
    overflow:hidden
    background:#eee
  .wrapper img
    width:100%
    height:1rem
</style>
