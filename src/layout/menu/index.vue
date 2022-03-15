<template>
  <div style="width: 100%">
      <logo class="mangment-logo-class"></logo>
      <el-menu
              default-active="2"
              :router="true"
      >
          <template v-for='item in route' >
              <siderItem :Key="item.path" :items="item" :basePath="item.path"></siderItem>
          </template>

      </el-menu>
  </div>
</template>

<script>
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
    .el-menu{
       height:calc(100vh - 60px )
    }
    .mangment-logo-class{
        /*width:100%;*/
        img{
            width:40px;
            height:40px;
        }
        &>div{
            /*font-size:1rem;*/

        }
    }

</style>
