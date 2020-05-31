const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime','transform-vue-jsx']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      },
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]

      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]

      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]

      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/,
        
        use: [
        
        'file-loader'
        
        ]
        
      }
    ]
    },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new VueLoaderPlugin()
  ]
};
