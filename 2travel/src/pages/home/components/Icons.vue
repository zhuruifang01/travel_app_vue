<template>
  <div class="icons">
      <!--图标轮播-->
      <swiper :options="swiperOptionIcon">
          <!--3.图标组-->
          <swiper-slide v-for="(page,index) in pages" :key="index">
              <div class="icon" v-for="item in page" :key="item.id">
                  <img class="icon-img" :src="item.imgUrl" alt="">
                  <p class="icon-title">{{ item.desc }}</p>
              </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
  export default {
//定义'组件名'
    name: 'HomeIcons',
    //1.接收父home.vue用ajax获取并传过来的数据
    props:{iconList:Array},
    data (){
      return{
        //轮播设置:
        swiperOptionIcon:{
          autoplay:false,
          pagination:'.swiper-pagination',
        }
      }
    },
//2.计算属性:
    computed:{
      //方法：超过8个icon则生成下一页轮播项 的功能。
      pages () {
          const pages = []  //定义数组
          this.iconList.forEach((item,index) => {  //循环data数据
              const page = Math.floor(index/8)     //计算出每一项data所属于的页码
              if (!pages[page]){
                  pages[page] = []   //每8套放一组数据组里。
              }
              pages[page].push(item)    //形成二维数组
          })
          return pages
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container
  width:100%
  height:0
  padding-bottom: 50%
  overflow:hidden
  //宽是手机屏的100%，高是宽的50%(2分之一),自适应手机。
.icon
  width:25%
  height:0
  padding-bottom:22%
  float:left
  overflow:hidden
  position:relative
  text-align:center
  .icon-img
    position:absolute
    top:0
    left:0
    right:0
    bottom: 0.25rem
    margin:auto
    width:60%
  .icon-title
    position:absolute
    bottom:0.1rem;left:0;right:0;margin:auto;
    font-size: 0.14rem
    color:$titleColor
    ellipse() //引入varibles.styl的共有css:超出部分变省略号
</style>
