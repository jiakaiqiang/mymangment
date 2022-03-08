<template>
    <div style="display: flex;">
        <menucontent style="width: 400px"></menucontent>
        <router-view style="flex:1"></router-view>
    </div>
</template>

<script>
    import menucontent from './index.vue'
    import {defineComponent} from 'vue'

    export default defineComponent({
        components:{menucontent}
    })
</script>

<style scoped>

</style>
