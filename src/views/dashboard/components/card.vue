<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{item.name}}</span>
       <el-tag class="ml-2" :type="item.type">{{item.tag}}</el-tag>
      </div>
    </template>
    <div>
      <div>
      <div>{{item.number}}</div>
      <div>{{item.icon}}</div>
    </div>
    <div>
      <div>{{item.title}}</div>
      <div>{{item.money}}</div>
    </div>
    </div>

  
  </el-card>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  props:{
    item:{
      type:Object,
      default:""
    },
  },

  setup(props, context) {},
});
</script>

<style scoped lang="scss">
</style>
