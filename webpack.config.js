const glob = require('glob');
const path = require('path');

module.exports = [{
  entry: './app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader',
          options: {
            includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d))
          }
        },
      ]
    }]
  },
}];
console.log(glob.sync('node_modules').map((d) => path.join(__dirname, d)));
