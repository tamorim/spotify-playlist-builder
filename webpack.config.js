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
        options: {
          useCache: true,
          reportFiles: [
            'src/**/*.{ts,tsx}',
          ],
        },
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
    hot: true,
    https: false,
    noInfo: true,
    historyApiFallback: true,
    port: 8080,
  },
}
