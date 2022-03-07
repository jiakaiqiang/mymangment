import {createRouter,createWebHashHistory,RouterOptions} from 'vue-router'

export const routes:Array<object>=[{
    path:"/",
    redirect:"/login",
    meta:{title:""}
},{
    path:"/login",
    name:"login",
    component:()=>import('@/views/login/index.vue')
},{
    path:"/homepage",
    name:"homepage",
    hidden:false,
    meta:{title:'首页',icon:""}
}]

const router=createRouter({
   history:createWebHashHistory(),
   routes:routes

} as RouterOptions)
export default router
