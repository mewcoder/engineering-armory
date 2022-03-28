const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    //...
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    // globalObject: 'this' // https://webpack.docschina.org/configuration/output/#outputglobalobject
  },
  plugins: [
    // To strip all locales except “en”
    new MomentLocalesPlugin(),
  ],
};