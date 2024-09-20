const app = require('http');

app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(1245, () => {
  console.log('Server is running on port 1245');
});
