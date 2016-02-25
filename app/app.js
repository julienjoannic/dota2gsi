var vue = new Vue({
	el: '#gamestate',
	
	data: {
		gamestates: ""
	},

	ready: function() {
	}
});

var socket = io();
socket.on('gamestates', function(gamestates) {
	vue.$set('gamestates', gamestates);
});