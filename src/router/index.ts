import {createRouter, createWebHashHistory, RouterOptions} from 'vue-router'
import layout from '@/layout/index.vue'

export const routes: Array<object> = [{
    path: "/",
    redirect: "/login",
    hidden: false,
    meta: {title: '', icon: ""}
   },
   {
       path:"/login",
       name:"login",
       meta: {title: '', icon: ""},
       component:()=>import('@/views/login/index.vue'),
       hidden:false,

   },
    {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/work",
    component: layout,
    meta: {title: 'Dashboard', icon: ""},
    children: [
        
        {
            path: "work",
            name: "work",
            component: () => import("@/views/dashboard/work.vue"),
            meta: {title: '工作台', icon: ""}
        },
        {
            path: "analysis",
            name: "analysis",
            component: () => import('@/views/dashboard/analysis.vue'),
            meta: {title: "分析页", icon: ""}
        }

    ]

}
    , {
        path: "/homepage",
        name: "homepage",
        component: layout,
        redirect: "/homepage/homepage",
        meta: {title: '首页', icon: ""},
        children: [{
            path: 'homepage',
            name: "homepage",
            component: () => import("@/views/homepage/index.vue"),
            meta: {title: '首页第二个', icon: ""}
        }]
    },
    {
        path: "/about",
        name: "about",
        component: layout,
        redirect: "/about/index",
        meta: {title: '关于'},
        children: [
            {
                path: "index",
                name: "index",
                component: () => import('@/views/about/index.vue'),
                meta: {title: '关于', icon: ""}
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes

} as RouterOptions)
export default router
