const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack')
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
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