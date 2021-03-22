import Router from "@koa/router";

import IndexController from './IndexController';
import ApiController from './ApiController';
import BooksController from './BooksController'

const indexController = new IndexController()
const apiController = new ApiController()
const booksController = new BooksController()

const router = new Router();

// 路由
function initController(app) {
  // indexController
  router.get("/", indexController.actionIndex);
  router.get("/about", indexController.actionAbout);

  // apiController
  router.get("/api/getData", apiController.actionDataList);
  router.get("/api/getWorker", apiController.actionWorkerList);

  // BooksController
  router.get("/books/list", booksController.actionBooksList);
  router.get("/books/create", booksController.actionBooksCreate);

  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;
