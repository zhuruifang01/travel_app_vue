<template>
  <div class="header">
      <div class="headerLeft">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="headerInput">
         <span class="iconfont">&#xe632;</span>
         输入城市/景点/游玩景点
      </div>
      <router-link to="/city">
          <div class="headerRight">
            <!--{{ this.$store.state.city }}--> <!--【步骤0 使用store的全局公用数据】-->
            {{ this.city }}  <!--【步骤3】-->
            <!--{{ this.testCity}}-->  <!--//测试index.js中的Getters的使用2-->
            <span class="iconfont icon-city">&#xe615;</span>
          </div>
      </router-link>
  </div>
</template>

<script>
  //说明：引用store中定义的全局数据city时，可只需要【步骤0】或者优化为【步骤1～步骤3】
  import { mapState , mapGetters} from 'vuex' //【步骤1】
  export default {
    name: 'HomeHeader',    //定义'组件名'【来表示此文件的header组件】
    computed:{
      ...mapState(['city']),   //【步骤2】
      ...mapGetters(['testCity'])   //测试index.js中的Getters的使用1
    }
  }
</script>

<style lang="stylus" scoped>
  /*说明1.scoped说明此处样式只对这个页面的组件起作用*/
  /*说明2.由于使用了stylus,所以下面class的样式后面不必加花括号{}了*/
  @import '~styles/varibles.styl'  /*引入全局的共用css*/
  .header
    display:flex
    height:0.46rem
    background:$bgColor  /*样式的属性使用全局命名的值*/
    font-size:0.14rem
    color:#fff
    line-height:0.46rem
    .headerLeft
      width:0.40rem
      float:left
      text-align:center
      font-weight:bold
    .headerRight
      min-width: 0.72rem
      float:right
      text-align:center
      color:#fff
      .icon-city
        margin-left:-0.05rem
    .headerInput
      flex:1   //剩余部分宽度自动撑开
      height:0.3rem
      margin-top:0.08rem
      margin-left:0.03rem
      background: #fff
      border-radius:0.1rem
      color:#ccc
      line-height:0.3rem
      padding-left:0.1rem
</style>
