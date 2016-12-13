module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename:  'main.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};
