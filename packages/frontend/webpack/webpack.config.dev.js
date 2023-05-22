const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/styles/base.scss";',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true,
    compress: true,
    hot: true,
    port: 9000,
  },
};
