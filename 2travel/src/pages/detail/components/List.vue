<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item-title">
           <span class="item-title-icon"></span>
           {{item.title}}
        </div>
        <!--递归-->
        <div v-if="item.children" class="item-children">
           <!--【层级 列表:使用de自己本身这个组件】-->
           <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>
<script>
export default{
    name:"DetailList",
    props:{
      list:Array
    }
}
</script>
<style lang="stylus" scoped="">
.item-title
  line-height: .35rem
  font-size: .14rem
  border-bottom:0.01rem solid #eee
  position:relative
  padding-left:0.35rem
  box-sizing:border-box
  .item-title-icon
    display: inline-block;
    position: absolute;
    width: .22rem;
    height: .22rem;
    top:0.07rem;left:.1rem
    background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png);
    background-repeat:no-repeat
    background-size:.22rem
    background-position:.01rem -0.23rem
.item-children
    padding-left:0.2rem
    box-sizing:border-box
</style>
