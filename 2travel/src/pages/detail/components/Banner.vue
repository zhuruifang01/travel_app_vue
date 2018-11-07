<template>
  <div>
    <!--banner布局-->
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="">
      <div class="banner-info">
          <div class="banner-title"> {{ this.sightName }} </div>
          <div class="banner-number">
            <span class="iconfont">&#xe6dd;</span>
            {{ this.gallaryImgs.length }}
          </div>
      </div>
    </div>
    <fade-animation>
        <!--公用画廊lunbo-->
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="gallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default{
  name:"DetailBanner",
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data (){
    return{
      showGallary:false
    }
  },
  components:{
    CommonGallary,
    FadeAnimation
  },
  methods:{
    handleBannerClick (){
       this.showGallary = true
       this.$emit("closeOther")
    },
    gallaryClose (){
       this.showGallary = false
       this.$emit("openOther")
    }
  }
}
</script>
<style lang="stylus" scoped="">
  .banner
    height: 2rem
    position:relative
    img
      width:100%
      height:2rem
    .banner-info
      width:100%
      height: .25rem
      font-size:.16rem
      font-weight:bold
      position:absolute
      bottom:0rem
      color: #ffffff
      line-height:.25rem
      background-image:linear-gradient(top, rgba(0,0,0,0) , rgba(0,0,0,0.8))  /*渐变色*/
      .banner-title
        float:left
      .banner-number
        width:1rem
        height:.22rem
        float:right
        background:rgba(255,255,255,.5)
        border-radius:.2rem
        text-align:center

</style>
