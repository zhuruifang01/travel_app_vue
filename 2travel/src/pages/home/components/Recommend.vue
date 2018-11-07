<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <!--说明：tag='li',类似<li>标签【既可以:to=""跳转页面,也不会因 加了此超链接 而改变了里面的样式】-->
        <router-link tag="li" class="item" v-for=" item in recommendList" :key="item.id" :to="'/detail/'+item.id">
             <img class='item-img' :src="item.url" alt="">
             <div class="item-con">
                <p class="con-title"> {{item.title}} </p>
                <p class="con-desc">  {{item.desc}} </p>
                <div class="button">查看详情</div>
             </div>
        </router-link>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'HomeRecommend',
    //1.接收父home.vue用ajax获取并传过来的数据
    props:{recommendList:Array},
  }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'   //引入公用css
.title
  height:.3rem
  background: #eeeeee
  font-size:.16rem
  line-height: .3rem
  padding-left: .1rem
  box-sizing:border-box
.item
  display:flex
  height:1.2rem
  min-width:0
  border-bottom:.01rem solid #eee
  font-size:.14rem
  .item-img
    width:1rem; height:1rem;padding:0.1rem
  .item-con
    flex:1
    min-width:0 //变省略号小技巧
    .con-title
      margin-top:.2rem
      line-height: .3rem
    .con-desc
      line-height: .3rem
      color: #cccccc
      ellipse() //超出部分变省略号[公用css]
    .button
      line-height: 0.25rem
      background: #ff9300
      width:0.8rem
      border-radius:0.06rem
      color: #fff
      text-align:center
      margin-top:0.04rem
</style>
