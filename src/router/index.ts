import {createRouter,createWebHashHistory,RouterOptions} from 'vue-router'

export const routes:Array<object>=[{
    path:"/",
    redirect:"/login",
    hidden:false,
    meta:{title:'根',icon:""}
},{
    path:"/login",
    name:"login",
    component:()=>import('@/views/login/index.vue'),
    meta:{title:'登录',icon:""}
},{
    path:"/homepage",
    name:"homepage",
    component:()=>import('@/views/homepage/index.vue'),
    meta:{title:'首页',icon:""}
}, {
    path: "/about",
    name: "about",
     component:()=>import("@/views/about/index.vue"),
    meta:{title:'关于'},
    children: [
        // {path:"first",name:"first",component:()=>import("@/views/about/index.vue"),meta:{title:"第一个",icon:""}},
        {path:"second",name:"second",component:()=>import("@/views/about/second.vue"),meta:{title:'第二个',icon:""}},
    ]
}
]

const router=createRouter({
   history:createWebHashHistory(),
   routes:routes

} as RouterOptions)
export default router
