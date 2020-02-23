var positions = require("./positions");

module.exports.work = function(creep) {
	try {
		if(creep.memory.fulled) {
			if(creep.carry.energy == 0) {
				creep.memory.fulled = false;
			} else {
				const targets = creep.room.find(FIND_STRUCTURES, {
					filter: object => object.hits < object.hitsMax
				});

				targets.sort((a,b) => (b.hitsMax / b.hits) - (a.hitsMax / a.hits));

				if(targets.length > 0) {
					if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0]);
					}
				}
			}
		} else {
			if(creep.carry.energy < creep.carryCapacity) {
				var sources = creep.room.find(FIND_SOURCES_ACTIVE);
				var source = positions.getNearest(creep.pos,sources);
				if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
				}
			}
			else {
				creep.memory.fulled = true;
			}
		}
	} catch(e) {
		console.log("Fixick not found");
	}
}