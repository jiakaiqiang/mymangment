import {createStore,Store,useStore as useStoreConfig} from 'vuex'
import {State} from '../types/store'
import {InjectionKey}  from 'vue'
import app from './app'
//定义注册的key
export const key:InjectionKey<Store<State>>=Symbol()//通过泛型Store<State> 指定key InjectionKey的泛型
// export function useStore(){

//     return 'useStoreConfig(key)'
// }
export const store=createStore({
     state:():State=>{
        return {
           userInfo:{
               name:"23"
           },
           loading:false
        }
    },

    mutations:{
     UPDATE_LOAD(state,loading){
         state.loading=loading

     }

    },
    actions:{

    },
    modules:{
        app
    }
})
