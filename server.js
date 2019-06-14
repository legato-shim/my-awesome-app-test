// using the http module
var http = require('http');
var port = process.env.PORT || process.argv[2] || 8080;
// create a simple server
function start() {
  function onRequest(req, res) {
    console.log("~~~ Request received ~~~");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<H1>Hello Heroku using NodeJS</H1>', 'utf-8');
    res.write('<p/>', 'utf-8');
    res.write('<H2>======Hello Heroku using NodeJS ===========</H2>', 'utf-8');
    res.write('<H3>======Hello Heroku using NodeJS ===========</H3>', 'utf-8');
    res.end();
  }
  http.createServer(onRequest).listen(port);
}
exports.start = start;
