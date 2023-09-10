const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  //   /// Solution 1
  //   fs.readFile('./test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  /// Solution 2
  //   const readableStream = fs.createReadStream('./test-file.txt');
  //   readableStream.on('data', (data) => {
  //     res.write(data);
  //   });
  //   readableStream.on('end', () => {
  //     res.end();
  //   });
  //   readableStream.on('error', (err) => {
  //     res.statusCode = 500;
  //     res.end('File not found: ' + err.message);
  //   });

  /// Solution 3
  const readableStream = fs.createReadStream('./test-file.txt');
  readableStream.pipe(res);
  // readableSource.pipe(writeableDest);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('server listening on');
});
