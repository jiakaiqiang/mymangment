<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path" :to="{ name:item.name }">
                <span class="no-redirect">{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script lang="ts">
    import {defineComponent,} from 'vue'
    import {useRoute} from "vue-router";

    export default defineComponent({
        setup(){
            // let  levelList=null
            // const route = useRoute()
            // let matched = route.matched.filter(item => item.meta && item.meta.title)
            // levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
            // console.log(levelList,'wewe')
            // return {
            //     levelList
            // }
        }
     })
</script>
<style lang="scss">

</style>
