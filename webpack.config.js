const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + "/source",
  devtool: 'inline-source-map',
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname,  "source"),
    filename: "client.min.js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  }
}
