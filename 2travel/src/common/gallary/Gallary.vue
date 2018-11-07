<template>
  <div class="container" @click="handleLunboClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default{
  name:"CommonGallary",
  props: {
    imgs:{
      type:Array,
      default (){
        return []
      }
    }
  },
  data (){
    return {
      //轮播设置:
      swiperOptions:{
        pagination:'.swiper-pagination',
        paginationType:'fraction',  //轮播点"分数格式"
        loop:true,
        //以下：父级dom布局发生变化时，自我刷新一次
        observeParents:true,
        observer:true
      },
    }
  },
  methods:{
    handleLunboClick (){
        this.$emit("close")
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper-container
   overflow:inherit
  .container
   position: fixed
   top:0;bottom:0;left:0;right:0;
   background:#000
   z-index:99
    /*以下css使得里面内容垂直居中*/
   display:flex
   flex-direction:column
   justify-content:center
   overflow:hidden
   .wrapper
    width:100%
    font-size:0.16rem
    font-weight:bold
    color:#fff
    .gallary-img
     width:100%
     height:3rem
    .swiper-pagination
     bottom:-1rem

</style>
