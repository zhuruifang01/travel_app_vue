<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <!--6.数据传给各子组件去接收:-->
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-zimu :cities="cities" @change="handleZimuChange"></city-zimu> <!--监听到 子zimu.vue的change事件之后需执行handleZimuChange方法-->
  </div>
</template>
<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityZimu from './components/zimu.vue'
  import axios from 'axios'    //1.引入ajax:
  export default{
      name:'City',
      components:{
        CityHeader,
        CitySearch,
        CityList,
        CityZimu
      },
      //4.定义数据,用来存放父接收到的内容：
      data (){
         return{
           cities:{},   //对象
           hotCities:[], //数组
           letter:''
         }
      },
      methods:{
        //3.ajax方法：
        getCityInfo(){
            axios.get('./static/mock/city.json')
               .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
            //console.log(res.data)
            //5.获取到的数据，赋予data:
            const res1 = res.data
            if (res1.ret && res1.data){
                const dataGet = res1.data
                this.cities = dataGet.cities
                this.hotCities = dataGet.hotCities
            }
        },
        //监听到change后执行：
        handleZimuChange(letter){
           //console.log(letter) //子zimu.vue携带给父的数据
           this.letter = letter
        }
      },
      mounted (){
         this.getCityInfo()  //2.调用ajax方法:
      }
  }
</script>
<style lang="stylus" scoped>

</style>
