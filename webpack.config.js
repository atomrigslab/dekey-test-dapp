const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const DOCS = path.resolve(__dirname, 'docs');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: DOCS,
    publicPath: DOCS,
  },
  devServer: {
    contentBase: DOCS,
    port: 9011,
    writeToDisk: true,
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // for build scripts
    new CopyPlugin({
      patterns: [
        {
          flatten: true,
          from: './src/*',
          globOptions: {
            ignore: ['**/*.js'],
          },
        },
      ],
    }),
  ],
};
