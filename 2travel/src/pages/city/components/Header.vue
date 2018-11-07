<template>
   <div class="header">
      城市选择
      <router-link to="/">
          <div class="iconfont back">&#xe624;</div>
      </router-link>
   </div>
</template>
<script>
  export default{
    name:'CityHeader'
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height: .4rem
    line-height: .4rem
    font-size:.14rem
    color: #fff
    text-align:center
    position:relative
    background:$bgColor
    .back
      line-height: .4rem
      color: #fff
      position:absolute
      top:0
      left:.05rem
      font-weight:bold
</style>
