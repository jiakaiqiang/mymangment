<template>
 <div class="nav-class">
     <template v-for="(item,index) in tagViews" :key="index">
         <router-link   :to="{path:item.path,query:item.query}" >
            <span class="nav-link-class"> {{item.meta.title}}</span>
         </router-link>
     </template>

 </div>
</template>
<script>
    import {defineComponent,computed} from 'vue'
    import {useStore} from 'vuex'
    import {key} from '@/store/store'
    export default defineComponent({
       setup(){
           const store =useStore(key)
           const tagViews=computed(()=>{
               return store.state.app.TagView
           })
           return {
               tagViews
           }
       }
    })

</script>
<style lang="scss">
    .nav-class{
        a{
            color:deepskyblue;
        }
        a:link    {
            color:white;
            background-color: pink;
        }
         a:hover{
             background:pink;
             color:white
         }
        .nav-link-class{
            display:inline-block;
            padding:4px 4px 4px 4px
        }
    }


</style>
