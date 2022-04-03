<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ item.title }}</span>
        <el-tag class="ml-2" :type="item.type">{{ item.time }}</el-tag>
      </div>
    </template>
    <div class="card-content">
      <div>
        <div>{{ item.num }}</div>
        <div>{{ item.icon }}</div>
      </div>
      <div>
        <div>{{ item.subTitle }}</div>
        <div>{{ item.subNum }}</div>
      </div>
    </div>
  </el-card>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: "",
    },
  },

  setup(props, context) {},
});
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-content{
  &>div{
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  &>div:nth-child(1){
    height:30px;
    line-height:30px;
  }

}
</style>
