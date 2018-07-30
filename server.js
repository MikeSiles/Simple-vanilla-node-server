var http = require('http');
var filesystem = require('fs');

var server = http.createServer((request, response) => {
  filesystem.readFile('./index.html', (error, content)=> {
    response.writeHead(200, { 'Content-Type': 'text/HTML' });
    response.end(content, 'utf-8');
  });
});

server.listen(8080);
