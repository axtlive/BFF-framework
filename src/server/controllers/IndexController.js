import Controller from "./BasicController";

class IndexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx) {
    ctx.body = await ctx.render("index",{message:'后端输出的数据'});
  }
  actionAbout(ctx) {
    ctx.body = "about page";
  }
}

export default IndexController;
