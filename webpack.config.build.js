const git = require('git-rev-sync')
const packageJSON = require('./package.json')
const path = require('path');
const webpack = require('webpack')
const config = require('./config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: [
      'core-js/modules/es6.promise',
      'core-js/modules/es6.array.iterator',
      './src/index.js'
    ]
  },
  output: {
    publicPath: config.publicPath,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.BannerPlugin(`
    @license
    Copyright (c) 2019 ByPrice de México.
    v${packageJSON.version} - ${git.short()}
    `),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
      { from: './src/index.html', to: '404.html' },
      { from: './src/images', to: 'images' },
      { from: './src/favicon.ico', to: 'favicon.ico' }
    ])
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
