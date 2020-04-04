const path = require ('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge (common,{
    mode: 'development',
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname , "dist")
    },
    plugins: [new htmlWebpackPlugin({
        template : './src/template.html'
    })],
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : ['style-loader','css-loader','sass-loader']
            }
        ]
    }
})