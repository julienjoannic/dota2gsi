var vue = new Vue({
	el: '#gamestate',
	
	data: {
		gamestate: ""
	},

	ready: function() {
	}
});

var socket = io();
socket.on('gamestate', function(gamestate) {
	vue.$set('gamestate', gamestate);
});