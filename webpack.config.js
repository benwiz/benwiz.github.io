module.exports = [
  // App: `ui`
  {
    entry: {
      index: './index.scss',
    },
    output: {
      // This is necessary for webpack to compile. But we never use it.
      filename: './tmp/[name].scss',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './dist/[name].css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              importer(url, prev) {
                if (url.indexOf('@material') === 0) {
                  const filePath = url.split('@material')[1];
                  const nodeModulePath = `./node_modules/@material/${filePath}`;
                  return { file: require('path').resolve(nodeModulePath) };
                }
                return { file: url };
              },
            },
          },
        ],
      }],
    },
  },
  // App: `ui`
  {
    entry: {
      index: './index.js',
    },
    output: {
      filename: './dist/[name].js',
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      }],
    },
    devtool: 'source-map',
  },
];
