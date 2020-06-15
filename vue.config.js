const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    outputDir: process.env.NODE_ENV,
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ],
    },
    devServer: {
        https: true
      },
      css: {
        loaderOptions: {
          scss: {
            data: `@import "~@/scss/variables.scss";`
          }
        }
      }
  }