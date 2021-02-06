const nodemon = require("nodemon");
let config = {};

if (process.env.NODE_ENV === "development") {
  const devConfig = {
    port: 3000,
  };
  config = {
    ...config,
    ...devConfig,
  };
}

if (process.env.NODE_ENV === "production") {
  const prodConfig = {
    port: 80,
  };
  config = {
    ...config,
    ...prodConfig,
  };
}

module.exports = config;
