import Router from "@koa/router";

import IndexController from './IndexController';
import ApiController from './ApiController';
import WorkerController from './WorkerController'

const indexController = new IndexController()
const apiController = new ApiController()
const workerController = new WorkerController()

const router = new Router();

function initController(app) {
  // apiController
  router.get("/", indexController.actionIndex);
  router.get("/about", indexController.actionAbout);

  // apiController
  router.get("/api/getData", apiController.actionDataList);
  router.get("/api/getWorker", apiController.actionWorkerList);

  // workerController
  router.get("/worker/list", workerController.actionWorkerList);

  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;
