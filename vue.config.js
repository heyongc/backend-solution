// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(resolve)

// https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
module.exports = {
  // webpack devServer 提供了代理的功能，
  // 该 代理可以把所有请求到当前服务中的请求，转发(代理)到另外一个服务器上
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有 /api 的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址 这里不用写api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true
      }
    },
    client: {
      overlay: false
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  chainWebpack(config) {
    // vue-cli内置的svg处理排除指定目录下的文件（内置的svg规则不处理 src/icons 目录下的文件）
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()

    // 设置 svg-sprite-loader
    // 新增icons规则：使用svg-sprite-loader处理src/icons下的svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // 创建一个新的规则，用于处理 element-plus 2 的错误
    config.module
      .rule('element-plus-2')
      .test(/\.mjs$/)
      // https://webpack.docschina.org/configuration/module/#ruletype
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()
  }
}
