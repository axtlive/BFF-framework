import Controller from "./BasicController";
import BooksModel from "../models/BooksModel";

class ApiController extends Controller {
  constructor() {
    super();
  }
  actionDataList(ctx) {
    setTimeout(() => {}, 3000);
    ctx.body = ["1", 2, 3, 4, 5];
  }
  async actionWorkerList(ctx) {
    const booksModel = new BooksModel();
    const result = await booksModel.getBooksList();
    ctx.body = result.data.data;
  }
}

export default ApiController;
