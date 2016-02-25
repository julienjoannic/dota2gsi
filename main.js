var path = require('path');
var http = require("http")

// GSI server part
var gsiServer = http.createServer(gsiHandler);
var gamestate = 'No game state';

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
		gamestate = JSON.parse(data);
		console.log("Game state: " + gamestate);
		io.emit('gamestate', gamestate);
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

httpApp.get('/api/gamestate', function(req, res) {
	console.log('/api/gamestate');
	res.send(gamestate.toString());
});

httpServer.listen(8080, function() {
	console.log("Listening on port 8080 for HTTP server");
});

io.on('connection', function(socket) {
	console.log('user connected');
});