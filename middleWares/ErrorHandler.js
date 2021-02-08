class ErrorHandler {
  static error(app,logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
        if (ctx.status === 404) {
          ctx.body = "公益页面";
        }
      } catch (e) {
        logger.error(e.message)
        ctx.body = "500请求错误，正在积极修复";
      }
    });
  }
}

module.exports = ErrorHandler;
