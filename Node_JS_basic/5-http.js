const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');
const database = process.argv[2];

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true).pathname;

  if (reqUrl === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.write('This is the list of our students\n');
    
    countStudents(database)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
