import koa from "koa";
import co from "co";
import render from "koa-swig";
import staticService from "koa-static";
import { historyApiFallback } from "koa2-connect-history-api-fallback";
import bodyParser from "koa-bodyparser";

import config from "./config/config";
import initController from "./controllers";
import logMiddleWare from "./middleWares/logMiddleware";
import ErrorHandler from "./middleWares/ErrorHandler";

const app = new koa();
const { port, cache, viewDir, staticDir, apiWhiteList } = config;

// ErrorHandler.error(app);
app.use(bodyParser());
// 静态文件服务
app.use(staticService(staticDir));
// 前后端路由一样的 重定向到 / 让js控制页面
app.use(historyApiFallback({ index: "/", whiteList: apiWhiteList }));
// 日志中间件
app.use(logMiddleWare());
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
  }),
);

app.listen(port, () =>
  console.log(
    `\nYour koa server is successfully started\nRunning at http://localhost:${port}\n`,
  ),
);
