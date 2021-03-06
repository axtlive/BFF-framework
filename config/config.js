const path = require("path");

let config = {
  viewDir: path.join(__dirname, "../views"),
  staticDir: path.join(__dirname, "../", "assets"),
  apiWhiteList: ["/api"]
};

if (process.env.NODE_ENV === "development") {
  const devConfig = {
    port: 12306,
    cache: false,
  };
  config = {
    ...config,
    ...devConfig,
  };
}

if (process.env.NODE_ENV === "production") {
  const prodConfig = {
    port: 80,
    cache: "memory",
  };
  config = {
    ...config,
    ...prodConfig,
  };
}

module.exports = config;
