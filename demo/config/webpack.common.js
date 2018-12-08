const path = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.appSrc,
  },

  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    path: path.appDist,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        include: path.appSrc,
        loader: 'babel-loader',
      },

      { // Styling
        test: /\.css$/,
        include: path.nodeModulesPath,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }],
      },

      { // Styling
        test: /\.css$/,
        include: path.appSrc,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'css-loader',
          options: {
            camelCase: true,
            importLoaders: 2,
            localIdentName: '[path][name]__[local]--[hash:base64:6]',
            modules: true,
            sourceMap: true,
          },
        }],
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.appPath,
      verbose: true,
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),

      title: 'HtmlWebpackPlugin',
      appMountId: 'app',
    }),
  ],

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -20,
        },
      },
    },
  },
};
