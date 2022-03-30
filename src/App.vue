<template>
    <div class='app'>
          <transition name="fade">
        <router-view/>
        </transition>
        <loading v-if='state.loading'></loading>
    </div>
</template>
<script lang="ts">
    import {defineComponent,watch} from 'vue'
    import loading from '@/components/loading/index.vue'
  import {key} from './store/store'
  import {useStore} from 'vuex'
    import {onBeforeRouteUpdate,useRouter,useRoute } from "vue-router";

    export default defineComponent({
        components: {
            loading
        },
        setup() {
            const store = useStore(key)
            const state = store.state
            const Router=useRouter()
            const Route=useRoute()
           //监听当前路由
           //  watch(()=>Route.name,()=>{
           //      console.log(Route.name,'wat')
           //      store.commit('ADD_TAG',Route)
           //  })
            watch(()=>Router.currentRoute.value.path,()=>{
                console.log(Router.currentRoute,'测试')
               //if(!Router.currentRoute.value.meta.hidden){
                    store.commit('ADD_TAG',Router.currentRoute.value)
                //}
            })
            return {
                state
            }
        }
    })
</script>
<style lang="scss">
  .app{
      height: 100%;
      width: 100%;
      .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  }
</style>
