const path = require('path');

module.exports = {
   entry: ['@babel/polyfill', './src/client.js'],
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist'),
   },
   devtool: "source-map",
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
            test: /\.(s(a|c)ss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
      ],
   },
   devServer: {
      port: 3000,
   },
};
