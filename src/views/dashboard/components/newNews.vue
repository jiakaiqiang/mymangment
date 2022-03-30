<template>

  <el-card class='my-project-card'>
    <template #header>
      <div class='my-project-header'>
        <div style='height:40px;line-height:40px'>最新动态</div>
      <el-button  type="text">更多</el-button>
      </div>
    </template>
     <div v-for="item in newList" :key="item.name" class='my-news-list'>
        <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div>
        <div>威廉 在 开源组 创建了项目 Vue</div>
        <div>{{item.time}}</div>
      </div>
     </div>
  </el-card>
</template>

<script lang="ts">
import {defineComponent,reactive} from 'vue'
export default  defineComponent({
 setup(){
  const newList=reactive([{name:"dswe",time:"2020-12-12"},{name:"dwe3s",time:"2020-12-12"},{name:"drrs",time:"2020-12-12"},{name:"ds",time:"2020-12-12"},{name:"ds",time:"2020-12-12"},{name:"d6s",time:"2020-12-12"},{name:"d4s",time:"2020-12-12"},{name:"d3s",time:"2020-12-12"},{name:"ds1",time:"2020-12-12"}])
   return {
     newList
   }
 }
})
</script>

<style lang='scss' scoped>
  .my-news-list{
    display: flex;
    height:80px;
    border:1px solid #f5f5f5;
    align-items: center;
     &>div{
       font-size:14px;
       color:#666262;
       padding-left:8px;
     &>div:nth-child(1){
        margin-bottom:8px
      }
  }
  }
</style>