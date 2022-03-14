<template>
<div>
  <template v-if="isHasChildren(items)">
    <el-menu-item :index="`${items.path}`">{{
      items.meta.title
      }}</el-menu-item>
  </template>
  <el-sub-menu v-else  :index="items.path">
    <template #title>{{items.meta.title}}</template>
   <template v-for="itemchildItem in items.children" :key="itemchildItem.name">
     <siderItem   :items="itemchildItem" :basePath="itemchildItem.path"></siderItem>
   </template>
  </el-sub-menu>

</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    items: {
      type: Object,
      default: () => {
        return {};
      },
    },
    basePath:{
      type:String,
      default:"/"
    }
  },
  setup(props,context){
    const path=props.basePath
    console.log()
     const  isHasChildren=(item)=>{
       return item.children&&item.children.length>0?false:true
      }

      return {
        path,
          isHasChildren
      }
  }
});
</script>

<style>
</style>
