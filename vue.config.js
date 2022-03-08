const path = require('path')
module.exports={
    lintOnSave:false,
    devServer:{
        open:true,
        port:9000
    },
    configureWebpack:{
        resolve:{
            alias:{
                '@':path.resolve(__dirname,'src')
            }
        }
    }
}