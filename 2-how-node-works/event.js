const EventEmitter = require('events');
const http = require('http');

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sale();

myEmitter.on('newSale', () => {
  console.log('New sale ');
});

myEmitter.on('newSale', () => {
  console.log('asdsadadsad');
});

myEmitter.on('newSale', (stock) => {
  console.log('asdsadadsad', stock);
});

myEmitter.emit('newSale', 9);

/////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('first request');
  res.end('First request');
});

server.on('request', (req, res) => {
  console.log('Second request');
});

server.on('close', (req, res) => {
  console.log('Close request');
  res.end('Close request');
});

server.listen(8000, '127.0.0.1', (err) => {
  console.log('Server listening');
});
