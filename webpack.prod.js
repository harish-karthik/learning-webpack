const path = require ('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require ('./webpack.common')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(common , {
    mode: 'production',
    output : {
        filename : 'main.[ContentHash].js',
        path : path.resolve(__dirname , "dist")
    },
    plugins : [new CleanWebpackPlugin()]
})