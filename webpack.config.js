const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',  // Entry point for your component
  output: {
    filename: 'my-react-components.js',  // Bundle file name
    path: path.resolve(__dirname, 'dist'),
    library: 'MyReactComponents',  // Expose your component globally
    libraryTarget: 'umd',  // Universal Module Definition (works for CommonJS, AMD, etc.)
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'antd': 'antd',
  },
  mode: 'production',
};
