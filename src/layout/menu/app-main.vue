<template>
    <div style="display: flex;height: 100%">
        <menucontent style="width: 400px"></menucontent>
       <div style="flex:1">
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

<style scoped>

</style>
