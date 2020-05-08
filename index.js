const http = require('http');
const app = require('./src/app');
const config = require('./src/utils/config');

const server = http.createServer(app);

server.listen(config.PORT, () => {
    console.log(`[*] server listenning on port ${config.PORT} ...`)
});
