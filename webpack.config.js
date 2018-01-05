const path = require('path')

// console.log(__dirname) // gets the absolute path

module.exports = {
  // tells webpack where it should start
  entry: './src/app.js',
  output: {
    // need to provide an absolute path
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
