<template>
  <div>
    <div class="title">周末去哪儿...</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <img class='item-img' :src="item.url" alt="">
        <p class="con-title"> {{item.title}} </p>
        <p class="con-desc">  {{item.desc}} </p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'HomeWeekend',
    //1.接收父home.vue用ajax获取并传过来的数据:
    props:{weekendList:Array}
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .title
    height:.3rem
    background: #eeeeee
    font-size:.16rem
    line-height: .3rem
    padding-left: .1rem
    box-sizing:border-box
  .item
    height:1.5rem
    min-width:0
    border-bottom:.01rem solid #eee
    font-size:.14rem
    .item-img
      width:100%;height:1rem
    .con-title,.con-desc
      width:100%;height:.18rem;
      margin-top:.03rem
      line-height: .18rem
      padding-left: .1rem
      box-sizing:border-box
      ellipse() //超出部分变省略号
    .con-desc
      color: #cccccc
</style>
