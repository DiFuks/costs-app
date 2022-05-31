import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'node:path';
import { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'webpack-dev-server';

import babelConfig from '@root/babel.config';

const appDirectory = process.cwd();

const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: [path.resolve(appDirectory, 'web/index.tsx')],
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'web/dist'),
  },
  module: {
    rules: [
      {
        test: /\.([jt])sx?$/,
        include: [
          path.resolve(appDirectory, 'web/index.tsx'),
          path.resolve(appDirectory, 'src'),
          path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            ...babelConfig,
            plugins: [
              ...babelConfig.plugins,
              'react-native-web',
              // eslint-disable-next-line unicorn/prefer-module
              require.resolve('react-refresh/babel'),
            ],
          },
        },
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: '<html><body><div id="app"></div></body></html>',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    open: true,
  },
};

export default config;
