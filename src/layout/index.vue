<template>
    <appMain></appMain>
</template>
<script lang="ts">
    import {defineComponent,watch,watchEffect} from 'vue'
    import {useRoute} from "vue-router";
    import appMain from './menu/app-main.vue'
    export default  defineComponent({
        components:{
            appMain
        },
        setup(props,context){
            const  route = useRoute()

        }
    })
</script>
