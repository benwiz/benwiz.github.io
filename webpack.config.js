module.exports = [
  {
    entry: {
      index: './src/scss/index.scss',
    },
    // This is necessary for webpack to compile. But we never use it.
    output: {
      filename: './tmp/tmp.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './dist/css/[name].css',
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
        },
      ],
    },
  },
  {
    entry: {
      index: './src/js/index.js',
    },
    output: {
      filename: './dist/js/[name].js',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
          },
        },
      ],
    },
  },
];
