const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/, // s?[ac]ss => matches .ass files :)
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    // index: '', // this is needed to allow root proxy, but breaks file serve
    contentBase: path.join(__dirname, 'build'),
    // publicPath: '/build',
    port: 9999,
    proxy: {
      '*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
