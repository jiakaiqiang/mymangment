<template>
    <el-menu
    default-active="2"
    :router="true"
  >
    <template v-for='item in route' >
        <siderItem :Key="item.path" :items="item" :basePath="item.path"></siderItem>
    </template>

  </el-menu>
</template>

<script>
import  {defineComponent} from 'vue'
import {routes} from '@/router/index'
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
    const route=handleRoute(routes)
      console.log(route)

    return{
      route
    }
  }

})
</script>

<style>

</style>
