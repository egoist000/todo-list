const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.[contenthash].js',
    assetModuleFilename: './[name][ext]',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html",
  })],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './imgs/[name][ext]',
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ico)$/i,
        type: 'asset',
        generator: {
          filename: './[name][ext]',
        }
      },
    ],
  },
  resolve: {
    extensions: [".ts", "..."], //resolve .ts files and default extensions (.js, .wasm, .json)
  },
};
