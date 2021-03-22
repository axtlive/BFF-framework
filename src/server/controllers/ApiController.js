import Controller from "./BasicController";
import BooksModel from '../models/BooksModel'

class ApiController extends Controller {
  constructor() {
    super();
  }
  actionDataList(ctx) {
    ctx.body = []
  }
  async actionWorkerList(ctx) {
    const booksModel = new BooksModel();
    const result = await booksModel.getBooksList()
    ctx.body = result.data.data;
  }
}

export default ApiController;
