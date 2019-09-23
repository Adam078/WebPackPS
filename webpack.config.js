const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/scripts/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
          use: 'babel-loader',
          test: '/js$/',
          exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
