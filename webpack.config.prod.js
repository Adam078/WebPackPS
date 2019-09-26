import path  from 'path'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
import HTMLWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/scripts/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      minify: true,
      inject: true
    })
  ],
  module: {
    rules: [
      {
          use: 'babel-loader',
          test: '/*.js$/',
          exclude: [
            /node_modules/,
            /^(?!.*\.test\.js$).*\.js$/
          ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
