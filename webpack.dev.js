const path = require ('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge (common,{
    mode: 'development',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname , "dist")
    }
})