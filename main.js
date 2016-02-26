var http = require("http")

var games = {};

// Web server
var express = require("express");
var httpApp = express();
var httpServer = http.Server(httpApp);
var io = require('socket.io')(httpServer);

httpApp.use('/node_modules', express.static('node_modules'));
httpApp.use(express.static('app'));

httpServer.listen(9000, function() {
	console.log("Listening on port 9000 for HTTP server and GSI server");
});

io.on('connection', function(socket) {
	console.log('user connected');
	socket.emit('games', games);
});

httpApp.post('/', function(req, res) {
	console.log("POST received");
	var data = "";
	req.on("data", function(chunk) {
		data += chunk;
	});
	
	req.on("end", function() {
		console.log("Received " + data);
		var gamestate = JSON.parse(data);
		var game = games[gamestate.map.matchid]
		if (!game) {
			console.log('Adding game #' + gamestate.map.matchid);
			games[gamestate.map.matchid] = { state: {}, states: {} };
		}
		games[gamestate.map.matchid].state = gamestate
		games[gamestate.map.matchid].states[gamestate.player.steamid] = gamestate;
		io.emit('games', games);
	});
	
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end();
});