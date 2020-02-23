module.exports.work = function(creep) {
	try {
		if(creep.memory.fulled) {
			if(creep.carry.energy == 0) {
				creep.memory.fulled = false;
			} else {
				var finded = false;
				var extensions = Game.spawns['Home'].room.find(FIND_MY_STRUCTURES, {
					filter: { structureType: STRUCTURE_EXTENSION }
				});
				for(var i = 0; i < extensions.length; i++) {
					if(extensions[i].energy < extensions[i].energyCapacity) {
						finded = true;
						if(creep.transfer(extensions[i], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
							creep.moveTo(extensions[i]);
						}
					}
				}
				if(!finded) {
					if(creep.transfer(Game.spawns['Home'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
						creep.moveTo(Game.spawns['Home']);
					}
				}
			}
		} else {
			if(creep.carry.energy < creep.carryCapacity) {
				var sources = creep.room.find(FIND_SOURCES_ACTIVE);
				if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(sources[0]);
				}
			}
			else {
				creep.memory.fulled = true;
			}
		}
	} catch(e) {
		console.log("Harvester not found");
	}
}