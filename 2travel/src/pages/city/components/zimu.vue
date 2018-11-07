<template>
  <div>
    <ul class="list">
       <li  v-for="(item,key) in cities" :key="key" :ref="key"
            @click="handleZimuClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove ="handleTouchMove"
            @touchend  ="handleTouchEnd">
         {{key}}
       </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'CityZimu',
    props:{
      cities:Object
    },
    computed:{
      //用获取到的cities对象数据，构造出一个数组['A','B'....]的方法：
      letters (){
        const letters = []
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    data (){
      return{
           touchStatus:false,
           startY:0
       }
    },
    updated (){
      this.startY = this.$refs['A'][0].offsetTop  //【优化】
    },
    methods:{
      //点击事件触发方法:
      handleZimuClick (e) {
        //console.log(e.target.innerText); //输出"点击的内容"
        this.$emit('change',e.target.innerText) //子组件向父City.vue来传值：【事件触发的方式】
      },
      //手指滑动事件：
      handleTouchStart (){
        this.touchStatus=true
      },
      handleTouchMove (e){
        if(this.touchStatus){
            //const startY = this.$refs['A'][0].offsetTop   //字母A距离顶部高度[不包括header] //此条每次都会执行，所以改放在updata生命钩子中【优化】
            const touchY = e.touches[0].clientY-80        //滑动的手指位置-header高度[距离顶部高度]
            const index = Math.floor((touchY - this.startY) / 18)   //计算出是第几个字母位置
            if(index >= 0 && index < this.letters.length){
              this.$emit('change',this.letters[index])
            }
        }
      },
      handleTouchEnd (){
        this.touchStatus=false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position:absolute
    right:0
    top: 1rem
    bottom:0
    width: .25rem
    font-size:0.16rem
    text-align:center
    color:deepskyblue
    line-height:.18rem
    /*使得里面内容垂直居中*/
    display:flex
    flex-direction:column
    justify-content:center
</style>
