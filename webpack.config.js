const path = require('path');

module.exports = {
 devtool: 'source-map',
 entry: './src/assets/js/index.js',
 output: {
   path: path.resolve(__dirname, './dist/assets/js'),
   filename: 'index.min.js'
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use:  ["babel-loader"]
     }
   ]
 }
};