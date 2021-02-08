const koa = require("koa");
const co = require("co");
const render = require("koa-swig");
const staticService = require("koa-static");
const { historyApiFallback } = require("koa2-connect-history-api-fallback");

const {
  port,
  cache,
  viewDir,
  staticDir,
  apiWhiteList,
} = require("./config/config");
const initController = require("./controllers");
// const logMiddleWare = require("./middleWares/logMiddleware");
const ErrorHandler = require("./middleWares/ErrorHandler");
const log4js = require("log4js");

const app = new koa();
log4js.configure({
  // 存放目录
  appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
  // 日志分类
  categories: { default: { appenders: ["globalError"], level: "error" } },
});
const logger = log4js.getLogger("globalError");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

ErrorHandler.error(app, logger);

// 静态文件服务
app.use(staticService(staticDir));
// 前后端路由一样的 重定向到 / 让js控制页面
app.use(historyApiFallback({ index: "/", whiteList: apiWhiteList }));
// 日志中间件
// app.use(logMiddleWare);

// 使用路由
initController(app);

// 模板渲染
app.context.render = co.wrap(
  render({
    root: viewDir,
    autoescape: true,
    ext: "html",
    cache,
    varControls: ["[[", "]]"],
  })
);

app.listen(port, () =>
  console.log(
    `\nYour koa server is successfully started\nRunning at http://localhost:${port}\n`
  )
);
