module.exports = {
  plugins: [
    require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']}),
    require("postcss-import"), //@import类型转换
    require('cssnano')
  ]
}