const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./client/config');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: './client/app/app.ts',

  output: {
    filename: path.join(config.tasks.webpack.js.dist, '/app.js'),
    path: path.resolve(config.root.dist),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'ng-annotate-loader',
          },
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ng-annotate-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: './tslint.json',
        },
        exclude: /node_modules/,
      },

      {
        test: /\.html$/,
        use: [
          'html-loader?exportAsEs6Default',
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        }),
        exclude: /node_modules/,
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          `file-loader?name=/${path.join(config.tasks.webpack.fonts.dist, '/[hash].[ext]')}`,
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          `file-loader?name=/${path.join(config.tasks.webpack.images.dist, '/[name].[ext]')}`,
        ],
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve(config.root.dist)]),
    new ExtractTextPlugin(path.join(config.tasks.webpack.css.dist, '/[name].css')),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, null, false, /js$/),
  ]
};
