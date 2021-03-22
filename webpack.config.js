const path = require("path");
const glob = require("glob");
const { argv } = require("yargs");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 处理入口 模板
const files = glob.sync("./src/web/views/**/*.entry.js");
const entries = {};
const htmlPlugins = [];
// console.log(files)
files.forEach((url) => {
  if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test(url)) {
    console.log(url);
    const entryKey = RegExp.$1;
    console.log(entryKey);
    const [pagesName, template] = entryKey.split("-");
    entries[entryKey] = url;
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `../views/${pagesName}/pages/${template}.html`,
        template: `./src/web/views/${pagesName}/pages/${template}.html`,
        chunks: ["runtime", entryKey], // 只将对应的js打入对应的html
      })
    );
  }
});
const _mode = argv.mode || "development";
const envConfig = require(`./build/webpack.${_mode}.js`);

const baseConfig = {
  entry: entries,
  output: {
    path: path.join(__dirname, "./dist/assets"),
    filename: "scripts/[name].bundle.js",
  },
  optimization: {
    // 提取公共runtime模块 生成runtime.js
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [...htmlPlugins, new CleanWebpackPlugin()],
};

module.exports = merge(baseConfig, envConfig);
