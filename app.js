const koa = require("koa");
const config = require('./config/index')

const app = new koa();

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(config.port, () =>
  console.log(`Server is running at http://localhost:${config.port}`)
);
