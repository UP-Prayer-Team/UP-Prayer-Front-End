// webpack.config.js

module.exports = {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^8.0.0
            options: {
              // implementation: require('sass'),
              prependData: "@import '@/src/preset/variables.scss';",
              // sassOptions: {
              //   fiber: require('fibers'),
              //   indentedSyntax: true // optional
              // },
            },
          },
        ],
      },
    ],
  }