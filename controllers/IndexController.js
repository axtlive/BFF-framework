const Controller = require("./BasicController");

class IndexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx) {
    throw new Error("333");
    ctx.body = await ctx.render("index");
  }
  actionAbout(ctx) {
    ctx.body = "about page";
  }
}

module.exports = IndexController;
