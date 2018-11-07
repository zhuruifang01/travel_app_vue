<template>
  <div>
    <detail-banner @closeOther="closeOther" @openOther="openOther"
      :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs">
    </detail-banner>
    <detail-header v-show="showOther"></detail-header>
    <div class="content" v-show="showOther">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data (){
    return{
      showOther:true,
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  },
  methods:{
    closeOther (){
      this.showOther = false
    },
    openOther (){
      this.showOther = true
    },
    getDetailInfo () {
      axios.get('./api/detail.json?id='+this.$route.params.id)
           .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
        res = res.data
        if( res.ret && res.data ){
            const data =res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
        }

    }
  },
  mounted (){
    this.getDetailInfo()  //调用方法
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height:10rem
</style>

