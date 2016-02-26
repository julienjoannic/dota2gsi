var vue = new Vue({
	el: '#vue',
	
	data: {
		games: {},
		selectedgame: {},
		selectedgameid: '',
		heroes: {
			npc_dota_hero_antimage: {
				positions: [1],
				roles: ["Damage dealer", "Pusher"],
				abilities: ["Mana burn", "AOE", "Physical dmg", "Magic res"],
				key_items: [ { name: "item_bfury", timing: 1200 } ]
			},
			npc_dota_hero_axe: {
				positions: [3],
				roles: ["Initiator", "Tank"],
				abilities: ["Disable", "AOE"],
				key_items: [ { name: "item_blink", timing: 600 } ]
			},
			npc_dota_hero_bane: {
				positions: [5, 4],
				roles: ["Support", "Ganker"],
				abilities: ["Disable", "Magical dmg"],
				key_items: [ { name: "item_arcane_boots", timing: 600 } ]
			},
			npc_dota_hero_bloodseeker:  {
				positions: [3],
				roles: ["Ganker", "Damage dealer"],
				abilities: ["Silence", "AOE", "Disable", "Physical dmg"],
				key_items: [ ]
			},
			npc_dota_hero_crystal_maiden: {
				positions: [5, 4],
				roles: ["Support"],
				abilities: ["Stun", "AOE", "Magical dmg"],
				key_items: [ ]
			},
			npc_dota_hero_drow_ranger: {
				positions: [1],
				roles: ["Damage dealer"],
				abilities: ["Silence", "Physical dmg"],
				key_items: [  ]
			},
			npc_dota_hero_earthshaker: {
				positions: [3],
				roles: ["Initiator"],
				abilities: ["Stun", "AOE", "Magical dmg"],
				key_items: [ { name: "item_blink", timing: 900 } ]
			},
			npc_dota_hero_juggernaut: {
				positions: [1],
				roles: ["Damage dealer", "Pusher"],
				abilities: ["AOE", "Heal", "Physical dmg"],
				key_items: [ { name: "item_bfury", timing: 1200 } ]
			},
			npc_dota_hero_mirana: {
				positions: [4],
				roles: ["Ganker"],
				abilities: ["Stun", "Magical dmg"],
				key_items: [ ]
			},
			npc_dota_hero_nevermore: {
				positions: [2],
				roles: ["Damage dealer"],
				abilities: ["AOE", "Magical dmg", "Physical dmg"],
				key_items: [ ]
			},
			npc_dota_hero_morphling: {
				positions: [1],
				roles: ["Damage dealer", "Pusher"],
				abilities: ["Burst", "Magical dmg", "Physical dmg"],
				key_items: [ { name: "item_sphere", timing: 900 } ]
			},
			npc_dota_hero_phantom_lancer: {
				positions: [1],
				roles: ["Damage dealer", "Pusher"],
				abilities: ["Physical dmg", "Illusion"],
				key_items: [ { name: "item_diffusal_blade", timing: 900 } ]
			},
			npc_dota_hero_puck: {
				positions: [2],
				roles: ["Initiator"],
				abilities: ["Silence", "Disable", "Magical dmg", "AOE"],
				key_items: [ { name: "item_blink", timing: 600 } ]
			},
			npc_dota_hero_pudge: {
				positions: [2, 4],
				roles: ["Ganker"],
				abilities: ["Disable", "Pure dmg", "Physical dmg", "Magic res"],
				key_items: [ ]
			},
			npc_dota_hero_razor: {
				positions: [2, 3],
				roles: ["Tank", "Pusher"],
				abilities: ["AOE", "Physical dmg"],
				key_items: [ { name: "item_mekansm", timing: 600 } ]
			},
			npc_dota_hero_sand_king: {
				positions: [4],
				roles: ["Initiator"],
				abilities: ["Stun", "AOE", "Magical dmg"],
				key_items: [ { name: "item_blink", timing: 900 } ]
			},
			npc_dota_hero_storm_spirit: {
				positions: [2],
				roles: ["Damage dealer", "Ganker"],
				abilities: ["Disable", "Magical dmg"],
				key_items: [ { name: "item_bloodstone", timing: 900 } ]
			},
			npc_dota_hero_sven: {
				positions: [1],
				roles: ["Damage dealer", "Initiator"],
				abilities: ["Stun", "Tank", "Physical dmg", "AOE"],
				key_items: [ { name: "item_sange_and_yasha", timing: 900 }, { name: "item_blink", timing: 1200 } ]
			},
			npc_dota_hero_tiny: {
				positions: [1, 2],
				roles: ["Damage dealer", "Initiator"],
				abilities: ["Stun", "Tank", "Magical dmg", "Physical dmg", "AOE"],
				key_items: [ { name: "item_blink", timing: 600 } ]
			},
			npc_dota_hero_vengefulspirit: {
				positions: [4, 5],
				roles: ["Support", "Ganker"],
				abilities: ["Stun", 'Armor reduction'],
				key_items: [ { name: "item_arcane_boots" , timing: 600 } ]
			},
			npc_dota_hero_windrunner: {
				positions: [2, 3],
				roles: ["Damage dealer", "Ganker"],
				abilities: ["Stun", "Physical dmg"],
				key_items: [ { name: "item_ultimate_scepter", timing: 900 } ]
			},
			npc_dota_hero_zuus: {
				positions: [2],
				roles: ["Damager dealer"],
				abilities: ["Magical dmg", "True sight", "AOE"],
				key_items: [ { name: "item_bottle", timing: 300 }, { name: "item_arcane_boots", timing: 600 } ]
			},
			npc_dota_hero_kunkka: {
				positions: [2, 3],
				roles: ["Ganker"],
				abilities: ["AOE", "Magical dmg", "Physical dmg", "Stun"],
				key_items: [ ]
			},
			npc_dota_hero_lina: {
				positions: [ 2 ],
				roles: [ "Ganker", "Damage dealer" ],
				abilities: [ "AOE", "Magical dmg", "Stun" ],
				key_items: [ { name: 'item_bottle', timing: 120}, { name: 'item_cyclone', timing: 600 } ]
			},
			npc_dota_hero_lich: {
				positions: [ 5 ],
				roles: [ "Support" ],
				abilities: [ 'AOE', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_lion: {
				positions: [ 4, 5 ],
				roles: [ 'Support', 'Ganker', 'Damage dealer' ],
				abilities: [ 'Magical dmg', 'Stun', 'Hex' ],
				key_items: [  ]
			},
			npc_dota_hero_shadow_shama: {
				positions: [ 4, 5 ],
				roles: [ 'Support', 'Ganker', 'Pusher' ],
				abilities: [ 'Magical dmg', 'Hex' ],
				key_items: [ { name: 'item_arcane_boots', timing: 600 } ]
			},
			npc_dota_hero_slardar: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Initiator' ],
				abilities: [ 'Stun', 'Armor reduction', 'AOE' ],
				key_items: [ { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_tidehunter: {
				positions: [ 3 ],
				roles: [ 'Initiator', 'Tank' ],
				abilities: [ 'Stun', 'AOE', 'Armor reduction' ],
				key_items: [ { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_witch_doctor: {
				positions: [ 5, 4 ],
				roles: [ 'Support', 'Ganker' ],
				abilities: [ 'Physical dmg', 'Stun', 'Heal' ],
				key_items: [ { name: 'item_arcane_boots', timing: 600 } ]
			},
			npc_dota_hero_riki: {
				positions: [  ],
				roles: [  ],
				abilities: [  ],
				key_items: [  ]
			},
			npc_dota_hero_enigma: {
				positions: [ 4 ],
				roles: [ 'Initiator', 'Support' ],
				abilities: [ 'Disable', 'AOE', 'Magical dmg' ],
				key_items: [ { name: 'item_mekansm', timing: 400 }, { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_tinker: {
				positions: [ 2 ],
				roles: [ 'Damage dealer', 'Pusher' ],
				abilities: [ 'Magical dmg' ],
				key_items: [ { name: 'item_travel_boots', timing: 600 } ]
			},
			npc_dota_hero_sniper: {
				positions: [ 2 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_necrolyte: {
				positions: [ 3 ],
				roles: [ 'Pusher' ],
				abilities: [ 'Magical dmg', 'Heal' ],
				key_items: [ { name: 'item_mekansm', timing: 600 } ]
			},
			npc_dota_hero_warlock: {
				positions: [ 3 ],
				roles: [  ],
				abilities: [ 'Magical dmg', 'Heal' ],
				key_items: [  ]
			},
			npc_dota_hero_beastmaster: {
				positions: [ 3 ],
				roles: [ 'Initiator', 'Pusher' ],
				abilities: [ 'Stun' ],
				key_items: [ { name: 'item_necronomicon', timing: 600 } ]
			},
			npc_dota_hero_queenofpain: {
				positions: [ 2 ],
				roles: [ 'Ganker', 'Damage dealer' ],
				abilities: [ 'AOE', 'Magical dmg', 'Pure dmg' ],
				key_items: [ { name: 'item_bottle', timing: 120 }, { name: 'item_orchid', timing: 600 } ]
			},
			npc_dota_hero_venomancer: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Damage dealer' ],
				abilities: [ 'AOE', 'Magical damage' ],
				key_items: [  ]
			},
			npc_dota_hero_faceless_void: {
				positions: [ 3 ],
				roles: [ 'Initiator' ],
				abilities: [ 'Disable', 'AOE' ],
				key_items: [ { name: 'item_blink', timing: 600 } ]
			},
			npc_dota_hero_skeleton_king: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Tank' ],
				abilities: [ 'Stun', 'Heal', 'Physical dmg' ],
				key_items: [ { name: 'item_armlet', timing: 600 }, { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_death_prophet: {
				positions: [ 2, 3 ],
				roles: [ 'Pusher', 'Damage dealer', 'Ganker' ],
				abilities: [ 'Silence', 'AOE', 'Magical dmg' ],
				key_items: [ { name: 'item_bottle', timing: 120 } ]
			},
			npc_dota_hero_phantom_assassin: {
				positions: [ 1 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Physical dmg' ],
				key_items: [ { name: 'item_bfury', timing: 900 } ]
			},
			npc_dota_hero_pugna: {
				positions: [ 3, 2 ],
				roles: [ 'Pusher', 'Ganker' ],
				abilities: [ 'Magical dmg', 'AOE' ],
				key_items: [  ]
			},
			npc_dota_hero_templar_assassin: {
				positions: [ 2 ],
				roles: [ 'Ganker', 'Damage dealer', 'Lane pressure' ],
				abilities: [ 'Physical dmg', 'Vision' ],
				key_items: [ { name: 'item_bottle', timing: 240 }, { name: 'item_desolator', timing: 600 }, { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_viper: {
				positions: [ 3, 2 ],
				roles: [ 'Tank', 'Lane pressure' ],
				abilities: [ 'Physical dmg', 'Tank' ],
				key_items: [ { name: 'item_mekansm', timing: 600 } ]
			},
			npc_dota_hero_luna: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Pusher' ],
				abilities: [ 'Magical dmg', 'Physical dmg', 'AOE' ],
				key_items: [ { name: 'item_helm_of_the_dominator', timing: 600 } ]
			},
			npc_dota_hero_dragon_knight: {
				positions: [ 1, 2 ],
				roles: [ 'Pusher', 'Damage dealer' ],
				abilities: [ 'Tank', 'Stun', 'AOE', 'Physical dmg' ],
				key_items: [ { name: 'item_sange_and_yasha', timing: 900 } ]
			},
			npc_dota_hero_dazzle: {
				positions: [ 5 ],
				roles: [ 'Support' ],
				abilities: [ 'Heal', 'Buff' ],
				key_items: [  ]
			},
			npc_dota_hero_rattletrap: {
				positions: [ 3 ],
				roles: [ 'Ganker', 'Initiator' ],
				abilities: [ 'Stun', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_leshrac: {
				positions: [ 2 ],
				roles: [ 'Damage dealer', 'Pusher' ],
				abilities: [ 'Stun', 'Magical dmg', 'AOE' ],
				key_items: [ { name: 'item_bottle', timing: 120 }, { name: 'item_bloodstone', timing: 900 } ]
			},
			npc_dota_hero_furion: {
				positions: [ 3, 4 ],
				roles: [ 'Ganker', 'Pusher', 'Damage dealer' ],
				abilities: [ 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_life_stealer: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Ganker' ],
				abilities: [ 'Physical dmg', 'Magic res' ],
				key_items: [ { name: 'item_armlet', timing: 600 } ]
			},
			npc_dota_hero_dark_seer: {
				positions: [ 3 ],
				roles: [ 'Lane pressure', 'Initiator', 'Pusher' ],
				abilities: [ 'Magical dmg' ],
				key_items: [ { name: 'item_mekansm', timing: 600 } ]
			},
			npc_dota_hero_clinkz: {
				positions: [ 1, 2, 3 ],
				roles: [ 'Ganker', 'Damage dealer' ],
				abilities: [ 'Physical dmg', 'Magical dmg', 'Invisibility' ],
				key_items: [ { name: 'item_desolator', timing: 900 } ]
			},
			npc_dota_hero_omniknight: {
				positions: [ 4 ],
				roles: [ 'Support', 'Ganker' ],
				abilities: [ 'Magic res', 'Physical res', 'Heal' ],
				key_items: [  ]
			},
			npc_dota_hero_enchantress: {
				positions: [ 3, 4 ],
				roles: [ 'Damage dealer', 'Ganker' ],
				abilities: [ 'Physical dmg', 'Pure dmg', 'Heal', 'Slow' ],
				key_items: [  ]
			},
			npc_dota_hero_huskar: {
				positions: [ 3, 2 ],
				roles: [ 'Damage dealer', 'Initiator', 'Lane pressure' ],
				abilities: [ 'Physical dmg', 'Magic res', 'Heal' ],
				key_items: [ { name: 'item_armlet', timing: 600 } ]
			},
			npc_dota_hero_night_stalker: {
				positions: [ 4 ],
				roles: [ 'Ganker' ],
				abilities: [ 'Silence', 'Magical dmg', 'Physical dmg', 'Vision' ],
				key_items: [ { name: 'item_urn_of_shadows', timing: 480 } ]
			},
			npc_dota_hero_broodmother: {
				positions: [ 2, 3 ],
				roles: [ 'Pusher' ],
				abilities: [ 'Physical dmg', 'Invisibility' ],
				key_items: [  ]
			},
			npc_dota_hero_bounty_hunter: {
				positions: [ 4 ],
				roles: [ 'Ganker' ],
				abilities: [ 'Invisibility', 'Slow', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_weaver: {
				positions: [ 3 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Physical dmg', 'Invisibility', 'Armor-' ],
				key_items: [ { name: 'item_desolator', timing: 600 }, { name: 'item_sphere', timing: 1200 } ]
			},
			npc_dota_hero_jakiro: {
				positions: [ 5 ],
				roles: [ 'Support' ],
				abilities: [ 'Stun', 'Magical dmg', 'Pusher', 'Lane pressure' ],
				key_items: [  ]
			},
			npc_dota_hero_batrider: {
				positions: [ 3, 2 ],
				roles: [ 'Initiator' ],
				abilities: [ 'Disable' ],
				key_items: [ { name: 'item_blink', timing: 600  } ]
			},
			npc_dota_hero_chen: {
				positions: [ 5 ],
				roles: [ 'Support', 'Ganker', 'Pusher' ],
				abilities: [ 'Heal' ],
				key_items: [  ]
			},
			npc_dota_hero_spectre: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Ganker' ],
				abilities: [ 'Tank', 'Physical dmg' ],
				key_items: [ { name: 'item_radiance', timing: 1800 } ]
			},
			npc_dota_hero_doom_bringer: {
				positions: [ 3, 4 ],
				roles: [ 'Disabler', 'Ganker' ],
				abilities: [ 'Tank', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_ancient_apparition: {
				positions: [ 5 ],
				roles: [ 'Support', 'Depusher' ],
				abilities: [ 'Stun', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_ursa: {
				positions: [ 1 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Tank', 'Slow', 'Physical dmg' ],
				key_items: [ { name: 'item_lifesteal', timing: 360 }, { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_spirit_breaker: {
				positions: [ 4 ],
				roles: [ 'Ganker' ],
				abilities: [ 'Stun', 'Magical dmg' ],
				key_items: [ { name: 'item_ultimate_scepter', timing: 1500 } ]
			},
			npc_dota_hero_gyrocopter: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Ganker' ],
				abilities: [ 'Stun', 'Physical dmg', 'AOE' ],
				key_items: [ { name: 'item_helm_of_the_dominator', timing: 600 } ]
			},
			npc_dota_hero_alchemist: {
				positions: [ 1, 2 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Stun', 'Tank', 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_invoker: {
				positions: [ 2 ],
				roles: [ 'Ganker', 'Pusher', 'Damage dealer' ],
				abilities: [ 'Stun', 'Magical dmg', 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_silencer: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Disabler' ],
				abilities: [ 'Silence', 'Pure dmg', 'Lane pressure' ],
				key_items: [  ]
			},
			npc_dota_hero_obsidian_destroyer: {
				positions: [ 2 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Disable', 'AOE', 'Magical dmg', 'Pure dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_lycan: {
				positions: [ 1, 3 ],
				roles: [ 'Pusher', 'Damage dealer' ],
				abilities: [ 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_brewmaster: {
				positions: [ 2 ],
				roles: [  ],
				abilities: [  ],
				key_items: [  ]
			},
			npc_dota_hero_shadow_demon: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Support' ],
				abilities: [ 'Break' ],
				key_items: [  ]
			},
			npc_dota_hero_lone_druid: {
				positions: [ 1, 3 ],
				roles: [ 'Pusher', 'Damage dealer' ],
				abilities: [  ],
				key_items: [  ]
			},
			npc_dota_hero_chaos_knight: {
				positions: [ 1 ],
				roles: [ 'Damage dealer' ],
				abilities: [ 'Illusion', 'Stun', 'Tank' ],
				key_items: [ { name: 'item_armlet', timing: 600 }, { name: 'item_heart', timing: 1800 } ]
			},
			npc_dota_hero_meepo: {
				positions: [ 2 ],
				roles: [ 'Pusher', 'Damage dealer' ],
				abilities: [ 'Root', 'Physical dmg', 'Magical dmg' ],
				key_items: [ { name: 'item_ultimate_scepter', timing: 600 } ]
			},
			npc_dota_hero_treant: {
				positions: [ 5 ],
				roles: [ 'Support' ],
				abilities: [ 'Heal', 'Root', 'AOE', 'Vision' ],
				key_items: [  ]
			},
			npc_dota_hero_ogre_magi: {
				positions: [ 4, 5 ],
				roles: [ 'Support', 'Ganker' ],
				abilities: [ 'Stun', 'Tank' ],
				key_items: [  ]
			},
			npc_dota_hero_undying: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Support' ],
				abilities: [ 'Lane pressure', 'AOE', 'Heal', 'Debuff' ],
				key_items: [  ]
			},
			npc_dota_hero_rubick: {
				positions: [ 4 ],
				roles: [ 'Ganker' ],
				abilities: [ 'Stun', 'Magic res' ],
				key_items: [  ]
			},
			npc_dota_hero_disruptor: {
				positions: [ 5, 4 ],
				roles: [ 'Support', 'Ganker' ],
				abilities: [ 'Silence' ],
				key_items: [  ]
			},
			npc_dota_hero_nyx_assassin: {
				positions: [ 4, 2 ],
				roles: [ 'Ganker' ],
				abilities: [ 'Mana burn', 'Stun', 'Invisibility', 'Magic dmg', 'Physical dmg' ],
				key_items: [ { name: 'item_arcane_boots', timing: 600 } ]
			},
			npc_dota_hero_naga_siren: {
				positions: [ 4 ],
				roles: [ 'Support', 'Pusher', 'Depusher' ],
				abilities: [  ],
				key_items: [  ]
			},
			npc_dota_hero_keeper_of_the_light: {
				positions: [ 5 ],
				roles: [ 'Support', 'Depusher' ],
				abilities: [ 'Mana regen', 'Magical dmg', 'Stun' ],
				key_items: [  ]
			},
			npc_dota_hero_wisp: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Support' ],
				abilities: [ 'Heal', 'Mana regen' ],
				key_items: [ { name: 'item_bottle', timing: 600 } ]
			},
			npc_dota_hero_visage: {
				positions: [ 4 ],
				roles: [ 'Pusher', 'Ganker' ],
				abilities: [ 'Slow', 'Magical dmg', 'Stun' ],
				key_items: [  ]
			},
			npc_dota_hero_slark: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Ganker' ],
				abilities: [ 'Disable', 'Magical dmg', 'Physical dmg', 'Tank' ],
				key_items: [ { name: 'item_invis_sword', timing: 900 } ]
			},
			npc_dota_hero_medusa: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Pusher', 'Tank' ],
				abilities: [ 'Stun', 'Physical dmg' ],
				key_items: [ { name: 'manta', timing: 900 } ]
			},
			npc_dota_hero_troll_warlord: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Ganker' ],
				abilities: [ 'Stun', 'Physical dmg' ],
				key_items: [ { name: 'item_sange_and_yasha', timing: 900 } ]
			},
			npc_dota_hero_centaur: {
				positions: [ 3 ],
				roles: [ 'Initiator', 'Tank' ],
				abilities: [ 'Pure dmg', 'Stun', 'AOE' ],
				key_items: [ { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_magnataur: {
				positions: [ 2, 3 ],
				roles: [ 'Initiator', 'Depusher' ],
				abilities: [ 'Stun', 'AOE', 'Magical dmg' ],
				key_items: [ { name: 'item_blink', timing: 600 } ]
			},
			npc_dota_hero_shredder: {
				positions: [ 3 ],
				roles: [ 'Ganker', 'Damage dealer', 'Lane pressure' ],
				abilities: [ 'Pure dmg', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_bristleback: {
				positions: [ 3 ],
				roles: [ 'Tank', 'Damage dealer' ],
				abilities: [ 'Physical res', 'Magic res', 'AOE' ],
				key_items: [  ]
			},
			npc_dota_hero_tusk: {
				positions: [ 4 ],
				roles: [ 'Ganker' ],
				abilities: [ 'Stun', 'Magical dmg', 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_skywrath_mage: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Damage dealer' ],
				abilities: [ 'Silence', 'Magical dmg', 'Lane pressure' ],
				key_items: [  ]
			},
			npc_dota_hero_abaddon: {
				positions: [ 4 ],
				roles: [ 'Support', 'Tank' ],
				abilities: [ 'Lane pressure', 'Heal', 'Purge' ],
				key_items: [  ]
			},
			npc_dota_hero_elder_titan: {
				positions: [ 4 ],
				roles: [ 'Support', 'Ganker' ],
				abilities: [ 'Disable', 'Physical dmg', 'Magical dmg', 'Damage amp' ],
				key_items: [  ]
			},
			npc_dota_hero_legion_commander: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Ganker', 'Tank', 'Depusher' ],
				abilities: [ 'Heal', 'AOE', 'Physical dmg' ],
				key_items: [ { name: 'item_blademail', timing: 600 }, { name: 'item_blink', timing: 900 } ]
			},
			npc_dota_hero_ember_spirit: {
				positions: [ 1, 2 ],
				roles: [ 'Damage dealer', 'Pusher' ],
				abilities: [ 'Root', 'Magical dmg', 'Physical dmg' ],
				key_items: [ { name: 'item_bfury', timing: 900 }, { name: 'item_travel_boots', timing: 1200 } ]
			},
			npc_dota_hero_earth_spirit: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Disabler', 'Initiator' ],
				abilities: [ 'Stun', 'Silence', 'AOE', 'Magical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_terrorblade: {
				positions: [ 1 ],
				roles: [ 'Damage dealer', 'Pusher' ],
				abilities: [ 'Physical dmg', 'Illusion' ],
				key_items: [ { name: 'manta', timing: 900 } ]
			},
			npc_dota_hero_phoenix: {
				positions: [ 3 ],
				roles: [ 'Disabler', 'Tank' ],
				abilities: [ 'Lane pressure', 'Magical damage', 'Stun' ],
				key_items: [  ]
			},
			npc_dota_hero_techies: {
				positions: [ 4 ],
				roles: [ 'Ganker', 'Depusher' ],
				abilities: [ 'Physical dmg' ],
				key_items: [  ]
			},
			npc_dota_hero_oracle: {
				positions: [  ],
				roles: [  ],
				abilities: [  ],
				key_items: [  ]
			},
			npc_dota_hero_winter_wyvern: {
				positions: [ 5 ],
				roles: [ 'Support', 'Depusher', 'Disabler' ],
				abilities: [ 'Magical dmg', 'Heal' ],
				key_items: [  ]
			},
			npc_dota_hero_arc_warden: {
				positions: [  ],
				roles: [  ],
				abilities: [  ],
				key_items: [  ]
			},
		}
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
		},
		
		getHeroes: function(game) {
			console.log("Fetching heroes");
			var heroes = [];
			for (steamid in game.states) {
				var state = game.states[steamid];
				heroes.push(state.hero.name);
			}
			
			console.log('Heroes: ' + JSON.stringify(heroes));
			return heroes;
		},
		
		getHeroAtPosition: function(game, position) {
			console.log('Retrieving hero at position ' + position);
			
			var positions = {};
			var unsureHeroes = [];
			var heroes = this.getHeroes(game);
			for (i in heroes) {
				var hero = heroes[i];
				var heroInfo = this.heroes[hero];
				if (heroInfo.positions.length == 1) positions[heroInfo.positions[0]] = hero;
				else unsureHeroes.push({ name: hero, info: heroInfo });
			}
			
			for (i in unsureHeroes) {
				var hero = unsureHeroes[i];
				for (j in hero.info.positions) {
					var p = hero.info.positions[j];
					if (!positions.hasOwnProperty(p)) {
						positions[p] = hero.name;
						break;
					}
				}
			}
			
			console.log('Hero at position ' + position + ' is ' + positions[position]);
			return positions[position];
		},
		
		addKeyItem: function(keyItems, item) {
			if (keyItems.filter(function(itm) { return item.name == itm.name }).length == 0) {
				keyItems.push(item);
			}
		},
		
		getKeyItems: function(game) {
			var keyItems = [];
			for (steamid in game.states) {
				console.log(steamid);
				var state = game.states[steamid];
				var heroInfo = this.heroes.hasOwnProperty(state.hero.name) ? this.heroes[state.hero.name] : null;
				console.log('Hero info: ' + JSON.stringify(heroInfo));
				if (heroInfo) {
					console.log('Key items for ' + state.hero.name + ' are ' + JSON.stringify(heroInfo.key_items));
					for (index in heroInfo.key_items) {
						var keyItem = heroInfo.key_items[index];
						keyItem.hero = state.hero.name;
						console.log(JSON.stringify(keyItem));
						keyItems.push(keyItem);
						console.log(JSON.stringify(keyItems));
					}
				}
			}
			
			this.addKeyItem(keyItems, { name: 'item_flying_courier', timing: 240, hero: this.getHeroAtPosition(game, 5) });
			this.addKeyItem(keyItems, { name: 'item_arcane_boots', timing: 600 });
			this.addKeyItem(keyItems, { name: 'item_mekansm', timing: 600 });
			this.addKeyItem(keyItems, { name: 'item_force_staff', timing: 900 });
			this.addKeyItem(keyItems, { name: 'item_urn_of_shadows', timing: 480 });
			
			keyItems.sort(function(a, b) { return a.timing - b.timing; });
			
			return keyItems;
		},
		
		getItemPurchaseTime: function(game, itemName, heroName) {
			var purchases = game.itemTimings.filter(function(item) {
				return item.name == itemName && (heroName == '' || item.purchased_by_hero == heroName);
			});
			
			if (purchases.length > 0) return purchases[0].purchased_at;
			else return '';
		},
		
		getItemPurchaseTiming: function(game, itemName, heroName) {
			var time = this.getItemPurchaseTime(game, itemName, heroName);
			if (time != '') return this.getTime(time);
			else return '';
		},
		
		getItemPurchaseTimingClass: function(game, itemName, heroName, expectedTiming) {
			var realTiming = this.getItemPurchaseTime(game, itemName, heroName);
			
			if (realTiming == '') {
				if (game.state.map.clock_time > expectedTiming) return 'danger';
				else if (game.state.map.clock_time > (expectedTiming - 60)) return 'warning';
				else return '';
			}
			else {
				if (realTiming < expectedTiming) return 'success';
				else if (realTiming > (expectedTiming + 60)) return 'danger';
				else return 'warning';
			}
		}
	}
});

var socket = io();
socket.on('games', function(games) {
	vue.setGames(games);
});

jQuery(function($) {
	var panels = $('#panels');

	panels.sortable({
		// Only make the .panel-heading child elements support dragging.
		// Omit this to make then entire <li>...</li> draggable.
		handle: '.panel-heading', 
		update: function() {
			$('.panel', panels).each(function(index, elem) {
				 var $listItem = $(elem),
					 newIndex = $listItem.index();

				 // Persist the new indices.
			});
		}
	});
});