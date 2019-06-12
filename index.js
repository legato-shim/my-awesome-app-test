var http=require('http');

function onRequest(request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.write('Hello World to Heroku');
	response.end();
}
http.createServer(onRequest).listen(8080);
console.log("Server Initiated");
