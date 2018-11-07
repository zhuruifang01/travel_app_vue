import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


//【优化】：为防止某些浏览器对localStorage报错，用 try{}catch(e){} 包裹一层
let defaultCity = '北京'
try{
   if(localStorage.city){
     defaultCity = localStorage.city
   }
} catch (e){ }


export default new Vuex.Store({
  //定义全局公用数据：
  state: {
     //city: localStorage.city || '北京'   //默认值
     city: defaultCity                    //【"优化"默认值】
  },
  actions:{
  //接收List.vue派发的内容(city)：
      changeCity (ctx,city){
         ctx.commit("changeCity",city)
      }
  },
  mutations:{
  //改变全局数据：
      changeCity (state,city){
         state.city = city          //改变默认值数据
         //localStorage.city = city   //将数据保存到本地存储记忆
         //优化上条localStorage：
           try{
              localStorage.city = city
           } catch (e){}
      }
  },
  //补充知识点：getters【可对公用数据state做一些组合应用】【类似于计算属性功能】
  // 调用方法：header.vue中有测试getters使用1~2
  getters:{
      testCity(state){
         return state.city +'test'   //加一个空格
      }
  }
})
