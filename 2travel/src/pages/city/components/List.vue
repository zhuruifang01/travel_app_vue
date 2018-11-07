<template>
  <!--2.使用Better-scroll-->
  <!--在vue中要获取dom,需要v-el:wrapper或者ref='wrapper'；然后this.$el.wrapper或者this.$refs.wrapper来使用-->
  <div class="list" ref="wrapper">
      <div ref="content">
        <div class="area">
          <div class="title">当前城市</div>
          <div class="contain">
            <div class="con">
              <div class="button"> {{ this.$store.state.city }} </div> <!--使用store的全局公用数据-->
            </div>
          </div>
        </div>
        <!--热门城市-->
        <div class="area">
          <div class="title">热门城市</div>
          <div class="contain">
            <div class="con"
                 v-for="item in hot" :key="item.key"
                 @click="handleCityClick(item.name)">
              <div class="button"> {{item.name}} </div>
            </div>
          </div>
        </div>
        <!--城市列表-->
        <!--注意：循环的数据类型是"对象"时的写法-->
        <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
            <div class="title"> {{ key }} </div>
            <ul class="item"
                v-for="innerItem in item" :key="innerItem.id"
                @click="handleCityClick(innerItem.name)">
               <li class="iten-list"> {{ innerItem.name }} </li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll' //1.引入Better-scroll
  export default{
    name:'CityList',
    //接收父组件City.vue传过来的数据
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    methods:{
      handleCityClick (city){
         this.$store.dispatch("changeCity",city) //向全局store>index.js派发数据
         this.$router.push("/")  //页面跳转
      }
    },
    mounted(){ //3.生命周期：
        //实例化better-scroll:
        this.$nextTick(()=>{
          this.scroll = new Bscroll(this.$refs.wrapper)
          console.log(this.scroll)
        })
    },
    //侦听器：
    watch:{
        letter () { //letter值变化了就会触发：
            console.log(this.letter)
            if(this.letter){
                const element = this.$refs[this.letter][0]  //获取到ref="letter值"对应的dom元素
                this.scroll.scrollToElement(element) //滚动条滚动到"所指定的元素"位置
            }
        }
    }
  }
</script>
<style lang="stylus" scoped="">
  .list
    overflow hidden
    font-size:.04rem
    position:absolute
    top:.8rem
    left:0
    right:0
    bottom:0
    .title
      line-height: .3rem
      padding-left: .1rem
      color: #666
      background:#eee
      border-bottom:.01rem solid #ccc
      box-sizing:border-box
    .contain
      overflow:hidden
      padding:0 .2rem 0 .1rem
      .con
        float:left
        width:33%
        padding:.06rem .05rem
        box-sizing:border-box
        .button
          line-height: .25rem
          background: #fff
          text-align:center
          border:.01rem solid #ccc
          color:#666
          border-radius:.06rem
          box-sizing:border-box
    .iten-list
      overflow:hidden
      line-height: .3rem
      border-bottom:.01rem solid #ccc
      padding-left: .1rem
      color:#666
</style>
