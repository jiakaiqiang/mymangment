import {createStore} from 'vuex'
import {userInfo} from '../types/store'
const store=createStore({
     state:{
       userInfo:():userInfo=>{
           return {
               name:"23",
               age:12
           }
       }
     },
    mutations:{

    },
    actions:{

    }
})
