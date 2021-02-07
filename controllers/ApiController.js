const Controller = require("./BasicController");

class ApiController extends Controller {
  constructor() {
    super();
  }
  actionDataList(ctx) {
    ctx.body = [
      { id: 1, data: "zhu" },
      { id: 2, data: "tao" },
    ];
  }
}

module.exports = ApiController;
