const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const port = process.env.PORT || 8000;

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.js',
  devServer: {
    hot: true,
    port,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [!prod && require.resolve('react-refresh/babel')].filter(
                Boolean,
              ),
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    !prod ? new ReactRefreshWebpackPlugin() : false,
  ].filter(Boolean),
};
