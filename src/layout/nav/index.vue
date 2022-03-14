<template>
 <div class="nav-class">
     <div v-for="(item,index) in tagViews" :key="index">
             <router-link   :to="{path:item.path,query:item.query}"  class="nav-class-tag">
                 <span class="nav-link-class"> {{item.meta.title}}</span>
                 <el-icon color="#409EFC" class="nav-tag-close" @click.stpo.prevent="closeRouteLink(item,index)">
                     <CloseBold />
                 </el-icon>
             </router-link>
     </div>


 </div>
</template>
<script lang="ts">
    import {defineComponent,computed,reactive} from 'vue'
    import {useStore} from 'vuex'
    import {Router} from '../../types/rotuer'
    import {key} from '@/store/store'
    export default defineComponent({
       setup(){
           const userInfo=reactive({name:'测试'})
           const store =useStore(key)
           const tagViews=computed(()=>{
               return store.state.app.TagView
           })
          const  closeRouteLink=(item:Router,index:number)=>{
              //更新
              store.commit('DELETE_TAGVIEW',item)

          }
           return {
               closeRouteLink,
               tagViews,
               userInfo
           }
       }
    })

</script>
<style lang="scss">
    .nav-class{
        display: flex;
        align-items: center;
        .nav-class-tag{
            display: inline-block;
              height:30px;
               border:1px solid #e8e9ec;
                padding:5px 32px;
          .nav-tag-close{
              margin-left:16px;
              visibility: hidden;
          }
        }
        a{
            color:black;
            height:100%;
            display: inline-block;
        }
        a:link    {
            /*color:white;*/
            /*background-color: pink;*/
        }
         a:hover{
             background:#2471DF;
             color:white;
             .nav-tag-close{
                 visibility: visible;
                 border-radius: 16px;
             }
         }
        .nav-tag-close:hover{
            background: #e8e9ec;

        }
        .nav-link-class{
            display:inline-block;
            height:100%;
            padding:4px 4px 4px 4px
        }

    }


</style>
