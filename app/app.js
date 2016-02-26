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
			else if (this.selectedgameid != '') {
				this.$set('selectedgame', games[this.selectedgameid]);
			}
		},
		
		getTime: function(clockTime) {
			var minutes = Math.floor(clockTime / 60);
			var seconds = Math.abs(clockTime) % 60;
			return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
		},
		
		getItemImageSrc: function(itemName) {
			return 'https://yasp.co/apps/dota2/images/items/' + itemName.replace('item_', '') + '_lg.png';
		},
		
		getHeroImageSrc: function(heroName) {
			return 'https://yasp.co/apps/dota2/images/heroes/' + heroName.replace('npc_dota_hero_', '') + '_full.png';
		}
	}
});

var socket = io();
socket.on('games', function(games) {
	vue.setGames(games);
});