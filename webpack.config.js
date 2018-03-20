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
            // includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d))
            // Tutorial says to use importer even though includePaths appears to work.
            importer: function(url, prev) {
              if(url.indexOf('@material') === 0) {
                var filePath = url.split('@material')[1];
                var nodeModulePath = `./node_modules/@material/${filePath}`;
                return { file: require('path').resolve(nodeModulePath) };
              }
              return { file: url };
            }
          },
        },
      ]
    }]
  },
}];
console.log(glob.sync('node_modules').map((d) => path.join(__dirname, d)));
