const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // optimization: {

  //   splitChunks: {
    
  //   chunks: 'all',
  //   minSize: 0,
  //   cacheGroups: {
  //     commons: {
  //       chunks: "initial",
  //       minChunks: 1,
  //       name: "commons",
  //       maxInitialRequests: 5,
  //       minSize: 30, 
        
  //     }

  //   },
    
  //   }
  // }
});