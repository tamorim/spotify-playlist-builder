const webpack = require('webpack')
const { resolve } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css'],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          resolve(__dirname, 'src'),
        ],
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  target: 'web',
  devtool: 'source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    port: 8080,
  },
}