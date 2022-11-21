const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about';
      path += 'about.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readfile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  }
  )
})

server.listen(3000, 'localhost', () => {

})