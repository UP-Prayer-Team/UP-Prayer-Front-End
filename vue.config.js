const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    outputDir: process.env.NODE_ENV,
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ],
    },
  }