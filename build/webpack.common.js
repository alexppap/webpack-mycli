const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
        test: /\.css$/,
          use: [
          'style-loader',
            'css-loader'
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
    new CleanWebpackPlugin(),   // 清理dist文件夹
    ]
};
