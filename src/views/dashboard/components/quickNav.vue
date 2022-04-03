<template>
  <el-card class='my-project-card'>
    <template #header>
      <div class='my-project-header'>
        <div style='height:40px;line-height:40px'>快速导航</div>
      
      </div>
    </template>
    <div  class="my-project">
        <div v-for="(item,index) in projectList" :key="index"  class="my-project-item">
          <div class='quick-item'>
            <div>icon</div>
            <div>{{item.name}}</div>
          </div>
        </div>
    </div>

  </el-card>
</template>

<script lang="ts">
import {defineComponent,reactive} from 'vue'
export default defineComponent({
    setup(){
        const projectList = reactive([{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},{logo:"",name:"测试",des:"sdf",person:"sdff",time:"2022-12-12"},])
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
    .el-card__body{
      padding:0px
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
            width:33%;
            flex-wrap: wrap;
            height: 100px;
            display: flex;
             justify-content:center;
             align-items: center;
            border-bottom:1px solid #e6dddd;
            &:nth-child(2), &:nth-child(3), &:nth-child(5), &:nth-child(6){
              border-left:1px solid #e6dddd
            }  
            .quick-item{
              &>div:nth-child(1){
                margin-bottom:10px
              }
            }
            
            }
    }
}

</style>