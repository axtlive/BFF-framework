import Controller from "./BasicController";
import WorkerModel from "../models/WorkerModel";

class WorkerController extends Controller {
  constructor() {
    super();
  }
  async actionWorkerList(ctx) {
    const workerModel = new WorkerModel();
    const result = await workerModel.getWorker();
    ctx.body = await ctx.render("worker/list", { data: result.data.data });
  }
}

export default WorkerController;
