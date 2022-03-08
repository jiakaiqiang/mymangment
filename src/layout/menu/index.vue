<template>
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <template v-for='item in route' >
        <siderItem :Key="item.path" :items="item"></siderItem>
    </template>

  </el-menu>
</template>

<script>
import  {defineComponent} from 'vue'
import {routes} from '@/router/index'
console.log(routes)
import siderItem from '@/layout/menu/siderItem'
export default defineComponent({
  components:{
    siderItem
  },
  setup(props,context){
    function handleRoute(route){
      return route.filter(item=>{
        return item.hidden&&item.hidden!=false ||item.hidden==undefined
      })
    }
    console.log(handleRoute(routes),'we11we')
    const route=handleRoute(routes)

    return{
      route
    }
  }

})
</script>

<style>

</style>
