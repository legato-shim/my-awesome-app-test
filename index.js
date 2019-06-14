// using the http module
let http = require('http'),
port = process.env.PORT || process.argv[2] || 8080;
// create a simple server
let server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('<H1>Hello Heroku using NodeJS</H1>', 'utf-8');
	res.write('<p/>', 'utf-8');
	res.write('<H2>======Hello Heroku using NodeJS ===========</H2>', 'utf-8');
	res.end();
});
//listen on the port
server.listen(port, function() {
	console.log('App up on port: ' + port);
});
