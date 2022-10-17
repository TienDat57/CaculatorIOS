const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
   entry: ['@babel/polyfill', './src/client.js'],
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist'),
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
               },
            },
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader',
            ]
         },
      ],
   },
   devServer: {
      port: 3000,
   },
};
