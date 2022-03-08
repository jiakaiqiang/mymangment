<template>
    <div class='app'>
        <router-view/>
        <loading v-if='state.loading'></loading>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
    import loading from '@/components/loading/index.vue'
  import {key} from './store/store'
  import {useStore} from 'vuex'
    export default defineComponent({
        components: {
            loading
        },
        setup(){
            const store=useStore(key)
            const state =store.state
           return{
               state
           }

        }
    })
</script>
<style lang="scss">
  .app{
      height: 100%;
      width: 100%;
  }
</style>
