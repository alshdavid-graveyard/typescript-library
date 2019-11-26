// This doesn't work as it requires a single file entry point and emits a single file bundle

const path = require("path")

module.exports = {
  entry: path.join(__dirname, "/src/index.ts"),
  mode,
  output: {
    path: path.join(__dirname, "build"),
    library: "",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    '~': path.resolve('src'),
    extensions: [".tsx", ".ts", ".js"]
  }
}
