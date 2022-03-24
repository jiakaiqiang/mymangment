<template>
    <div style="display: flex;height: 100%;width: 100%">
        <menucontent style="width: 300px"></menucontent>
       <div class="mangent-container">
           <breadcrumb></breadcrumb>
           <navlink></navlink>
           <router-view ></router-view>
       </div>
    </div>
</template>

<script>
    import menucontent from './index.vue'
    import {defineComponent} from 'vue'
    import navlink from '../nav/index'
    import breadcrumb from '../breadcrumb/index'

    export default defineComponent({
        components:{menucontent,navlink,breadcrumb},

    })
</script>

<style lang="scss">
    .mangent-container{
         width: calc(100vw - 232px);
         

    }

</style>
