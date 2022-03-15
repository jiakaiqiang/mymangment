<template>
    <div>
        <img :src="logo.src" />
        <span>{{config.title}}</span>
    </div>
</template>

<script>
    import config from  "@/config/index"
    export default {
        name: "index.vue",
        data(){
            return{
                config:config,
                logo:{src:require('../../assets/logo.png')
                }
            }
        }
    }
</script>

<style scoped>

</style>
