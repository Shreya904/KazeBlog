import jsonServer from "json-server";
import { createServer } from "http";

const server = jsonServer.create();
const router = jsonServer.router("./data/db.json"); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
createServer(server).listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
