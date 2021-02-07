class ErrorHandler {
  static error(app) {
    app.use((ctx, next) => {
      if (ctx.status === 500) {
        ctx.body = "500 Error";
      }
    });
  }
}

module.exports = ErrorHandler;
