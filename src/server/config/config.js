import path from "path";

let config = {
  viewDir: path.join(__dirname, "../../", "web/views"),
  staticDir: path.join(__dirname, "../../", "web/assets"),
  apiWhiteList: ["/api", "/books"],
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

export default config;
