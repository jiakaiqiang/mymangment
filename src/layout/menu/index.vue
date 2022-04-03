<template>
  <div style="width: 100%">
      <logo class="mangment-logo-class "></logo>
      
      <el-menu
              default-active="2"
              :router="true"
              class="mangment-menu"
              unique-opened
      >
          <template v-for='item in route'  :Key="item.path">
              <siderItem :items="item" :basePath="item.path"></siderItem>
          </template>

      </el-menu>
  </div>
</template>

<script >
import  {defineComponent} from 'vue'
import logo from '@/layout/logo/index'

import {routes} from '@/router/index'
import siderItem from '@/layout/menu/siderItem'
export default defineComponent({
  components:{
    siderItem,
      logo
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

<style lang="scss">
    .mangment-menu{
       height:calc(100vh - 60px )
    }
    .mangment-logo-class{
        padding:8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background:#001529;
        color:#fafafa;
        border-bottom: 1px solid #f5f5f5;

        img{
            width:40px;
            height:40px;
        }
        &>div{
            /*font-size:1rem;*/

        }
    }

</style>
