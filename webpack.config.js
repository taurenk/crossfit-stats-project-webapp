'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
      './src/app/index',
      '!!style!css!react-mdl/extra/material.min.css',
      'react-mdl/extra/material.min.js'
    ],

  resolve: {
    root: [path.resolve(__dirname, 'src', 'app')],
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TEST',
      template: 'src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, 'src', 'app')
      },
       { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
};
