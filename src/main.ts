import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { store,key } from '@/store/store'
import './style/index.scss'
import './style/elementui.scss'
import {CloseBold} from '@element-plus/icons-vue'
//注册组件
import installIcon from "@/icons";
const app =createApp(App)
installIcon(app)
app.use(ElementPlus)
app.use(store,key)
app.use(router)
app.mount('#app')

