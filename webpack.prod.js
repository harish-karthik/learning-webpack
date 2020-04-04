const path = require ('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require ('./webpack.common')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCssExtract = require('mini-css-extract-plugin')
const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')

module.exports = merge(common , {
    mode: 'production',
    output : {
        filename : '[name].[ContentHash].js',
        path : path.resolve(__dirname , "dist")
    },
    optimization : {
        minimizer : [new optimizeCssPlugin() , new terserPlugin()]
    },
    plugins : [
        new miniCssExtract({
            filename : '[name].[contentHash].css'
        }), 
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template : './src/template.html',
            minify : {
                removeAttributeQuotes : true,
                removeComments : true,
                collapseWhitespace : true
            }
        }),
    ],
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [miniCssExtract.loader,'css-loader','sass-loader']
            }
        ]
    }
})