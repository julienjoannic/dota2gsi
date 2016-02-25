var http = require("http")

// GSI server part
var gsiServer = http.createServer(gsiHandler);
var gamestates = {};

console.log("Listening on port 9000 for Game State Integration");
gsiServer.listen(9000);

function gsiHandler(req, res) {
	console.log("Request received");
	var data = "";
	req.on("data", function(chunk) {
		data += chunk;
	});
	
	req.on("end", function() {
		console.log("Received " + data);
		var gamestate = JSON.parse(data);
		gamestates[gamestate.player.steamid] = gamestate;
		io.emit('gamestates', gamestates);
	});
	
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end();
}

// Web server
var express = require("express");
var httpApp = express();
var httpServer = http.Server(httpApp);
var io = require('socket.io')(httpServer);

httpApp.use('/node_modules', express.static('node_modules'));
httpApp.use(express.static('app'));

httpServer.listen(8080, function() {
	console.log("Listening on port 8080 for HTTP server");
});

io.on('connection', function(socket) {
	console.log('user connected');
	socket.emit('gamestates', gamestates);
});