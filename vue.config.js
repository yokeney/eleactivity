module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,  // 取消 eslint 验证
  productionSourceMap: false,
  indexPath:'index.html',//html的输出路径
  devServer: {
      host: '0.0.0.0',
      port:'8889', // 端口
      disableHostCheck: true,
      https:false,
      hotOnly: false,
      //代理
      proxy: {
          '/hszc-supplier-web': {
            //target: 'http://192.168.8.216:8080',//测试
            //target: 'http://192.168.8.116:8080',
            target: 'http://192.168.8.178:8081',//丽玲
            changeOrigin: true
          },
          '/api': {
              target:'http://yapi.demo.qunar.com/mock/68531',
              changeOrigin: true,
              ws:true,
              //重写路径  需要设置重写的话，要在后面的调用接口前加上/api 来代替target
              pathRewrite:{
              // '^/api': ''
            }
          }
        }        
  },
  css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require("postcss-px-to-viewport")({
              unitToConvert: "px",
              viewportWidth: 750,
              unitPrecision: 3,
              propList: [
                "*"
              ],
              viewportUnit: "vw",
              fontViewportUnit: "vw",
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              exclude: /(\/|\\)(node_modules)(\/|\\)/,
            })
          ]
        }
      }
  },
};