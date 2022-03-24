<template>
  <el-card class='my-project-card'>
    <template #header>
      <div class='my-project-header'>
        <div style=''>项目</div>
        <el-button  type="text">更多</el-button>
      </div>
    </template>
    <div  class="my-project">
        <div v-for="(item,index) in projectList" :key="index"  class="my-project-item">{{item.name}}</div>
    </div>

  </el-card>
</template>

<script lang="ts">
import {defineComponent,reactive} from 'vue'
export default defineComponent({
    setup(){
        const projectList = reactive([{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},])
    return{
        projectList
    }
   }


})
</script>

<style lang='scss'>
.my-project-card{
    .el-card__header{
        padding:8px
    }
    .my-project-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
        
      
    }
    .my-project{
        display: flex;
        flex-wrap: wrap;
        .my-project-item{
            width:33.3%;
            height: 100px;
        }
    }
}

</style>