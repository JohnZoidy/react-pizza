const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// const mode = process.env.NODE_ENV || 'development';
const mode = 'production';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    // publicPath: '/assets/',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist', 'public'),
      watch: false,
    },
    compress: true,
    port: 5500,
    host: 'localhost',
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  performance: {
    hints: false,
  },
  module: {
    rules: [
      { test: /\.ts(x)?$/, loader: 'ts-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|svg|png|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
