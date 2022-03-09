export interface Router{
    path:String,
    name:String,
    component:Function,
    meta:metaType,
    [propName:string]:any
}
interface metaType{
    title:String,
    icon:String
}
