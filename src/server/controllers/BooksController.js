import Controller from "./BasicController";
import BooksModel from "../models/BooksModel";

class BooksController extends Controller {
  constructor() {
    super();
  }
  async actionBooksList(ctx) {
    console.log('-------------')
    const booksModel = new BooksModel();
    const result = await booksModel.getBooksList();
    ctx.body = await ctx.render("books/pages/list", { data: result.data.data });
  }
  async actionBooksCreate(ctx) {
    ctx.body = await ctx.render("books/pages/create");
  }
}

export default BooksController;
