export interface Router{
    path:String,
    name:String,
    component:Function,
    meta:metaType
}
interface metaType{
    title:String,
    icon:String
}