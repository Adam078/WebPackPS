import path  from 'path'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
import HTMLWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/scripts/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    // Minify the css
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // Hash the files using md5 so that their names change when the content changes
    new WebpackMd5Hash(),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      minify: true,
      inject: true
    }),
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcepath, context)=>{
                return path.relative(path.dirname(resourcepath), context) + "/dist/"
              },
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          'css-loader'
        ]
      },
    ]
  }
}
