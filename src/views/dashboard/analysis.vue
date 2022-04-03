<template>
  <div class='analysis-header-class'>
    <header v-for="item in analysisTitleListCharts" :key="item.title">
      <card :item="item"></card>
    </header>
     <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script lang='ts'>
import card from "./components/card.vue";
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "analysis",
  components: {
    card,
  },
  setup(props, context) {
    const analysisTitleListCharts=reactive([
        {title:"访问数",time:"月",num:12,icon:"1",subTitle:"访问总数",subNum:12312,type:'success'}
    ,{title:"成交额",time:"周",num:12,icon:"1",subTitle:"访问总数",subNum:12312,type:"warning"}
    ,{title:"下载数",time:"年",num:12,icon:"1",subTitle:"访问总数",subNum:1231,type:"default"}
    ,{title:"成交数",time:"年",num:12,icon:"1",subTitle:"访问总数",subNum:12312,type:"success"}
    ])
    return {
        analysisTitleListCharts
    }
  },
});
</script>

<style scoped lang="scss">
.analysis-header-class{
      width: 100%;
      display:flex;

header{
   flex:1;
   box-sizing: border-box;
   margin:8px
}
}

</style>
