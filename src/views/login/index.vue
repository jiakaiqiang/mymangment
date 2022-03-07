<template>
<div class='login'>
    sd
    <el-button type='primary' @click="submit">提交</el-button>
</div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
   
    setup(){
        const submit=()=>{
            // Notification.open({
            //     message:"测试"
            // })

        }
        return {
            submit
        }
    }
})
</script>

<style>

</style>