const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        // Untuk style scss yang di import ke lit element menggunakan lit-scss-loader
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/sass/partials'),
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true // defaults to false
            }
          },
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // Untuk style scss yang global dan ter inject langsung ke html oleh style-loader
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/sass/partials'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html')
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          noErrorOnMissing: true
        }
      ]
    }),
    new CleanWebpackPlugin()
  ]
}
