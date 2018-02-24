const ExtraTextPlugin=require('extract-text-webpack-plugin');
const extractCSS=new ExtraTextPlugin({
    filename:'./bundle.css',
    disable:false,
    allChunks:true
});
module.exports={
    entry:{
        app:['./app/css/css-entry.js']
    },
    output:{
        path:__dirname+'/dist/css',
        filename:'css.js'
    },
    module:{
        rules:[
        {
            test:/\.css$/,
            use:extractCSS.extract({
                fallback:"style-loader",
                use:['css-loader','postcss-loader']
            })
        }]
    },
    plugins:[
        extractCSS
    ]
}