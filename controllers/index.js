import Router from "@koa/router";

import IndexController from './IndexController';
import ApiController from './ApiController';
import WorkerController from './WorkerController'

const indexController = new IndexController()
const apiController = new ApiController()
const workerController = new WorkerController()

const router = new Router();

function initController(app) {
  router.get("/", indexController.actionIndex);
  router.get("/about", indexController.actionAbout);
  router.get("/api/getData", apiController.actionDataList);
  router.get("/api/getWorker", apiController.actionWorkerList);
  router.get("/worker/list", workerController.actionWorkerList);

  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;
