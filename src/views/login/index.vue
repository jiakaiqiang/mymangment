<template>
<div class='login'>
   <div class='login-container'>
       <el-form :mode="formInfo.data" :rules="formInfo.rules" label-position='right' label-width="120px" class='login-form-class'>
           <el-form-item label='用户名' prop='username'>
               <el-input v-model='formInfo.data.userName'></el-input>
           </el-form-item>
             <el-form-item label='密码' prop='password'>
               <el-input v-model='formInfo.data.passWord'></el-input>
           </el-form-item>
       </el-form>

      <div class='login-button'>
           <el-button type="primary" @click="submit">登录</el-button>
        <el-button type="primary" @click="submit">注册</el-button>
      </div>
   </div>
</div>
</template>

<script>
import {defineComponent,reactive} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {key} from '@/store/store'
import {routes} from '@/router/index'
export default defineComponent({

    setup(){
        const store = useStore(key)
        const router= useRouter()
        const route=useRoute()
        const formInfo=reactive({
          data:{userName:"",
          passWord:""},
          rules:{}
        })
        function handleRoute(route){
            return route.filter(item=>{
                return item.hidden&&item.hidden!=false ||item.hidden==undefined
            })
        }

        const viewRouteTag=handleRoute(routes)
        const submit=()=>{

            router.push('/homepage')
            //添加多个路由标签

        }
        return {
            submit,
          formInfo
        }
    }
})
</script>

<style lang="scss">
 .login{
     /*width:100%;*/
     /*height:100%;*/
     display: flex;
     justify-content: center;
      align-items: center;
      .login-container{
      width: 500px;
      height:200px;
      border:1px dashed pink;
      padding:16px;
      .login-button{
          width: 100%;
          display:flex;
          justify-content: center;
          align-items: center;
      }
  }
 }

</style>

