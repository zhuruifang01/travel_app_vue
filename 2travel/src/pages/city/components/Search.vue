<template>
  <div>
      <div class="header search">
        <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
      </div>
      <!--搜索匹配到的内容【最上面新覆盖一层布局】-->
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li v-for="item in list" :key="item.id"
              class="search-item"
              @click="handleCityClick(item.name)">
              {{item.name}}
          </li>
          <li class="search-item" v-show="hasNoList"> 没有找到匹配数据 </li>
        </ul>
      </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default{
    name:'CitySearch',
    props:{
        cities:Object
    },
    data (){
        return {
            keyword:'',
            list:[],
            timer:null  //用来优化[截流]
        }
    },
    computed:{
       hasNoList (){
           return !this.list.length
       }
    },
    methods:{
      handleCityClick (city){
        this.$store.dispatch("changeCity",city) //向全局store>index.js派发数据
        this.$router.push("/")  //页面跳转
      }
    },
    watch:{
      //监听到搜索内容keyword值改变后：
      keyword () {
        if(this.timer){
           clearTimeout(this.timer)
        }
        if (!this.keyword){ //没有内容时清空列表
            this.list =[]
            return
        }
        this.timer = setTimeout(()=>{
           const result = []
           for (let i in this.cities){
               this.cities[i].forEach((value)=>{
                  if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                    //cities值中 与 关键字keyword去匹配：【模糊搜索】
                    result.push(value)
                  }
               })
           }
           this.list = result
        },100)

      }
    },
    mounted (){
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .4rem
    line-height: .4rem
    font-size:.14rem
    color: #fff
    text-align:center
    position:relative
    background:$bgColor
    .search-input
      width:98%
      height:.3rem
      border:0
      border-radius:.04rem
      text-align:center
      padding:0 .1rem
      box-sizing:border-box
  .search-content
    position:absolute
    top:.8rem;left:0;right:0;bottom:0
    overflow:hidden
    z-index:1
    background:#eee
    font-size:.12rem
    .search-item
      overflow:hidden
      line-height: .3rem
      border-bottom:.01rem solid #ccc
      padding-left: .1rem
      color:#666
      background:#fff
</style>
