// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file. The comments.json file contains an array of objects with the following keys: id, author, comment.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'comments.json');
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running...');
});