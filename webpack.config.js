var path = require("path");
var webpack = require('webpack');

var autoprefixer = require('autoprefixer')({
  browsers: [
    '> 1%',
    'ie >= 9'
  ]
});


var postcssnested = require('postcss-nested');


var postcssFor = require('postcss-for');


var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: {
    app: ["./src/rm.js"]
  },
  module: {
    loaders: [{
        test: /\.js[x]?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          compact: false,
          presets: require.resolve('babel-preset-es2015'),
          plugins: [require.resolve("babel-plugin-transform-react-jsx"), require.resolve("babel-plugin-add-module-exports")]
        }
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }

    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ],
  postcss: function() {
    return [autoprefixer, postcssnested, postcssFor];
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "bundle.js",
    libraryTarget: 'umd',
    library: 'rm'
  }
};
