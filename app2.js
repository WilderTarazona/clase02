// var http = require('http');
// var puerto = 3000;

// http.createServer(function (req, res) {
// 	res.writeHead(200);
// 	res.write('Hola mundo');
// 	setTimeout(function () {
// 		res.end();
// 		console.log("El proceso termino.");
// 	}, 5000);
// }).listen(puerto);

// console.log("estamos escuchando en el puerto: ", puerto);

var http = require('http');
var puerto = 8080;
http.createServer(function(req, res) {
	res.writeHead(200);
	res.write('Mandamos a procesar');
	setTimeout(function(){
		console.log('')
	})

})