const path = require("path");

const baseLogPath = path.resolve(__dirname, "../logs");

const reqLogPath = baseLogPath + "/request/request";
const resLogPath = baseLogPath + "/response/response";
const errLogPath = baseLogPath + "/error/error";

const pattern = "yyyy-MM-dd.log";
const alwaysIncludePattern = true;
const maxLogSize = 10 * 1024 * 1024;

const logConfig = {
  appenders: {
    // 所有的日志
    console: { type: "console" },
    // 请求日志
    reqLogger: {
      type: "dateFile", // 日志类型
      filename: reqLogPath, // 输出文件名
      pattern, // 后缀
      alwaysIncludePattern, // 上面两个参数是否合并
      encoding: "utf-8", // 编码格式
      maxLogSize, // = 10Mb // 最大存储内容
    },
    // 响应日志
    resLogger: {
      type: "dateFile",
      filename: resLogPath,
      pattern,
      alwaysIncludePattern,
      encoding: "utf-8",
      maxLogSize,
    },
    // 错误日志
    errLogger: {
      type: "dateFile",
      filename: errLogPath,
      pattern,
      alwaysIncludePattern,
      encoding: "utf-8",
      maxLogSize,
    },
  },
  // 分类以及日志等级
  categories: {
    default: {
      appenders: ["console"],
      level: "all",
    },
    reqLogger: {
      appenders: ["reqLogger"],
      level: "info",
    },
    resLogger: {
      appenders: ["resLogger"],
      level: "info",
    },
    errLogger: {
      appenders: ["errLogger"],
      level: "error",
    },
  },
};

export default logConfig;
