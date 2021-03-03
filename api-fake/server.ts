const jsonServer = require('json-server');
const { resolve } = require('path');

const port = 3333;
const server = jsonServer.create();
const router = jsonServer.router(resolve(__dirname, 'db.json'));
const staticFiles = resolve(__dirname, 'static');

const middlewares = jsonServer.defaults({ static: staticFiles });
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Fake api is running on port ${port}`);
});
