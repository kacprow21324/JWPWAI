const http = require('http');

class Sciezki {
  constructor() {
    this.routes = {};
  }

  addRoute(path, content) {
    this.routes[path] = content;
  }

  handleRequest(req, res) {
    const path = req.url;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (path === '/') {
      res.writeHead(200);
      let body = '<h1>Strona główna</h1><p>Wybierz link:</p><ul>';
      
      for (const routePath in this.routes) {
        body += `<li><a href="${routePath}">${routePath}</a></li>`;
      }
      
      body += '</ul>';
      res.end(body);
    } 
    else if (this.routes[path]) {
      res.writeHead(200);
      res.end(this.routes[path]);
    } 
    else {
      res.writeHead(404);
      res.end('<h1>404 - Nie znaleziono strony</h1><a href="/">Powrót na stronę główną</a>');
    }
  }

  listen(port, callback) {
    const server = http.createServer(this.handleRequest.bind(this));
    server.listen(port, callback);
  }
}

module.exports = Sciezki;