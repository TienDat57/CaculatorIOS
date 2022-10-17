const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   target: 'node',
   entry: ['@babel/polyfill', './src/server.js'],
   externals: [webpackNodeExternals()],
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './build'),
   },
   module: {
      rules: [
         {
            test: /.js$/,
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
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ]
         }
      ],
   },
   plugins: [
      new MiniCssExtractPlugin(),
   ],
};
