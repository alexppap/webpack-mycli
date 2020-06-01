const merge = require('webpack-merge');
const webpack = require('webpack')
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    port: '8050',
    host: 'localhost',
    hot: true,

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]

 });