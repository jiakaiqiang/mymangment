import {appState} from "@/types/store";
import {Router} from "@/types/rotuer"
const state:appState={
    TagView:[{path:"/test",meta:{title:"测试"}}]
}
const mutations={
    /*添加标签*/
    ADD_TAG(state:appState,tag:Router){
        console.log(tag.path,state.TagView,'before')
        console.log(state.TagView.filter((item:Router)=>{return item.path==tag.path}).length,'tag')
        if(state.TagView.filter((item:Router)=>{return item.path==tag.path}).length>0)return
        state.TagView.push(tag)
        console.log('2332',state.TagView)
    },
   /*删除标签*/
    DELETE_TAG(state:appState,tag:Router){

        let index=state.TagView.findIndex((item:Router)=>item.path==tag.path)
        state.TagView.splice(index,1)
    }
    /*更新标签*/
}
const actions={

}
export default {
    namespace:true,
    state,
    mutations,
    actions
}
