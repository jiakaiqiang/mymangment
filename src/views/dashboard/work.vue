<template>
  <div class="my-work">
    <header>
      <div class="my-work-header-left">
        <el-avatar :size="50" :src="circleUrl" />
        <div>
          <div>早安打工人</div>
          <div>今日晴，20-23</div>
        </div>
      </div>
      <div class="my-work-header-right">
        <div v-for="item in personData" :key="item.title">
          <div>{{ item.title }}</div>
          <div>{{ item.num }}</div>
        </div>
      </div>
    </header>
    <main>
      <!--项目-->
      <!--最新动态-->
      <div class='my-work-main-left'>
        <my-project class='margin-bottom-16'></my-project>
        <new-news></new-news>
      </div>
      <!--快捷导航-->
      <div class='my-work-main-right'> 
        <quick-nav  class='margin-bottom-16'></quick-nav>
         <img :src="require('@/assets/work.svg')" style="background:#fff"/>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import myProject from '@/views/dashboard/components/myProject.vue'
import newNews from '@/views/dashboard/components/newNews.vue'
import quickNav from '@/views/dashboard/components/quickNav.vue'
import workStatus from '@/views/dashboard/components/workStatus.vue'

import { defineComponent, reactive } from "vue";
export default defineComponent({
  components:{
    myProject,newNews,quickNav,workStatus
  },
  setup() {
    const personData = reactive([
      { title: "代办", num: 3 },
      { title: "项目", num: 8 },
      { title: "团队", num: 300 },

    ]);
    
    const circleUrl=''
    return {
      personData,
      circleUrl,
     
    };
  },
});
</script>

<style lang="scss" scoped>
.my-work {
  header {
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
  padding:0px 16px;
    height: 100px;
    .my-work-header-left {
      display: flex;
      flex: 1;
      &>div{
        margin-left:16px;
        &>div:nth-of-type(1){
          margin-bottom:8px;
          font-size:22px
        }
        &>div:nth-of-type(2){
          font-size:14px
        }
      }
    }
    .my-work-header-right {
      width: 300px;
      display: flex;
      &>div{
        flex:1;
        text-align: center;
        &>div:nth-child(1){
          margin-bottom:8px;
          font-size:16px
        }
        &>div:nth-child(2){
          font-size:22px
        }
      }
    }
     
  }
  main{
     margin:0px 16px;
     margin-top:16px;
    
     display: flex;
    .my-work-main-left{
     
      width:70%;
       
     }
     .my-work-main-right{
       flex-wrap: wrap;
       flex:1;
        margin-left:16px
     }
  }
}
</style>