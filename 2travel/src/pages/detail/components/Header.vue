<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <span class="iconfont">&#xe624;</span>
    </router-link>
    <!--说明：【:style=" "】 可用来绑定动态样式-->
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        景点详情
        <router-link to="/">
          <div class="iconfont back">&#xe624;</div>
        </router-link>
    </div>
  </div>
</template>
<script>
  export default{
      name:"DetailHeader",
      data (){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
      },
      methods:{
        handleScroll(){
          const scrollTop = document.documentElement.scrollTop  //获取滚动条离top高度
          console.log(1)
          if( scrollTop>60 ){
             this.showAbs = false  //控制显示.隐藏
             //透明度 渐变效果【header-fixed部分】
             let opacity1 = scrollTop/140
             opacity1 = opacity1 > 1 ? 1:opacity1  //三元表达式【透明度最高是1】
             this.opacityStyle = {
                opacity:opacity1
             }
          }else{
             this.showAbs = true
          }
        }
      },
      activated (){ //此生命钩子：页面展示时自动执行
         window.addEventListener('scroll',this.handleScroll)  //页面滚动时,执行handleScroll方法
      },
      deactivation (){ //此生命钩子：页面切换时自动执行
        window.removeEventListener('scroll',this.handleScroll) //对全局事件的解绑【因为window会导致作用在全局所有页面】
      }
  }
</script>
<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
.header-abs
  position:absolute
  left: .1rem
  top: .1rem
  width: .3rem
  height: .3rem
  border-radius:50%
  background:rgba(0,0,0,.8)
  color:#fff
  font-size:.25rem
  text-align:center
  display:flex
  flex-direction:column
  justify-content:center
  font-weight:bold
.header-fixed
  width:100%
  height: .4rem
  line-height: .4rem
  font-size:.14rem
  color: #fff
  text-align:center
  position:relative
  background:$bgColor
  font-weight:bold
  position:fixed
  top:0;left:0;
  z-index:2
  .back
    line-height: .4rem
    color: #fff
    position:absolute
    top:0
    left:.05rem
    font-weight:bold
</style>
