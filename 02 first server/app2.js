const http = require('http');

const routeHandler = require('./routes.js');

const server = http.createServer(routeHandler.route);

server.listen(3000);