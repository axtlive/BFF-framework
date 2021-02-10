import Controller from "./Controller";
import WorkerModel from '../models/WorkerModel'

class ApiController extends Controller {
  constructor() {
    super();
  }
  actionDataList(ctx) {
    ctx.body = []
  }
  async actionWorkerList(ctx) {
    const workerModel = new WorkerModel();
    const result = await workerModel.getWorker()
    ctx.body = result.data.data;
  }
}

export default ApiController;
