var vue = new Vue({
	el: '#vue',
	
	data: {
		games: {},
		selectedgame: {},
		selectedgameid: ''
	},

	ready: function() {
	},
	
	methods: {
		onGameIdSelected: function(e) {
			console.log('Game #' + e.target.text + ' as been selected');
			this.setSelectedGameId(e.target.text.replace('Match ', ''));
		},
		
		setSelectedGameId: function(gameid) {
			this.$set('selectedgameid', gameid);
			this.$set('selectedgame', this.games[gameid])
		},
		
		setGames: function(games) {
			
			this.$set('games', games);
			if (this.selectedgameid == '' && games) {
				this.setSelectedGameId(Object.keys(games)[0]);
			}
		}
	}
});

var socket = io();
socket.on('games', function(games) {
	vue.setGames(games);
});