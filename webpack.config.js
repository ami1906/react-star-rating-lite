var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/rating.js",
  output: {
    path: path.resolve("dist"),
    filename: "rating.js",
    library:'StarRatingLite',
    libraryTarget: 'commonjs2'
  },
  module: {
         rules: [
           {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {
                   presets: ['react']
               }
           }
         ]
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'create-react-class' : {
      root: 'create-react-class',
      commonjs2: 'create-react-class',
      commonjs: 'create-react-class',
      amd: 'create-react-class'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
};
