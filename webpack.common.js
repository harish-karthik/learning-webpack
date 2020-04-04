const path = require ('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : {
        main :'./src/index.js',
        vendor : './src/vendor.js'
    },
    module : {
        rules : [
            {
                test : /\.html$/,
                use : ['html-loader']
            },
            {
                test : /\.(svg|png|jpg|gif)$/,
                loader : 'file-loader',
                options :{
                    name: '[name].[ext]',
                    outputPath : 'images'
                }
            }
        ]
    }
}