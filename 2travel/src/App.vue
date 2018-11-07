<template>
  <div id="app">
    <!--keep-alive优化作用：调用一次路由之后，缓存下来，不会每次页面跳转都调用一次-->
        <!--exclude说明：keep-alive不对Detail起缓存作用-->
    <keep-alive exclude="Detail">
       <router-view/>  <!--当前路由网址显示内容就是其对应的.vue内容-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
</style>
