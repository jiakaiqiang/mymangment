import {createRouter,createWebHashHistory,RouterOptions} from 'vue-router'
import layout from '@/layout/index.vue'
export const routes:Array<object>=[{
    path:"/",
    redirect:"/login/first",
    hidden:false,
    meta:{title:'根',icon:""}
},{
    path:"/login",
    name:"login",
    component:layout,
    meta:{title:'登录',icon:""},
     children: [
    {path:"first",name:"first",component:()=>import('@/views/login/index.vue'),meta:{title:"登录第一个",icon:""}},
        {path:"second",name:"second",component:()=>import("@/views/login/index.vue"),meta:{title:'登录第二个',icon:""}},
    ]

},
// ,{
//     path:"/homepage",
//     name:"homepage",
//     component:layout,
//     meta:{title:'首页',icon:""},
//     children:[{path: 'homepage',name:"homepage",component:()=>import('@/views/homepage/index.vue'),meta:{title:'首页第二个',icon:""}}]
// },
    {
    path: "/about",
    name: "about",
     component:layout,
    meta:{title:'关于'},
    children: [
         {path:"firsts",name:"firsts",component:()=>import("@/views/about/index.vue"),meta:{title:"第一个",icon:""}},
        {path:"seconds",name:"seconds",component:()=>import('@/views/homepage/index.vue'),meta:{title:'第二个',icon:""}},
    ]
}
]

const router=createRouter({
   history:createWebHashHistory(),
   routes:routes

} as RouterOptions)
export default router
