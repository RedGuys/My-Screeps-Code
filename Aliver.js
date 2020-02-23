var Standart = [WORK, CARRY, MOVE]; //200
var Defender = [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, TOUGH, TOUGH, TOUGH, TOUGH]; //550
var Builder = [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]; //500
var Harvester = [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]; //500
var Healer = [HEAL, MOVE, MOVE, MOVE, MOVE, MOVE];
var Repairer = [WORK, WORK, CARRY, CARRY, MOVE, MOVE];

module.exports.check = function() {
	var creeps = [{"name":"Harvester1","type":Standart},
			{"name":"Harvester2","type":Harvester},
			{"name":"Harvester3","type":Standart},
			{"name":"ControlerKeeper1","type":[WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]}, //550
			{"name":"ControlerKeeper2","type":[WORK, CARRY, CARRY, MOVE, MOVE]},
			{"name":"Builder1","type":Builder},
			{"name":"Builder2","type":Builder},
			{"name":"Defender1","type":Defender},
			{"name":"Healer1","type":Healer},
			{"name":"Fixick1","type":Repairer}];
	for(var i = 0;i < creeps.length; i++) {
		if(!Game.creeps[creeps[i].name]) {
			Game.spawns["Home"].createCreep(creeps[i].type,creeps[i].name);
		}
	}
}