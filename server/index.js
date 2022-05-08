const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + "/db.json"));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + "/../build/"),
});

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
