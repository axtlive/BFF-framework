const log4Config = require("../config/logConfig");
const log4js = require("log4js");

// 调用配置文件
log4js.configure(log4Config);

class CommonHandle {
  // 格式化请求日志
  static formatReqLog(ctx, time) {
    const { method, originalUrl, query, body } = ctx;
    let text = `\n------------Request start------------\n\nRequest method: ${method} \nRequest url: ${originalUrl} \n`;
    if (method === "GET") {
      text += `Request data: ${JSON.stringify(query)} \n`;
    } else {
      text += `Request data: ${JSON.stringify(body)} \n`;
    }
    text += `All ctx info: ${JSON.stringify(ctx)}`;
    return text;
  }
  // 格式化相应日志
  static formatResLog(ctx, time) {
    return `\n------------response start------------\n\nResponse result: ${JSON.stringify(
      ctx.response.body
    )} \nResponse all: ${JSON.stringify(ctx)} \nResponse time: ${time}ms \n`;
  }
  // 格式化错误日志
  static formatErrorLog(ctx, error, time) {
    return `\n------------error start------------\n${this.formatResLog(
      ctx,
      time
    )}\nerror content: ${JSON.stringify(error)}\n`;
  }
}

class HandleLogger extends CommonHandle {
  constructor() {
    super();
  }
  // 请求日志
  static reqLogger(ctx) {
    log4js.getLogger("reqLogger").info(this.formatReqLog(ctx));
  }
  // 相应日志
  static resLogger(ctx, time) {
    log4js.getLogger("resLogger").info(this.formatResLog(ctx, time));
  }
  // 错误日志
  static errorLogger(ctx, error, time) {
    log4js.getLogger("errLogger").info(this.formatErrorLog(ctx, error, time));
  }
}

const logMiddleWare = async (ctx, next) => {
  const startTime = new Date();
  let period;
  try {
    // 请求日志
    HandleLogger.reqLogger(ctx);
    await next();
    period = new Date() - startTime;
    // 响应日志
    HandleLogger.resLogger(ctx, period);
  } catch (err) {
    period = new Date() - startTime;
    // 错误日志
    HandleLogger.errorLogger(ctx, err, period);
  }
};

module.exports = logMiddleWare;
