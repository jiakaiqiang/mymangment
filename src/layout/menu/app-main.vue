<template>
  <div style="display: flex; height: 100%; width: 100%">

      <menucontent style="width: 220px"></menucontent>
   
  
    <div class="mangent-container">
      <breadcrumb></breadcrumb>
      <navlink></navlink>
      <el-scrollbar>
         <router-view  v-slot="{Component}">
            <transition name="fade">
           <keep-alive>
                    <component :is="Component"/>
                </keep-alive>
        </transition>
         </router-view>
       
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import menucontent from "./index.vue";
import { defineComponent, ref } from "vue";
import navlink from "../nav/index.vue";
import breadcrumb from "../breadcrumb/index.vue";

export default defineComponent({
  components: { menucontent, navlink, breadcrumb },
  setup() {
    const appHeihgt = document.getElementById("app")?.clientHeight - 100 + "px";
    return {
      appHeihgt,
    };
  },
});
</script>

<style lang="scss">
.mangent-container {
  flex:1;
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
  .el-scrollbar {
    height: calc(100vh - 86px);
  }
}
</style>
