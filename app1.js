var http = require('http');
var puerto = 3000;
http.createServer(function (req, res) {
	res.writeHead(200);
	res.write("Hola mundo_"\n);
	res.end();
}).listen(puerto);

console.log("estamos escuchando", puerto);