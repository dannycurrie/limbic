const http = require('http');
const ws = new require('ws');
const wsServer = new ws.Server({noServer: true});

const clients = [];

const server = http.createServer((req,res) => {
  wsServer.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

function onSocketConnect(ws) {
  clients.push(ws);

  ws.on('message', message => {
    clients.forEach(c => c.send(message));
  });

  ws.on('close', () => {
    clients = clients.filter(c => c !== ws);
  });
}

server.listen(9000);