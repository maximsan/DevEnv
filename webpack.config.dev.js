import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  //debuging info
  debug: true,
  //source-map
  devtool: 'inline-source-map',
  //webpack will display 
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}