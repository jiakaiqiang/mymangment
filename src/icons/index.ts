
import {CloseBold,ArrowDown ,Avatar} from "@element-plus/icons-vue";
import {App} from 'vue'
const list =[CloseBold,ArrowDown,Avatar ]
//获取当前的实例app
function installIcon(app:App):void{
   list.length>0&&list.forEach(item=>{
    app.component(item.name,item)
   })



}
export default  installIcon
